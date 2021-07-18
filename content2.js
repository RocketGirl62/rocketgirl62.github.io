/*------------------------------------------------------------------------------------------------------------------------*/
//überprüfen ob variablen zurückgesetzt werden müssen
function cookieproovecontent2() {
    if (localStorage.getItem('cookieallowed') != 1) {
        dreiecksetstatus0();
    }
}

/*------------------------------------------------------------------------------------------------------------------------*/

function dreiecksetstatus02() {
    localStorage.setItem('dreieck2', 0);
    dreieckset2();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function dreiecksetstatus12() {
    localStorage.setItem('dreieck2', 1);
    dreieckset2();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function dreieckset2() {
    if (localStorage.getItem('dreieck2') == 1) {
        document.getElementById('unterpunkte2').classList.remove('invisible');
        document.getElementById('dreieckr2').classList.add('invisible');
        document.getElementById('dreiecku2').classList.remove('invisible');
    } else {
        document.getElementById('unterpunkte2').classList.add('invisible');
        document.getElementById('dreieckr2').classList.remove('invisible');
        document.getElementById('dreiecku2').classList.add('invisible');
    }
}

/*------------------------------------------------------------------------------------------------------------------------*/
//Buttons implementieren