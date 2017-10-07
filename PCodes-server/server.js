const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://root:qgk112358@ds139124.mlab.com:39124/pcodes');

const path = require('path');
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname,'../PCodes-release/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);
app.use(function (req, res, next) {
    res.sendFile('index.html', {root: path.join(__dirname, '../PCodes-release/')});
});

const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();
const collaboration = require('./services/collaborate.service');
collaboration.initIO(io);

const server = http.createServer(app);
io.attach(server);

server.listen(80, function () {
    console.log('Server listening on port 80!')
});
