var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(3000);
console.log('Server is listening on port 3000...');
io.on('connection', function (socket) {

    socket.on('my other event', function (data) {
      console.log(data);
    });
});