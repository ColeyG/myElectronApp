const remote = require('electron').remote;

let close=document.querySelector('.close');

function closeHandler(){
    //all close events here. 
    window.close();
}

close.addEventListener('click',closeHandler,false);