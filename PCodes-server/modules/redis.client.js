const redis = require('redis');
const client = redis.createClient();

function set(key, value, callback) {
    client.set(key, value, function (err, res) {
        if(err) {
            console.log(err);
        } else if(callback){
            callback(res);
        }
    });
}

function get(key, callback) {
    client.get(key, function (err, res) {
        if(err) {
            console.log(err);
        }else {
            callback(res);
        }
    });
}

function expire(key, timeInSeconds) {
    client.expire(key, timeInSeconds);
}

function quit() {
    client.quit();
}

module.exports = {
    set,
    get,
    expire,
    quit,
    print: redis.print
};