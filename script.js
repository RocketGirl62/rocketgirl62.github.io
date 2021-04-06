function variabeln() {
    sessionStorage.setItem('load', 1);
    verschwinden(load);
}

function verschwinden(load) {
    if (load == 1) {
        try {
            document.getElementById(button1).className('visible')
        } catch (error) {

        }
    } else {
        try {
            document.getElementById(button1).className('nonvisible')
        } catch (error) {

        }
    }
}

function click() {
    sessionStorage.setItem('load', 0);
    verschwinden(load);
}