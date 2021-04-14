/*------------------------------------------------------------------------------------------------------------------------*/
//überprüfen ob variablen zurückgesetzt werden müssen
function cookieproovecontent() {
    if (localStorage.getItem('cookieallowed') != 1) {
        dreiecksetstatus0();
    }
}

/*------------------------------------------------------------------------------------------------------------------------*/

function dreiecksetstatus0() {
    localStorage.setItem('dreieck', 0);
    dreieckset();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function dreiecksetstatus1() {
    localStorage.setItem('dreieck', 1);
    dreieckset();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function dreieckset() {
    if (localStorage.getItem('dreieck') == 1) {
        document.getElementById('unterpunkte').classList.remove('invisible');
        document.getElementById('dreieckr').classList.add('invisible');
        document.getElementById('dreiecku').classList.remove('invisible');
    } else {
        document.getElementById('unterpunkte').classList.add('invisible');
        document.getElementById('dreieckr').classList.remove('invisible');
        document.getElementById('dreiecku').classList.add('invisible');
    }
}

/*------------------------------------------------------------------------------------------------------------------------*/
//Buttons implementieren