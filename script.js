var load = 1;

function variabeln() {
    var load = 1;
    verschwinden(load);
}

function verschwinden(load) {
    if (load === 1) {
         try {
            document.getElementById('button1').classList.remove('nonvisible');
        } catch (error) {

        }
        document.getElementById('button1').classList.add('visible');
        
    } else {
        
        try {
            document.getElementById('button1').classList.remove('visible');
        } catch (error) {

        }
        document.getElementById('button1').classList.add('nonvisible');
        
    }
}

function click() {
    var load = 0;
    verschwinden(load);
}
