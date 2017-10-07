const redisClient = require('../modules/redis.client');
const timeOutSeconds = 36000;
const colors = require('../assets/colors')();
const rooms = {};
const idToRoom = {};
const logs = {};

const initIO = function (io) {
    const logPath = '/PCodes/log/';

    io.on('connection', (socket) => {
        console.log('Server received conn');

        // data 格式为 problemId^ownerEmail^requestUserEmail
        // session 格式为 problemId^ownerEmail
        const data = socket.handshake.query['data'].split('^');
        const sessionId = data[0] + '^' + data[1];
        const email = data[2];

        idToRoom[socket.id] = sessionId;

        // 检查房间是否存在
        if(!(sessionId in rooms)) {
            rooms[sessionId] = {
                sessionId: sessionId,
                owner: data[1],
                problem: data[0],
                members: []
            };
        }

        // 检查用户是否在房间里
        let member = rooms[sessionId]['members'].find(o => o.email === email);
        if(member) {
            member.id = socket.id;
        } else {
            member = {
                id: socket.id,
                email: email,
                color: colors[Math.floor(Math.random() * 49)]
            };
            rooms[sessionId]['members'].push(member);
        }
        // 发送新用户进入广播
        forwardEvent(socket.id, 'memberChange','');

        // 检查缓存
        if(!(sessionId in logs)) {
            redisClient.get(logPath + sessionId, data => {
                if(data !== undefined) {
                    logs[sessionId] = JSON.parse(data);
                } else {
                    logs[sessionId] = [];
                }
            });
        }

        // 监听读取缓存请求
        socket.on('restoreBuffer', () => {
            if(sessionId in logs) {
                const instructions = logs[sessionId];
                for(let ins of instructions) {
                    socket.emit('change', ins);
                }
            }
        });

        // 监听内容变化
        socket.on('change', delta => {
            console.log('Server receive change req');
            logs[sessionId].push(delta);
            forwardEvent(socket.id, 'change', delta);
        });

        // 监听光标变化
        socket.on('cursorMove', cursor => {
            console.log('Server receive cursorMove req');
            cursor = JSON.parse(cursor);
            cursor['id'] = socket.id;
            forwardEvent(socket.id, 'cursorMove', JSON.stringify(cursor));
        });

        // 监听用户退出
        socket.on('disconnect', () => {
            console.log('Server receive disconnect');
            const members = rooms[sessionId]['members'];

            for(let i = 0 ; i < members.length ; i++){
                if ( members[i].id === socket.id){
                    console.log('remove member ' + members[i].email);
                    members.splice(i, 1);
                }
            }

            // 保存现场移除空房间
            if(rooms[sessionId]['members'].length === 0){
                console.log('delete room ' + sessionId);
                redisClient.set(logPath + sessionId, JSON.stringify(logs[redisClient]));
                redisClient.expire(logPath + sessionId, timeOutSeconds);

                delete rooms.sessionId;
                delete logs.sessionId;
            }

            forwardEvent(socket.id, 'memberChange','');
        })
    });

    // 按照房间sessionId读取用户列表发送广播
    const forwardEvent = function(socketId, eventName, message) {
        const sessionId = idToRoom[socketId];
        const members = rooms[sessionId]['members'];

        for(let member of members) {
            if(member.id !== socketId) {
                io.to([member.id]).emit(eventName, message);
            }
        }
    };
};

const getRooms = function () {
  return rooms;
};

const getRoom = function (sessionId) {
  return rooms[sessionId];
};

module.exports = {
    initIO,
    getRooms,
    getRoom
};