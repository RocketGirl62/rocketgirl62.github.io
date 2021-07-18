/*------------------------------------------------------------------------------------------------------------------------*/
//überprüfen ob variablen zurückgesetzt werden müssen
function cookieproove2() {
    if (localStorage.getItem('cookieallowed') != 1) {
        variablesquiz2();
    }
}

/*------------------------------------------------------------------------------------------------------------------------*/

//variabeln festlegen
function variablesquiz2() {
    localStorage.setItem('richtigeq2', 0);
    localStorage.setItem('statusq2', 1);
    localStorage.setItem('frageq2', 1);
}

/*------------------------------------------------------------------------------------------------------------------------*/

//Styles ändern

function status2() {
    //durch switch case ändern
    if (localStorage.getItem('statusq2') == 1) {
        frage2();
    }
    if (localStorage.getItem('statusq2') == 2) {
        antwortc2();
    }
    if (localStorage.getItem('statusq2') == 3) {
        antwortf2();
    }
    if (localStorage.getItem('statusq2') == 4) {
        antworts2();
    }
    if (localStorage.getItem('statusq2') == 0) {
        functionendscreen2();
    }

}

/*------------------------------------------------------------------------------------------------------------------------*/

function frage2() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxnormal');
    document.getElementById('box').classList.remove('boxgreen');
    document.getElementById('box').classList.remove('boxyellow');
    document.getElementById('box').classList.remove('boxred');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('af1' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('af2' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('af1' + localStorage.getItem('frageq2')).classList.add('enabledbutton');
    document.getElementById('af2' + localStorage.getItem('frageq2')).classList.add('enabledbutton');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('enabledbutton');

    //remove class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('af1' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('af2' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('nonvisible');

    document.getElementById('ac' + localStorage.getItem('frageq2')).disabled = false;

    //anderes
    document.getElementById('skipp').classList.add('visible');
    document.getElementById('skipp').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq2')) {
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
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('correctbutton');

    //Nächste Funktion
    richtige2();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function antwortc2() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxgreen');
    document.getElementById('box').classList.remove('boxnormal');
    document.getElementById('box').classList.remove('boxyellow');
    document.getElementById('box').classList.remove('boxred');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).disabled = true;
    document.getElementById('e' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('correct').classList.add('visible');
    document.getElementById('weiter').classList.add('visible');


    //remove class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('enabledbutton');
    document.getElementById('e' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('correct').classList.remove('nonvisible');
    document.getElementById('weiter').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq2')) {
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
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('correctbutton');

    //Nächste Funktion
    richtige2();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function antwortf2() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxred');
    document.getElementById('box').classList.remove('boxnormal');
    document.getElementById('box').classList.remove('boxyellow');
    document.getElementById('box').classList.remove('boxgreen');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).disabled = true;
    document.getElementById('e' + localStorage.getItem('frageq2')).classList.add('visible')
    document.getElementById('false').classList.add('visible');
    document.getElementById('weiter').classList.add('visible');

    //remove class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('enabledbutton');
    document.getElementById('e' + localStorage.getItem('frageq2')).classList.remove('nonvisible')
    document.getElementById('false').classList.remove('nonvisible');
    document.getElementById('weiter').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq2')) {
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
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('correctbutton');

    //Nächste Funktion
    richtige2();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function antworts2() {

    //Boxfarbe
    document.getElementById('box').classList.add('boxyellow');
    document.getElementById('box').classList.remove('boxnormal');
    document.getElementById('box').classList.remove('boxred');
    document.getElementById('box').classList.remove('boxgreen');

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('visible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).disabled = true;
    document.getElementById('e' + localStorage.getItem('frageq2')).classList.add('visible')
    document.getElementById('skip').classList.add('visible');
    document.getElementById('weiter').classList.add('visible');

    //remove class
    document.getElementById('f' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('q' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('nonvisible');
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('enabledbutton');
    document.getElementById('e' + localStorage.getItem('frageq2')).classList.remove('nonvisible')
    document.getElementById('skip').classList.remove('nonvisible');
    document.getElementById('weiter').classList.remove('nonvisible');

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i == localStorage.getItem('frageq2')) {
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
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.add('correctbutton');

    //Nächste Funktion
    richtige2();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function richtige2() {
    for (var i = 0; i <= 10; i++) {
        if (i == localStorage.getItem('richtigeq2')) {
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

function functionendscreen2() {
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
    document.getElementById('ac' + localStorage.getItem('frageq2')).classList.remove('correctbutton');*/

    //Nächste Funktion
    richtigeendscreen2();
}

/*------------------------------------------------------------------------------------------------------------------------*/

function richtigeendscreen2() {
    for (var i = 0; i <= 10; i++) {
        if (i == localStorage.getItem('richtigeq2')) {
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
function buttoncorrect2() {
    localStorage.setItem('richtigeq2', parseInt(localStorage.getItem('richtigeq2')) + 1);
    localStorage.setItem('statusq2', 2);
    status2();
}

function buttonfalse2() {
    localStorage.setItem('statusq2', 3);
    status2();
}

function buttonskipp2() {
    localStorage.setItem('statusq2', 4);
    status2();
}

//Buttons im Antwort Screen
function buttonweiter2() {
    localStorage.setItem('frageq2', parseInt(localStorage.getItem('frageq2')) + 1);
    if (localStorage.getItem('frageq2') == 11) {
        localStorage.setItem('statusq2', 0);
    } else {
        localStorage.setItem('statusq2', 1);
    }
    status2();
}

//Buttons im Endscreeen
function buttonplayagain2() {
    variablesquiz2();
    status2();
}