/*------------------------------------------------------------------------------------------------------------------------*/
//überprüfen ob variablen zurückgesetzt werden müssen
function cookieproove() {
    if (localStorage.getItem('cookieallowed') != 1) {
        variablesquiz1();
    }
}

/*------------------------------------------------------------------------------------------------------------------------*/

//variabeln festlegen
function variablesquiz1() {
    localStorage.setItem('richtigeq1', 0);
    localStorage.setItem('statusq1', 1);
    localStorage.setItem('frageq1', 1);
}

/*------------------------------------------------------------------------------------------------------------------------*/

//Styles ändern

function status() {
    //durch switch case ändern
    if (localStorage.getItem('statusq1') == 1) {
        frage();
    }
    if (localStorage.getItem('statusq1') == 2) {
        antwortc();
    }
    if (localStorage.getItem('statusq1') == 3) {
        antwortf();
    }
    if (localStorage.getItem('statusq1') == 4) {
        antworts();
    }
    if (localStorage.getItem('statusq1') == 0) {
        functionendscreen();
    }

}

/*------------------------------------------------------------------------------------------------------------------------*/

function frage() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxnormal');
    document.getElementById('box').classList.remove('boxgreen');
    document.getElementById('box').classList.remove('boxyellow');
    document.getElementById('box').classList.remove('boxred');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('af1' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('af2' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('af1' + localStorage.getItem('frageq1')).classList.add('enabledbutton');
    document.getElementById('af2' + localStorage.getItem('frageq1')).classList.add('enabledbutton');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('enabledbutton');

    //remove class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('af1' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('af2' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('nonvisible');

    document.getElementById('ac' + localStorage.getItem('frageq1')).disabled = false;

    //anderes
    document.getElementById('skipp').classList.add('visible');
    document.getElementById('skipp').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq1')) {
            document.getElementById('e' + i).classList.add('nonvisible');
            document.getElementById('e' + i).classList.remove('visible');
        } else {
            //set class
            document.getElementById('f' + i).classList.add('nonvisible');
            document.getElementById('q' + i).classList.add('nonvisible');
            document.getElementById('af1' + i).classList.add('nonvisible');
            document.getElementById('af2' + i).classList.add('nonvisible');
            document.getElementById('ac' + i).classList.add('nonvisible');
            document.getElementById('e' + i).classList.add('nonvisible');
            document.getElementById('p' + i).classList.add('nonvisible');

            //remove class
            document.getElementById('f' + i).classList.remove('visible');
            document.getElementById('q' + i).classList.remove('visible');
            document.getElementById('af1' + i).classList.remove('visible');
            document.getElementById('af2' + i).classList.remove('visible');
            document.getElementById('ac' + i).classList.remove('visible');
            document.getElementById('e' + i).classList.remove('visible');
            document.getElementById('p' + i).classList.remove('visible');

        }
    }
    document.getElementById('correct').classList.add('nonvisible');
    document.getElementById('correct').classList.remove('visible');
    document.getElementById('false').classList.add('nonvisible');
    document.getElementById('false').classList.remove('visible');
    document.getElementById('skip').classList.add('nonvisible');
    document.getElementById('skip').classList.remove('visible');
    document.getElementById('weiter').classList.add('nonvisible');
    document.getElementById('weiter').classList.remove('visible');
    document.getElementById('endscreen').classList.add('nonvisible');
    document.getElementById('endscreen').classList.remove('visible');

    //Andere Designtechnische Änderungen
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('correctbutton');

    //Nächste Funktion
    richtige();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function antwortc() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxgreen');
    document.getElementById('box').classList.remove('boxnormal');
    document.getElementById('box').classList.remove('boxyellow');
    document.getElementById('box').classList.remove('boxred');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).disabled = true;
    document.getElementById('e' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('correct').classList.add('visible');
    document.getElementById('weiter').classList.add('visible');


    //remove class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('enabledbutton');
    document.getElementById('e' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('correct').classList.remove('nonvisible');
    document.getElementById('weiter').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq1')) {
            document.getElementById('af1' + i).classList.add('nonvisible');
            document.getElementById('af2' + i).classList.add('nonvisible');
            document.getElementById('af1' + i).classList.remove('visible');
            document.getElementById('af2' + i).classList.remove('visible');

        } else {
            //set class
            document.getElementById('f' + i).classList.add('nonvisible');
            document.getElementById('q' + i).classList.add('nonvisible');
            document.getElementById('af1' + i).classList.add('nonvisible');
            document.getElementById('af2' + i).classList.add('nonvisible');
            document.getElementById('ac' + i).classList.add('nonvisible');
            document.getElementById('e' + i).classList.add('nonvisible');
            document.getElementById('p' + i).classList.add('nonvisible');

            //remove class
            document.getElementById('f' + i).classList.remove('visible');
            document.getElementById('q' + i).classList.remove('visible');
            document.getElementById('af1' + i).classList.remove('visible');
            document.getElementById('af2' + i).classList.remove('visible');
            document.getElementById('ac' + i).classList.remove('visible');
            document.getElementById('e' + i).classList.remove('visible');
            document.getElementById('p' + i).classList.remove('visible');

        }
    }

    document.getElementById('false').classList.add('nonvisible');
    document.getElementById('false').classList.remove('visible');
    document.getElementById('skip').classList.add('nonvisible');
    document.getElementById('skip').classList.remove('visible');
    document.getElementById('skipp').classList.add('nonvisible');
    document.getElementById('skipp').classList.remove('visible');
    document.getElementById('endscreen').classList.add('nonvisible');
    document.getElementById('endscreen').classList.remove('visible');

    //Andere Designtechnische Änderungen
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('correctbutton');

    //Nächste Funktion
    richtige();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function antwortf() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxred');
    document.getElementById('box').classList.remove('boxnormal');
    document.getElementById('box').classList.remove('boxyellow');
    document.getElementById('box').classList.remove('boxgreen');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).disabled = true;
    document.getElementById('e' + localStorage.getItem('frageq1')).classList.add('visible')
    document.getElementById('false').classList.add('visible');
    document.getElementById('weiter').classList.add('visible');

    //remove class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('enabledbutton');
    document.getElementById('e' + localStorage.getItem('frageq1')).classList.remove('nonvisible')
    document.getElementById('false').classList.remove('nonvisible');
    document.getElementById('weiter').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq1')) {
            document.getElementById('af1' + i).classList.add('nonvisible');
            document.getElementById('af2' + i).classList.add('nonvisible');
            document.getElementById('af1' + i).classList.remove('visible');
            document.getElementById('af2' + i).classList.remove('visible');

        } else {
            //set class
            document.getElementById('f' + i).classList.add('nonvisible');
            document.getElementById('q' + i).classList.add('nonvisible');
            document.getElementById('af1' + i).classList.add('nonvisible');
            document.getElementById('af2' + i).classList.add('nonvisible');
            document.getElementById('ac' + i).classList.add('nonvisible');
            document.getElementById('e' + i).classList.add('nonvisible');
            document.getElementById('p' + i).classList.add('nonvisible');

            //remove class
            document.getElementById('f' + i).classList.remove('visible');
            document.getElementById('q' + i).classList.remove('visible');
            document.getElementById('af1' + i).classList.remove('visible');
            document.getElementById('af2' + i).classList.remove('visible');
            document.getElementById('ac' + i).classList.remove('visible');
            document.getElementById('e' + i).classList.remove('visible');
            document.getElementById('p' + i).classList.remove('visible');

        }
    }

    document.getElementById('correct').classList.add('nonvisible');
    document.getElementById('correct').classList.remove('visible');
    document.getElementById('skip').classList.add('nonvisible');
    document.getElementById('skip').classList.remove('visible');
    document.getElementById('skipp').classList.add('nonvisible');
    document.getElementById('skipp').classList.remove('visible');
    document.getElementById('endscreen').classList.add('nonvisible');
    document.getElementById('endscreen').classList.remove('visible');

    //Andere Designtechnische Änderungen
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('correctbutton');

    //Nächste Funktion
    richtige();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function antworts() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxyellow');
    document.getElementById('box').classList.remove('boxnormal');
    document.getElementById('box').classList.remove('boxred');
    document.getElementById('box').classList.remove('boxgreen');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).disabled = true;
    document.getElementById('e' + localStorage.getItem('frageq1')).classList.add('visible')
    document.getElementById('skip').classList.add('visible');
    document.getElementById('weiter').classList.add('visible');

    //remove class
    document.getElementById('f' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('enabledbutton');
    document.getElementById('e' + localStorage.getItem('frageq1')).classList.remove('nonvisible')
    document.getElementById('skip').classList.remove('nonvisible');
    document.getElementById('weiter').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq1')) {
            document.getElementById('af1' + i).classList.add('nonvisible');
            document.getElementById('af2' + i).classList.add('nonvisible');
            document.getElementById('af1' + i).classList.remove('visible');
            document.getElementById('af2' + i).classList.remove('visible');

        } else {
            //set class
            document.getElementById('f' + i).classList.add('nonvisible');
            document.getElementById('q' + i).classList.add('nonvisible');
            document.getElementById('af1' + i).classList.add('nonvisible');
            document.getElementById('af2' + i).classList.add('nonvisible');
            document.getElementById('ac' + i).classList.add('nonvisible');
            document.getElementById('e' + i).classList.add('nonvisible');
            document.getElementById('p' + i).classList.add('nonvisible');

            //remove class
            document.getElementById('f' + i).classList.remove('visible');
            document.getElementById('q' + i).classList.remove('visible');
            document.getElementById('af1' + i).classList.remove('visible');
            document.getElementById('af2' + i).classList.remove('visible');
            document.getElementById('ac' + i).classList.remove('visible');
            document.getElementById('e' + i).classList.remove('visible');
            document.getElementById('p' + i).classList.remove('visible');

        }
    }

    document.getElementById('correct').classList.add('nonvisible');
    document.getElementById('correct').classList.remove('visible');
    document.getElementById('false').classList.add('nonvisible');
    document.getElementById('false').classList.remove('visible');
    document.getElementById('skipp').classList.add('nonvisible');
    document.getElementById('skipp').classList.remove('visible');
    document.getElementById('endscreen').classList.add('nonvisible');
    document.getElementById('endscreen').classList.remove('visible');

    //Andere Designtechnische Änderungen
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.add('correctbutton');

    //Nächste Funktion
    richtige();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function richtige() {
    for (var i = 0; i <= 10; i++) {
        if (i == localStorage.getItem('richtigeq1')) {
            //set class
            document.getElementById('r' + i).classList.add('visible');

            //remove class
            document.getElementById('r' + i).classList.remove('nonvisible');

        } else {
            //set class
            document.getElementById('r' + i).classList.add('nonvisible');

            //remove class
            document.getElementById('r' + i).classList.remove('visible');
        }

    }
}

/*------------------------------------------------------------------------------------------------------------------------*/

function functionendscreen() {
    //Boxfarbe
    document.getElementById('box').classList.add('boxnormal');
    document.getElementById('box').classList.remove('boxgreen');
    document.getElementById('box').classList.remove('boxyellow');
    document.getElementById('box').classList.remove('boxred');

    //Einblenden benötigter Elemente
    document.getElementById('endscreen').classList.add('visible');
    document.getElementById('endscreen').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        document.getElementById('f' + i).classList.add('nonvisible');
        document.getElementById('q' + i).classList.add('nonvisible');
        document.getElementById('af1' + i).classList.add('nonvisible');
        document.getElementById('af2' + i).classList.add('nonvisible');
        document.getElementById('ac' + i).classList.add('nonvisible');
        document.getElementById('e' + i).classList.add('nonvisible');
        document.getElementById('r' + i).classList.add('nonvisible');

        //remove class
        document.getElementById('f' + i).classList.remove('visible');
        document.getElementById('q' + i).classList.remove('visible');
        document.getElementById('af1' + i).classList.remove('visible');
        document.getElementById('af2' + i).classList.remove('visible');
        document.getElementById('ac' + i).classList.remove('visible');
        document.getElementById('e' + i).classList.remove('visible');
        document.getElementById('r' + i).classList.remove('visible');
    }
    document.getElementById('r0').classList.add('nonvisible');
    document.getElementById('r0').classList.remove('visible');

    document.getElementById('correct').classList.add('nonvisible');
    document.getElementById('correct').classList.remove('visible');
    document.getElementById('false').classList.add('nonvisible');
    document.getElementById('false').classList.remove('visible');
    document.getElementById('skip').classList.add('nonvisible');
    document.getElementById('skip').classList.remove('visible');
    document.getElementById('weiter').classList.add('nonvisible');
    document.getElementById('weiter').classList.remove('visible');
    document.getElementById('skipp').classList.add('nonvisible');
    document.getElementById('skipp').classList.remove('visible');

    /*Andere Designtechnische Änderungen
    document.getElementById('ac' + localStorage.getItem('frageq1')).classList.remove('correctbutton');*/

    //Nächste Funktion
    richtigeendscreen();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function richtigeendscreen() {
    for (var i = 0; i <= 10; i++) {
        if (i == localStorage.getItem('richtigeq1')) {
            //set class
            document.getElementById('p' + i).classList.add('visible');

            //remove class
            document.getElementById('p' + i).classList.remove('nonvisible');

        } else {
            //set class
            document.getElementById('p' + i).classList.add('nonvisible');

            //remove class
            document.getElementById('p' + i).classList.remove('visible');
        }

    }
}

/*------------------------------------------------------------------------------------------------------------------------*/

//Methoden für die Buttons

//Buttons im Frage Screen
function buttoncorrect() {
    localStorage.setItem('richtigeq1', parseInt(localStorage.getItem('richtigeq1')) + 1);
    localStorage.setItem('statusq1', 2);
    status();
}

function buttonfalse() {
    localStorage.setItem('statusq1', 3);
    status();
}

function buttonskipp() {
    localStorage.setItem('statusq1', 4);
    status();
}

//Buttons im Antwort Screen
function buttonweiter() {
    localStorage.setItem('frageq1', parseInt(localStorage.getItem('frageq1')) + 1);
    if (localStorage.getItem('frageq1') == 11) {
        localStorage.setItem('statusq1', 0);
    } else {
        localStorage.setItem('statusq1', 1);
    }
    status();
}

//Buttons im Endscreeen
function buttonplayagain() {
    variablesquiz1();
    status();
}