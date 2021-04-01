//variabeln festlegen
function variablesquiz1() {
    localStorage.setItem('richtigeq1', 0);
    localStorage.setItem('statusq1', 1);
    localStorage.setItem('frageq1', 1);
}

function status(statusq1) {
    if (statusq1 === 1) {
        frage('frageq1');
    }
    if (statusq1 === 2) {
        antwort('frageq1');
    }
    if (statusq1 === 3) {
        endscreen();
    }

}

function frage(frageq1) {

    //Boxfarbe
    try {
        document.getElementById('box').classList('boxnormal')
    } catch (error) {

    }
    try {
        document.getElementById('box').classRemove('boxgreen')
    } catch (error) {

    }
    try {
        document.getElementById('box').classRemove('boxyellow')
    } catch (error) {

    }
    try {
        document.getElementById('box').classRemove('boxred')
    } catch (error) {

    }

    //Einblenden benötigter Elemente

    //set class
    try {
        document.getElementById('f' + frageq1).classList('visible')
    } catch (error) {

    }
    try {
        document.getElementById('q' + frageq1).classList('visible')
    } catch (error) {

    }
    try {
        document.getElementById('af1' + frageq1).classList('visible')
    } catch (error) {

    }
    try {
        document.getElementById('af2' + frageq1).classList('visible')
    } catch (error) {

    }
    try {
        document.getElementById('ac' + frageq1).classList('visible')
    } catch (error) {

    }

    try {
        document.getElementById('af1' + frageq1).classList('enabledbutton')
    } catch (error) {

    }
    try {
        document.getElementById('af2' + frageq1).classList('enabledbutton')
    } catch (error) {

    }
    try {
        document.getElementById('ac' + frageq1).classList('enabledbutton')
    } catch (error) {

    }

    //remove class
    try {
        document.getElementById('f' + frageq1).classRemove('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('q' + frageq1).classRemove('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('af1' + frageq1).classRemove('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('af2' + frageq1).classRemove('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('ac' + frageq1).classRemove('nonvisible')
    } catch (error) {

    }

    try {
        document.getElementById('af1' + frageq1).classRemove('disabledbutton')
    } catch (error) {

    }
    try {
        document.getElementById('af2' + frageq1).classRemove('disabledbutton')
    } catch (error) {

    }
    try {
        document.getElementById('ac' + frageq1).classRemove('disabledbutton')
    } catch (error) {

    }

    //anderes
    try {
        document.getElementById('skipp').classList('visible')
    } catch (error) {

    }
    try {
        document.getElementById('skipp').classRemove('nonvisible')
    } catch (error) {

    }

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i === frageq1) {

        } else {
            try {
                document.getElementById('f' + i).classList('nonvisible')
            } catch (error) {

            }
            try {
                document.getElementById('q' + i).classList('nonvisible')
            } catch (error) {

            }
            try {
                document.getElementById('af1' + i).classList('nonvisible')
            } catch (error) {

            }
            try {
                document.getElementById('af2' + i).classList('nonvisible')
            } catch (error) {

            }
            try {
                document.getElementById('ac' + i).classList('nonvisible')
            } catch (error) {

            }
            try {
                document.getElementById('e' + i).classList('nonvisible')
            } catch (error) {

            }

            //remove class
            try {
                document.getElementById('f' + i).classRemove('visible')
            } catch (error) {

            }
            try {
                document.getElementById('q' + i).classRemove('visible')
            } catch (error) {

            }
            try {
                document.getElementById('af1' + i).classRemove('visible')
            } catch (error) {

            }
            try {
                document.getElementById('af2' + i).classRemove('visible')
            } catch (error) {

            }
            try {
                document.getElementById('ac' + i).classRemove('visible')
            } catch (error) {

            }
            try {
                document.getElementById('e' + i).classRemove('visible')
            } catch (error) {

            }
        }
    }
    try {
        document.getElementById('correct').classList('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('correct').classRemove('visible')
    } catch (error) {

    }
    try {
        document.getElementById('false').classList('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('false').classRemove('visible')
    } catch (error) {

    }
    try {
        document.getElementById('skip').classList('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('skip').classRemove('visible')
    } catch (error) {

    }
    try {
        document.getElementById('weiter').classList('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('weiter').classRemove('visible')
    } catch (error) {

    }
    try {
        document.getElementById('endscreen').classList('nonvisible')
    } catch (error) {

    }
    try {
        document.getElementById('endscreen').classRemove('visible')
    } catch (error) {

    }

    //Andere Designtechnische Änderungen
    try {
        document.getElementById('ac' + frageq1).classRemove('correctbutton')
    } catch (error) {

    }

    //Nächste Funktion
    richtige(richtigeq1)
}