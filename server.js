const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
server.listen(3000);

console.log('Server is listening on port 3000...');
connections=[];
log=[];

io.on('connection', function (socket) {
  connections.push(socket);
  console.log('new connection, total connections: '+connections.length);
    
  socket.on('disconnect',function(data){
    connections.splice(connections.indexOf(socket),1);
    console.log('Disconected: %s sockects connected',connections.length);
  });

  socket.on('send message',(data)=>{
    console.log('mes: '+data);
    socket.emit('message recieve',data);
  });

  socket.on('pinger', function (data) {
    console.log(data);
  });
});