const remote = require('electron').remote;
const socket = io.connect('http://localhost:3000/');

function closeHandler(){
    //all close events here. 
    window.close();
}

function submitMessage(e){
    e.preventDefault();
    let message=document.querySelector('.message-field').value;
    //console.log(message);
    socket.emit('send message',message);
}

socket.on('message recieve',(data)=>{
    //console.log(data);
    document.querySelector('.message-container').innerHTML+=data+"<br>";
});

document.querySelector('.close').addEventListener('click',closeHandler,false);
document.querySelector('.submit-message').addEventListener('click',submitMessage,false);

//example socket message:
//socket.emit('pinger','asdf zxcv qwer');