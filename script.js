function variabeln() {
    sessionStorage.setItem('load', 1);
    verschwinden(load);
}

function verschwinden(load) {
    if (load == 1) {
        document.getElementById(button1).className('visible')
    } else {
        document.getElementById(button1).className('nonvisible')
        document.getElementById(button1).classRemove('visible')
    }
}

function click() {
    sessionStorage.setItem('load', 0);
    verschwinden(load);
}
