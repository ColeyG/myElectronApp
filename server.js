const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
server.listen(3000);

console.log('Server is listening on port 3000...');

io.on('connection', function (socket) {

    socket.on('pinger', function (data) {
      console.log(data);
    });
});