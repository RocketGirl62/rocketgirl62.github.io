function variabeln() {
    sessionStorage.setItem('load', 1);
    verschwinden(load);
}

function verschwinden(load) {
    if (load == 1) {
        document.getElementById(button1).classList.add('visible')
        document.getElementById(button1).classList.remove('nonvisible')
    } else {
        document.getElementById(button1).classList.add('nonvisible')
        document.getElementById(button1).classList.remove('visible')
    }
}

function click() {
    sessionStorage.setItem('load', 0);
    verschwinden(load);
}
