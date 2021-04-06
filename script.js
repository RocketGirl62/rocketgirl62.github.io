var load = 1;

function variabeln() {
    var load = 1;
    verschwinden(load);
}

function verschwinden(load) {
    if (load == 1) {
        document.getElementById(button1).classList.remove('nonvisible');
        document.getElementById(button1).classList.add('visible');
        
    } else {
        document.getElementById(button1).classList.remove('visible');
        document.getElementById(button1).classList.add('nonvisible');
        
    }
}

function click() {
    var load = 0;
    verschwinden(load);
}
