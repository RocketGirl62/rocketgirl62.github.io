//Variablen

var subjects;
var profiles;
var taskfields;
var kindOfSubjects;
var election;

function electionMain(){
    resetElection();
    initializeData();
    resetSpalte(0);
    loadP1();

    initializeData2();
}

//Reset aller Variablen
function resetElection(){
    subjects = [];
    profiles = [];
    taskfields = [];
    kindOfSubjects = [];

    //Hier muss der gernerierte Code hin
    election = new Election( ["SprachlicherSchwerpunkt","Musisch-künstlerischerSchwerpunkt","GesellschaftswissenschaftlicherSchwerpunkt","Mathematisch-naturwissenschaftlicherSchwerpunkt"] , ["Deutsch","Fremdsprachen","künstlerisch","Politik-Wirtschaft","Geschichte","Erdkunde","Religion_WerteundNormen","Mathematik","Naturwissenschaften","Informatik","Sport"] , ["sprachlich-literarisch-künstlerisch","gesellschaftswissenschaftlich","mathematisch-naturwissenschaftlich-technisch"] , ["Deutsch","Englisch","Französisch","Latein","Spanisch","Kunst","Musik","Darstellendes-Spiel","Politik-Wirtschaft","Geschichte","Erdkunde","Religion","Werte-und-Normen","Mathematik","Physik","Chemie","Biologie","Informatik","Sport"]) ;
	profiles.push( new Profile("SprachlicherSchwerpunkt", [[[1],[0,1]],[[1],[0,1]],[[-1]]]) );
	//profiles.push( new Profile("Musisch-künstlerischerSchwerpunkt", [[[2],[0,7]],[[2],[0,7]],[[-1]]]) );
    profiles.push( new Profile("Musisch-künstlerischerSchwerpunkt", [[[2]],[[0,7]],[[-1]]]) );
	profiles.push( new Profile("GesellschaftswissenschaftlicherSchwerpunkt", [[[4]],[[-1]],[[3]]]) );
	profiles.push( new Profile("Mathematisch-naturwissenschaftlicherSchwerpunkt", [[[7,8],[7,8,9]],[[7,8],[7,8,9]],[[-1]]]) );
	kindOfSubjects.push( new KindOfSubject("Deutsch", 1) );
	kindOfSubjects.push( new KindOfSubject("Fremdsprachen", 1) );
	kindOfSubjects.push( new KindOfSubject("künstlerisch", 1) );
	kindOfSubjects.push( new KindOfSubject("Politik-Wirtschaft", 1) );
	kindOfSubjects.push( new KindOfSubject("Geschichte", 1) );
	kindOfSubjects.push( new KindOfSubject("Erdkunde", 0) );
	kindOfSubjects.push( new KindOfSubject("Religion_WerteundNormen", 1) );
	kindOfSubjects.push( new KindOfSubject("Mathematik", 1) );
	kindOfSubjects.push( new KindOfSubject("Naturwissenschaften", 1) );
	kindOfSubjects.push( new KindOfSubject("Informatik", 0) );
	kindOfSubjects.push( new KindOfSubject("Sport", 0) );
	taskfields.push( new Taskfield("sprachlich-literarisch-künstlerisch", "A", 1) );
	taskfields.push( new Taskfield("gesellschaftswissenschaftlich", "B", 1) );
	taskfields.push( new Taskfield("mathematisch-naturwissenschaftlich-technisch", "C", 1) );
	subjects.push( new Subject("Deutsch", 0, 0, true, true, true, [true,true,true,true,true], 0, true, 5, 3, 1.5, 3, -1, -1) );
	subjects.push( new Subject("Englisch", 0, 1, true, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 3, -1, -1) );
	subjects.push( new Subject("Französisch", 0, 1, true, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 3, -1, -1) );
	subjects.push( new Subject("Latein", 0, 1, true, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 3, -1, -1) );
	subjects.push( new Subject("Spanisch", 0, 1, true, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 3, -1, -1) );
	subjects.push( new Subject("Kunst", 0, 2, false, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Musik", 0, 2, false, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Darstellendes-Spiel", 0, 2, false, false, true, [false,false,false,false,false], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Politik-Wirtschaft", 1, 3, false, true, true, [false,false,true,true,true], 0, 0, true, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Geschichte", 1, 4, false, true, true, [true,false,true,true,true], 0, 0, true, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Erdkunde", 1, 5, false, false, true, [false,false,false,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Religion", 1, 6, false, false, true, [false,false,false,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Werte-und-Normen", 1, 6, false, false, true, [false,false,false,false,false], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Mathematik", 2, 7, true, true, true, [true,true,true,true,true], 0, 0, true, 5, 3, 3, -1, -1) );
	subjects.push( new Subject("Physik", 2, 8, false, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Chemie", 2, 8, false, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Biologie", 2, 8, false, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Informatik", 2, 9, false, true, true, [true,true,true,true,true], 0, 0, false, 5, 3, 1.5, -1, -1) );
	subjects.push( new Subject("Sport", 4, 10, false, false, true, [false,false,false,false,true], 0, 0, false, 5, 3, 0, -1, -1) );
	//Fertig

}


//Arrays aus Strings genreienren und zurück
//Dies wird gebraucht, da man im sessionStorage nur Strings speichern kann
function generateArray(arr){
    var a = "";
    //console.log(arr);
    //console.log(arr.length);
    for (let i = 0; i<arr.length; i++){
        a +=  arr[i]+ ";" ;
    }
    //console.log(a);
    return a;
}

//Als Trennung der einzelnen Elemente im Array als String werden Semikolons (";") verwendet 
function getArray(a){
    var arr = [];
    var txt = "";
    for (let i = 0; i<a.length; i ++){
        let char = a.charAt(i);
        if(char == ";"){
            arr.push(txt);
            txt = "";
        } else {
            txt += char;
        }
    }
    if (txt != ""){
        arr.push(txt);
    }
    //console.log(arr);
    return arr;
}

//Zum genereierne von Arrays aus 0
function initializeArray(count){
    var arr = "0";
    for (let i = 1; i < count; i ++){
        arr += " 0";
    }
    return arr;
}

//Zum generieren von Arrays aus txt
function initializeArray(count, txt){
    var arr = txt;
    for (let i = 1; i < count; i ++){
        arr += ";" + txt;
    }
    return arr;
}

//Methoden, um herauszufinden, ob etwas in etwas anderem enthalten ist
function containsSubjectProfil(subject, profilBedingung){
    if (profilBedingung[0] == -1){
        return true;
    }
    //console.log(subject.kindOfSubject);
    //console.log(profilBedingung);
    for (let i = 0; i < profilBedingung.length; i++){
        if (subject.kindOfSubject == profilBedingung[i]){
            //console.log("true");
            return true;
        }
    }

    return false;
}

//Jetzt geht es ans eingemachte
//Hier kommt jetzt die tatsächliche Logik hin

//Anzeigen eines Buttons mit Text
function showButton(buttonID, txt, selectable){
    var elem = document.getElementById(buttonID);
    elem.textContent= txt;
    elem.classList.remove("nonvisible");
    elem.classList.add("visible");
    if (selectable == true){
        elem.classList.add("selectable");
        elem.disabled = false;
    } else {
        elem.classList.add("notSelectable");
        elem.disabled = true;
    }

}

//Reseten der Buttons
function resetButton(buttonID){
    let elem = document.getElementById(buttonID); //Hier könnte was falsch sein
    elem.textContent= " ";
    elem.disabled = true;
    elem.classList.add("nonvisible");
    if (elem.classList.contains("visible")){
        elem.classList.remove("visible");
        
    }
    if (elem.classList.contains("selectable")){
        elem.classList.remove("selectable");
    }
    if (elem.classList.contains("notSelectable")){
        elem.classList.remove("notSelectable");
    }
    if (elem.classList.contains("selected")){
        elem.classList.remove("selected");
    }

}

//Reseten von ganzen Spalten
function resetSpalte(spalte){
    
    var selectedSubjects = getSubjects();
    var selectedP = getP();
    var selectedTaskfields = getTaskfields();
    var selectedKindOfSubjects = getKindOfSubject();
    for (let i = spalte; i < 5; i++){
        let elem = document.getElementById("p"+i+"Reset");
        elem.disabled = true;
        for (let j = 0; j < 20; j++){
            let elem = document.getElementById("button"+i+"_"+j); //Hier könnte was falsch sein
            //console.log(elem);
            elem.textContent = " ";
            elem.disabled = true;
            
            elem.classList.add("nonvisible");
            if (elem.classList.contains("visible")){
                elem.classList.remove("visible");
            }
            if (elem.classList.contains("selectable")){
                elem.classList.remove("selectable");
            }
            if (elem.classList.contains("notSelectable")){
                elem.classList.remove("notSelectable");
            } 
            if (elem.classList.contains("selected")){
                elem.classList.remove("selected");
                let subjectIndex = parseInt(selectedP[i]);
                selectedSubjects[subjectIndex] = 0;
                selectedP[i] = 0;
                selectedKindOfSubjects[subjects[subjectIndex].kindOfSubject] = parseInt(selectedKindOfSubjects[subjects[subjectIndex].kindOfSubject]) - 1;
                selectedTaskfields[subjects[subjectIndex].taskField] = parseInt(selectedTaskfields[subjects[subjectIndex].taskField]) - 1;
            }

        }
    }
    //console.log("ja");
    var selectedProfiles = getProfiles();
    selectedProfiles = getArray(initializeArray(selectedProfiles.length, "1"));
    //console.log(selectedProfiles);
    setProfiles(selectedProfiles);
    for (let i = 0; i < spalte && i < 3; i++) {
        chooseProfil(i, subjects[selectedP[i]]);

    }
    //console.log("nein");
    setSubjects(selectedSubjects);
    setP(selectedP);
    setTaskfields(selectedTaskfields);
    setKindOfSubjects(selectedKindOfSubjects);
}


//Speichern und Abrufen der gewählten Fächer
function initializeData(){
    sessionStorage.setItem("selectedProfiles", initializeArray(election.profiles.length, "1"));
    /*
    Die Profile sind ein Sonderfall, wenn es um das Intitialisiern des Arrays geht. Eine "1" bedeutet, dass dieses Profil
    mit der gewählten Fachkobination noch möglich ist. Dass mache ich, damit ich im Folgenden dann checken kann, welche
    Möglichkeiten für das Profil es noch gibt, da wenn man als P1 z.B. Deutsch nimmt, noch nicht ganz klar ist, ob man das Musich-künstleriche Profil
     Musich-künstleriche Profil nimmt, oder doch das sprachliche.
    */
    sessionStorage.setItem("selectedSubjects", initializeArray(election.subjects.length, "0"));
    sessionStorage.setItem("selectedTaskfields", initializeArray(election.taskfields.length, "0"));
    sessionStorage.setItem("selectedKindOfSubjects", initializeArray(election.kindOfSubjects.length, "0"));
    sessionStorage.setItem("selectedP", initializeArray(5, "0"));

    //console.log(getProfiles());
    //console.log(getSubjects());
    //console.log(getTaskfields());
    //console.log(getKindOfSubject());
    //console.log(getP());
}

//Alle Indizes sind gleich wie die von den Arrays mit den Objekten
function getProfiles(){
    return getArray(sessionStorage.getItem("selectedProfiles"));
}

function getSubjects(){ //-> enthält die Indizes der Fächer
    return getArray(sessionStorage.getItem("selectedSubjects"));
}

function getTaskfields(){
    return getArray(sessionStorage.getItem("selectedTaskfields"));
}

function getKindOfSubject(){
    return getArray(sessionStorage.getItem("selectedKindOfSubjects"));
}

function getP(){
    return getArray(sessionStorage.getItem("selectedP"));
}

function setProfiles(arr){
    //console.log(arr);
    sessionStorage.setItem("selectedProfiles", generateArray(arr));
    //console.log("a");
}

function setSubjects(arr){
    sessionStorage.setItem("selectedSubjects", generateArray(arr));
}

function setTaskfields(arr){
    sessionStorage.setItem("selectedTaskfields", generateArray(arr));
}

function setKindOfSubjects(arr){
    sessionStorage.setItem("selectedKindOfSubjects", generateArray(arr));
}

function setP(arr){
    sessionStorage.setItem("selectedP", generateArray(arr));
}


//Logik, welche Fächer wann gewählt werden müssen
/*
  - Für jedes Prüfungsfach geibt es eine load Funktion
  -> die Funktion für load bei P1 muss bei onlaoad geladen werden

*/
function loadeA(p){
    //P ist dafür, um zu bestimmen, um welches Prüfungsfach es sich handelt (also Nummer)

    //var profil = -1; --> also das hier defintiv nicht 
    var selectedProfiles = getProfiles();
    var selectedSubjects = getSubjects();
    var selectedKindOfSubjects = getKindOfSubject();
    var selectedP = getP(); 
    //console.log(selectedProfiles);
    let elem = document.getElementById("p"+p+"Reset");
    elem.disabled = false;
    
    for (let i = 0; i < subjects.length; i++){
        //herausfinden, ob es auf eA wählbar ist
        if (subjects[i].eA == false){
            continue;
        }
        if (subjects[i].pfach[p]== false){
            continue;
        }
        showButton("button"+p+"_"+i, subjects[i].name, false); //Erstmal als nicht auswählbar anzeigen, wird falls das Fach wählbar ist geändert
        //Wenn ein Fach schon gewählt wurde kann dieser Durchlauf auch übersprungen werden
        if (selectedSubjects[i] == "1"){
            continue;
        }

        if (selectedKindOfSubjects[2] == "1" && subjects[i].kindOfSubject == 2){
            continue;
        }

        //console.log(selectedProfiles);
        //Jetzt müssen alle Profile durchgegangen werden
        for (let j = 0; j < selectedProfiles.length; j++){
           
            //Wenn dieses Profil nicht mehr zur Auswahl steht, kann der Durchlauf übersprungen werden
            if (selectedProfiles[j] == 0){
                //console.log("continue");
                continue;
            }

            //Wir nehemen an dieser Stelle jetzt an, dass die Bedingungen in einem dreidimesionalen Array stehen
            /* Aufbau des Arrays
            profile[welches prüfungsfach][die wie vielte bedingung][aus welchen fachtypen]
            -> dieser Array ist 0 indiziert
            */

            var bedingungen = []; // das sind die Bedingungnen für dieses Profil an dieser Positon auf Basis voheriger Wahlen von Fächern
            
            //Wenn es nur eine Bedingung gibt, dann kann sie sich ja nicht mit anderne überschneiden
            //console.log(profiles[j].kindOfSubject[p]);
            if (profiles[j].kindOfSubject[p].length == 1){
                //Prüfen, ob die Bedingung auf das Fach zutrifft
                bedingungen = profiles[j].kindOfSubject[p];

            } else {//Jetzt muss geguckt werden, welche Bedingungen sich mit den vorigen Prüfungsfächern decken, und ob diese deckungsgleiche Bedingung erfüllt ist
                var bedingungenTmp = []; //das ist dafür, falls ein Fach mehrere Bedingungen erfüllt
                for (let k = 0; k < profiles[j].kindOfSubject[p].length; k++){ //durchgehen jeder Bedingung der aktuellen Position
                    //Dann jede vorige Postion
                    for (let l = 0; l < p; l++){
                        //Und dann jede Bedingung dieser vorigen Position
                        for(let m = 0; m < profiles[j].kindOfSubject[l].length; m++){
                            //Sind die Bedingungen gleich?
                            //console.log("gleich");
                            if (profiles[j].kindOfSubject[p][k].length == profiles[j].kindOfSubject[l][m].length){
                                //Wurde diese Bedingung erfüllt?
                                //console.log("doppelt");
                                //console.log(profiles[j].kindOfSubject[p][k]);
                                if (containsSubjectProfil(subjects[selectedP[l]], profiles[j].kindOfSubject[l][m])){
                                    //console.log("true");
                                    bedingungenTmp.push(profiles[j].kindOfSubject[l][m]); //Enfach mal speicher welche Bedingungen idenentisch sind und erfüllt
                                }

                            }
                        }
                    }
                }
                //console.log("bedingungenTmp");
                //console.log(bedingungenTmp);
                //Jetzt sind in bedingungenTmp alle Bedingungen, die erfüllt sind
                //Nun werden in bedingungen alle Bedingungen, die übrig bleiben gespeichert
                for (let k = 0; k < profiles[j].kindOfSubject[p].length; k++){
                    if (bedingungenTmp.length > 1){
                        bedingungen.push(profiles[j].kindOfSubject[p][k]);
                        continue;
                    } else if (bedingungenTmp.length == 0){
                        bedingungen.push(profiles[j].kindOfSubject[p][k]);
                        continue;
                    }
                    
                    if (profiles[j].kindOfSubject[p][k].length != bedingungenTmp[0].length && bedingungenTmp.length == 1){
                        bedingungen.push(profiles[j].kindOfSubject[p][k]);
                        break;
                    }
                    
                }
            }
            //Ab jetzt erhält bedingungen alle Bedingungen, die übrig bleiben und auf dieses Prüfungsfach angewendet werden müsssen
            //Hier muss jetzt geprüft werden, ob eine der Bedingungen auf 
            //console.log(bedingungen);
            for (let k = 0; k < bedingungen.length; k++){
                if(containsSubjectProfil(subjects[i], bedingungen[k])){
                    resetButton("button"+p+"_"+i);
                    showButton("button"+p+"_"+i, subjects[i].name, true);
                    
                }
            }
                
            /*
            Ich brauche eine Funktion, die prüft, welche Bedingen die gwählten Fächer schon erfüllen und die nicht erfüllten zurückgibt
            -> aber beim naturwissenschafltichen Profil erfüllt z.B. Bio beide Bedingungen und es bleibt keine mehr übrig
            -> bei gese kann ich auch nicht an p2 -1 schreiben, weil man darf ja nicht PoWi wählen (Lösung bed.: !Politik (für nicht powi))
            -> es kann ja auch sein, dass die unterschiedliche bedingungen haben, also P1 zwei und P2 theoretisch drei und es decken sich iw nur ein bis zwei

            Vielleicht kann ich ja prüfen, welche Bedingungen auf das potenzielle Fach zu treffen und welche nicht
            */

            //Ich glaube hier bin ich fertig, muss ggf. noch gedebugged werden
        
        }
        

    }
}



//Eine Funktion, die einträgt, welches Fach gewählt wurde
function selectP(p, subjectIndex){
    //p ist dafür da, zu bestimmen, welches Prüfungsfach gewählt wurde
    var selectedSubjects = getSubjects();
    var selectedP = getP();
    var selectedTaskfields = getTaskfields();
    var selectedKindOfSubjects = getKindOfSubject();

    clickButton(p, subjectIndex);

    selectedP[p] = subjectIndex;
    selectedSubjects[subjectIndex] = 1;
    selectedTaskfields[subjects[subjectIndex].taskfield] =  parseInt(selectedTaskfields[subjects[subjectIndex].taskfield]) + 1;
    /*if (subjects[subjectIndex].kernfach){
        selectedTaskfields[selectedTaskfields.length-1] += 1;
    }*/
    selectedKindOfSubjects[subjects[subjectIndex].kindOfSubject] = parseInt(selectedKindOfSubjects[subjects[subjectIndex].kindOfSubject]) + 1;

    if (p < 3){
        //console.log("a");
        chooseProfil(p, subjects[subjectIndex]);
    }


    setSubjects(selectedSubjects);
    setKindOfSubjects(selectedKindOfSubjects);
    setP(selectedP);
    setTaskfields(selectedTaskfields);

}

//Eine Funktion, die andere Fächer deaktiviert
//Naja, brauche ich nicht mehr so wirklich

//Eine Funtkion, die das Profil festlegt -> fertig
function chooseProfil(p, subject){ //subject ist hier ein objekt
    //Diese Funktion ist dafür da, die möglichen Profile einzuschränken
    var selectedProfiles = getProfiles();
    console.log(selectedProfiles.length);
    for (let i = 0; i < selectedProfiles.length; i++){ //Jedes Profil durchgehen
        if (selectedProfiles[i] == "1"){
            let found = false;
            console.log(i);
            console.log(profiles[i].name);
            console.log(profiles[i].kindOfSubject[p]);
            for (let j = 0; j < profiles[i].kindOfSubject[p].length; j++){
                if (containsSubjectProfil(subject, profiles[i].kindOfSubject[p][j])){
                    found = true;
                }
            }
            if (!found){
                selectedProfiles[i] = "0";
            }
        }
    }
    setProfiles(selectedProfiles);
}


//Es fehlt noch eine Funktion, die den angecklickten Button färbt und alle deaktiviert
//erledigt
function clickButton(spalte, buttonIndex){
    for (let i = 0; i < 20; i++){
        let elem = document.getElementById("button"+spalte+"_"+i); //Hier könnte was falsch sein
        elem.disabled = true;
        if (i == buttonIndex){
            elem.classList.add("selected");
            elem.classList.remove("selectable");
            continue;
        }
        if (elem.classList.contains("selectable")){
            elem.classList.remove("selectable");
            elem.classList.add("notSelectable");
        }
        
    }
    if (spalte == 4){
        let elem = document.getElementById("continue");
        elem.disabled = false;
    }
}

//Gebraucht wird noch eine vernünftige Funktion zum zurücksetzen aller Variablen
//Schreibe ich später

//P1
//Eine Load-Funktion, die erstellt, welche Fächer auf eA wählbar sind
function loadP1(){
    //Hier muss dann loadeA aufgerufen werden
    loadeA(0);
}

//P2
function loadP2(){
    //Hier muss dann loadeA aufgerufen werden
    loadeA(1);
}

//P3
function loadP3(){
    //Hier muss dann loadeA aufgerufen werden
    loadeA(2);
}

function loadgA(p){
    /*
    - Alle Fächer durchgehen
    - Prüfen, ob sie schon gewählt wurden
    - Dann muss ich mir quasi die Bedingungen des Profils holen, die noch offen sind (muss ich aber machen, bevor ich alle Fächer durchgehen kann)
    - Naja, ich habe vier Bedingungen pro Profil, also kann ich solange ich weniger Bedingungen übrig habe als Spalten, alle freischalten, außer
    es fehlen Kernfächer
    --> also mit anderen Worten, solange ich weniger Bedingungen und offene Kernfächer als übrige Spalten habe, kann ich alles freischalten (was auf
    dieser Position gewählt werden kann)
    - dann müsste es funktionieren
    */
    //Erstmal Bedingungen raussuchen
    var bedingungen = [];
    //var selectedProfiles = getProfiles(); -> brauch ich durchs hardcoden nicht mehr
    var selectedSubjects = getSubjects();
    var selectedTaskfields = getTaskfields();
    var selectedP = getP();
    var selectedKindOfSubjects = getKindOfSubject();
    var kernfaecherAnzahl = 0;
    var bedingungen = [];
    let elem = document.getElementById("p"+p+"Reset");
    elem.disabled = false;
    for (let i = 0; i < p; i++){ //Kernfächer zählen
        if (subjects[selectedP[i]].kernfach == true){
            kernfaecherAnzahl ++;
        }
    }
    var fehltB = false;
    if (selectedTaskfields[1]=="0"){
        fehltB = true;
    }
    for (let i = 0; i < taskfields.length; i++){
        if (selectedTaskfields[i] == 0){
            bedingungen.push(i);
        }
    }
    for (let i = 0; i < subjects.length; i++){
        if (subjects[i].gA == false){
            continue;
        }
        if (subjects[i].pfach[p]== false){
            continue;
        }
        showButton("button"+p+"_"+i,subjects[i].name, false); //Erstmal als nicht auswählbar anzeigen, wird falls das Fach wählbar ist geändert
        //Wenn ein Fach schon gewählt wurde kanndieser Durchlauf auch übersprungen werden
        if (selectedSubjects[i] == true){
            continue;
        }

        if (selectedKindOfSubjects[2] == "1" && subjects[i].kindOfSubject == 2){
            continue;
        }

        //Wenn noch nichts gesellschaftliches gewählt wurde
        
        if (fehltB){
            if (2 - kernfaecherAnzahl == 4 - p){ //Es wurden noch nicht alle Kernfächer gewählt und auf allen restlichen Positionen müssen Kernfächer liegen
                if (subjects[i].kernfach == false && subjects[i].taskField != 1){
                    continue;
                }
            }
        }

        if (2 - kernfaecherAnzahl == 5 - p){ //Es wurden noch nicht alle Kernfächer gewählt und auf allen restlichen Positionen müssen Kernfächer liegen
            if (subjects[i].kernfach == false){
                continue;
            }
        }
        if (bedingungen.length == 5-p){
        //Es wurdne noch nicht alle Aufgabenbreiche gewählt und auf allen restlichen Positionen müssen Fächer dieser Aufgabenbereiche liegen
            let found = false
            for (let j = 0; j < bedingungen.length; j++){
                if (subjects[i].taskfield == bedingungen[j]){
                    found = true;
                    break;
                }
            }
            if (found == false){
                continue;
            }
        }
        //Hier sind jetzt nur noch wählbare Fächer
        resetButton("button"+p+"_"+i);
        showButton("button"+p+"_"+i, subjects[i].name, true);
    }
    
    /*
    - Jetzt muss ich alle Aufgabenbereiche
    durchgehen
    - Vielleicht sollte ich bei den Kernfächern
    anfagben, weil wenn die nicht vollständige sind
    und ggf. nicht erfüllt werden können, darf ich nur
    Kernfächer freischalten
    */
}

//P4
function loadP4(){
    loadgA(3);
}

//P5
function loadP5(){
    loadgA(4);
}

function loadAbdecker(){
    resetElection();
    //console.log("ja");
    abdecker();
    //console.log("ja");

    resetBox(0);
    //console.log("ja");
    loadNextBox(0);
    //console.log("ja");
}

function initializeData2(){
    sessionStorage.setItem("Pflicht", "");
    sessionStorage.setItem("showingBoxes", initializeArray(8, "0"));
    sessionStorage.setItem("selectedB", initializeArray(8, "0"));
    sessionStorage.setItem("in12", "0");
}

function getPflicht(){
    return getArray(sessionStorage.getItem("Pflicht")); 
}
function getShowingBoxes(){
    return getArray(sessionStorage.getItem("showingBoxes")); 
}
function getSelectedB(){
    return getArray(sessionStorage.getItem("selectedB")); 
}
function setPflicht(arr){
    sessionStorage.setItem("Pflicht", generateArray(arr));
}
function setShowingBoxes(arr){
    sessionStorage.setItem("showingBoxes", generateArray(arr));
}
function setSelectedB(arr){
    sessionStorage.setItem("selectedB", generateArray(arr));
}

function setIn12(n){
    sessionStorage.setItem("in12", n);
}

function getIn12(){
    return sessionStorage.getItem("in12");
}



//Jetzt fehlen nur noch die Abdecker
function abdecker(){
    var selectedSubjects = getSubjects();
    var selectedKindOfSubjects = getKindOfSubject();

    //Muss noch initialisiert etc. werden
    //var pflicht = getPflicht();


    //Erstmal alle Pflichtfächer auswählen
    pflicht = [];
    for (let i = 0; i < subjects.length; i++){
        if (selectedSubjects[i] == "1"){
            continue;
        }
        if (subjects[i].belegungsverpflichtung == true){
            pflicht.push(i);
            selectedSubjects[i] = "1";
            selectedKindOfSubjects[subjects[i].kindOfSubject] += 1;
        }
    }
    //Hier müsste man es dann in die obere Leiste schreiben
    //Jetzt müsste man noch die Sachen anzeigen, bei denen man eine Wahl hat

    //Hier fehlen noch die aufgerufen Methoden
    setPflicht(pflicht);
    setSubjects(selectedSubjects);
    setKindOfSubjects(selectedKindOfSubjects);
    //console.log("pflicht");
    //console.log(pflicht);

}



function loadNextBox(b){
    //b ist dafür, um zu bestimmen, welche Box geladen werden muss, bzw, wo diese hin muss

    /*eigentlich muss ich hier ja nur durchgehen, welche belegungsverpflichtungen noch nicht erfüllt sind und
    dann mal abfragen, welche Fächer noch für 12 in frage kommen und dann informatik und erdkunde
    */
    var selectedSubjects = getSubjects();
    var selectedKindOfSubjects = getKindOfSubject();
    var selectedProfiles = getProfiles();
    //console.log(selectedProfiles);

    //Muss noch initialisiert etc. werden
    var showingBoxes = getShowingBoxes();


    //Erstmal allgemeine Belegungsverpflichtungen
    var reihnfolge = [6, 2, 1, 8]
    
    /*var box = 0;

    for (let i = 0; i < showingBoxes.length; i++) {
        if (showingBoxes[i] == "0"){
            box = i;
        }

    }*/
    var buttonCount = 0;

    for (let i = 0; i < reihnfolge.length; i++){
        let tmp = parseInt(selectedKindOfSubjects[reihnfolge[i]]);
        if (tmp < kindOfSubjects[reihnfolge[i]].numberSubjects){
            let elem = document.getElementById("b"+b);
            elem.classList.remove("nonvisible");
            elem.classList.add("visible");
            elem = document.getElementById("b"+b+"Reset");
            elem.classList.remove("nonvisible");
            elem.classList.add("visible");
            elem = document.getElementById("h" + b);
            elem.textContent = kindOfSubjects[reihnfolge[i]].name;

            for (let j = 0; j < subjects.length; j++){
                if (subjects[j].gA == false){
                    continue;
                }
                if (subjects[j].kindOfSubject != reihnfolge[i] ){
                    continue;
                }
                if (selectedSubjects[j] == "1"){
                    //Dieses Fach muss ausgegraut angezeigt werden
                    showButton("button"+b+"_"+buttonCount, subjects[j].name, false);
                    buttonCount++;
                    continue;
                }
                //Jetzt sind nur noch wählbare Fächer übrig
                //console.log("ja");
                showButton("button"+b+"_"+buttonCount, subjects[j].name, true);
                buttonCount++;
            }
            showingBoxes[b] = reihnfolge[i];
            setShowingBoxes(showingBoxes);
            return; //Dann habe ich ein weiteres Kästchen freigeschalten
        }
    }

    //Jetzt sind die gesamten Pflichtbelegungen abgearbeitet und jetzt fehlen noch die Profilspezifischen
    buttonCount = 0;
    var profil;
    //Erstmal ausmachen welches Profil gewählt wurde
    for (let i = 0; i < selectedProfiles.length; i++){
        if (selectedProfiles[i] == "1"){
            profil = i;
            break;
        }
    }
    //console.log(profil);
    //Jetzt für jedes Profil entsprechende zusätzliche Box ggf. freischalten
    if (profil == 0 && parseInt(selectedKindOfSubjects[1]) < 2){//Zwei Fremdsprachen im sprachlichen Profil
        let elem = document.getElementById("b"+b);
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("b"+b+"Reset");
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("h" + b);
        elem.textContent = "Weitere " + kindOfSubjects[1].name;
        for (let j = 0; j < subjects.length; j++){
            if (subjects[j].gA == false){
                continue;
            }
            if (subjects[j].kindOfSubject != 1){
                continue;
            }

            if (selectedSubjects[j] == "1"){
                //Dieses Fach muss ausgegraut angezeigt werden
                showButton("button"+b+"_"+buttonCount, subjects[j].name, false);
                buttonCount++;
                continue;
            }
            //Jetzt sind nur noch wählbare Fächer übrig
            showButton("button"+b+"_"+buttonCount, subjects[j].name, true);
            buttonCount++;
        }
        showingBoxes[b] = 1;
        setShowingBoxes(showingBoxes);
        return; //Dann habe ich ein weiteres Kästchen freigeschalten

    }

    if (profil == 3 && parseInt(selectedKindOfSubjects[8])+parseInt(selectedKindOfSubjects[9]) < 2){//Zwei Naturwissenschaften im naturwissenschaftlichen Profil
        let elem = document.getElementById("b"+b);
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("b"+b+"Reset");
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("h" + b);
        elem.textContent = "Weitere " + kindOfSubjects[8].name;
        for (let j = 0; j < subjects.length; j++){
            if (subjects[j].gA == false){
                continue;
            }
            if (subjects[j].kindOfSubject != 8 && subjects[j].kindOfSubject != 9){
                continue;
            }
            if (selectedSubjects[j] == "1"){
                //Dieses Fach muss ausgegraut angezeigt werden
                showButton("button"+b+"_"+buttonCount, subjects[j].name, false);
                buttonCount++;
                continue;
            }
            //Jetzt sind nur noch wählbare Fächer übrig
            showButton("button"+b+"_"+buttonCount, subjects[j].name, true);
            buttonCount++;
        }
        showingBoxes[b] = 89;
        setShowingBoxes(showingBoxes);
        return; //Dann habe ich ein weiteres Kästchen freigeschalten

    }

    if (profil == 2 && (parseInt(selectedKindOfSubjects[1]) < 2 || parseInt(selectedKindOfSubjects[8]) < 2) ){//Zwei Naturwissenschaften oder zwei Fremdsprachen im gesellschaftlichen Profil
        let elem = document.getElementById("b"+b);
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("b"+b+"Reset");
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("h" + b);
        elem.textContent = "Weitere " + kindOfSubjects[1].name +" oder weitere " + kindOfSubjects[8].name;
        for (let j = 0; j < subjects.length; j++){
            if (subjects[j].gA == false){
                continue;
            }
            if (subjects[j].kindOfSubject != 1 && subjects[j].kindOfSubject != 8){
                continue;
            }
            if (selectedSubjects[j] == "1"){
                //Dieses Fach muss ausgegraut angezeigt werden
                showButton("button"+b+"_"+buttonCount, subjects[j].name, false);
                buttonCount++;
                continue;
            }
            //Jetzt sind nur noch wählbare Fächer übrig
            showButton("button"+b+"_"+buttonCount, subjects[j].name, true);
            buttonCount++;
        }
        showingBoxes[b] = 18;
        setShowingBoxes(showingBoxes);
        return; //Dann habe ich ein weiteres Kästchen freigeschalten
    }

    if (profil == 1 && parseInt(selectedKindOfSubjects[2]) < 2){
        let elem = document.getElementById("b"+b);
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("b"+b+"Reset");
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("h" + b);
        elem.textContent = "Weitere " + kindOfSubjects[2].name;
        for (let j = 0; j < subjects.length; j++){
            if (subjects[j].gA == false){
                continue;
            }
            if (subjects[j].kindOfSubject != 1){
                continue;
            }
            if (selectedSubjects[j] == "1"){
                //Dieses Fach muss ausgegraut angezeigt werden
                showButton("button"+b+"_"+buttonCount, subjects[j].name, false);
                buttonCount++;
                continue;
            }
            //Jetzt sind nur noch wählbare Fächer übrig
            showButton("button"+b+"_"+buttonCount, subjects[j].name, true);
            buttonCount++;
        }
        showingBoxes[b] = 2;
        setShowingBoxes(showingBoxes);
        return; //Dann habe ich ein weiteres Kästchen freigeschalten

    }

    //Jetzt als nächsten freiwillig in 12 belegen
    
    if (getIn12() == "0"){
        var options = [];
        if (profil == 0){
            options = [9, 8, 5, 6, 11, -1]
        } else if (profil == 1){
            options = [9, 8, 11, -1]
        } else if (profil == 2){
            options = [5, 6, 11, -1]
        } else if (profil == 3){
            options = [9, 8, 5, 6, 11, -1]
        }
        //Jetzt sind die Fachoptionen festgelegt
        let elem = document.getElementById("b"+b);
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("b"+b+"Reset");
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("h" + b);
        elem.textContent = "In 12 belegen (optional)";
        for (let i = 0; i < options.length; i++){
            if (options[i] == -1){
                showButton("button"+b+"_"+i, "Nichts", true);
                continue;
            }
            let selectedP = getP();
            let tmp = true;
            for (let j = 0; j < selectedP.length; j++){
                if (parseInt(selectedP[j]) == options[i]){
                    tmp = false;
                    break;
                }
            }
            if (selectedSubjects[options[i]] == "1" && tmp == true){
                showButton("button"+b+"_"+i, subjects[options[i]].name, true);
            } else {
                showButton("button"+b+"_"+i, subjects[options[i]].name, false);
            }
            
            
        }
        showingBoxes[b] = 10;
        setShowingBoxes(showingBoxes);
        return;
    }

    if (selectedSubjects[10] == "0"){
        let elem = document.getElementById("b"+b);
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("b"+b+"Reset");
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("h" + b);
        elem.textContent = "Erdkunde?";
        showButton("button"+b+"_0", "ja", true);
        showButton("button"+b+"_1", "nein", true);
        showingBoxes[b] = 5;
        setShowingBoxes(showingBoxes);
        return;
    }

    if (selectedSubjects[17] == "0"){
        let elem = document.getElementById("b"+b);
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("b"+b+"Reset");
        elem.classList.remove("nonvisible");
        elem.classList.add("visible");
        elem = document.getElementById("h" + b);
        elem.textContent = "Informatik?";
        showButton("button"+b+"_0", "ja", true);
        showButton("button"+b+"_1", "nein", true);
        showingBoxes[b] = 9;
        setShowingBoxes(showingBoxes);
        return;
    }

    //Wenn man hier hin kommt, gibt es keine weiteren Boxen zum freischalten, also kann man nun weiter gehen
    let elem = document.getElementById("continue");
    elem.disabled = false;
    resetBox(b);


}

function clickBox (box, buttonIndex) {
    var showingBoxes = getShowingBoxes();
    var selectedB = getSelectedB();
    var selectedSubjects = getSubjects();
    var selectedKindOfSubjects = getKindOfSubject()


    var boxType = parseInt(showingBoxes[box]);
    console.log(boxType);
    var cnt = 0;
    if (boxType == 18){
        for (let i = 0; i < subjects.length; i++) {
            if (subjects[i].kindOfSubject == 1 || subjects[i].kindOfSubject == 8){
                let elem = document.getElementById("button"+box+"_"+cnt); 
                elem.disabled = true;
                if (cnt == buttonIndex){
                    selectedSubjects[i] = 1;
                    selectedKindOfSubjects[subjects[i].kindOfSubject] = parseInt(selectedKindOfSubjects[subjects[i].kindOfSubject]) + 1;
                    selectedB[box] = i;
                    elem.classList.add("selected");
                    elem.classList.remove("selectable");
                } else {
                    if (elem.classList.contains("selectable")){
                        elem.classList.remove("selectable");
                        elem.classList.add("notSelectable");
                    }
                }
                cnt++;
            }
        }
    } else if (boxType == 89){
        for (let i = 0; i < subjects.length; i++) {
            if (subjects[i].kindOfSubject == 8 || subjects[i].kindOfSubject == 9){
                let elem = document.getElementById("button"+box+"_"+cnt); 
                elem.disabled = true;
                if (cnt == buttonIndex){
                    selectedSubjects[i] = 1;
                    selectedKindOfSubjects[subjects[i].kindOfSubject] = parseInt(selectedKindOfSubjects[subjects[i].kindOfSubject]) + 1;
                    selectedB[box] = i;
                    elem.classList.add("selected");
                    elem.classList.remove("selectable");
                } else {
                    if (elem.classList.contains("selectable")){
                        elem.classList.remove("selectable");
                        elem.classList.add("notSelectable");
                    }
                }
                cnt++;
            }
        }
    } else if (boxType == 10){
        let selectedProfiles = getProfiles();
        var profil;
        //Erstmal ausmachen welches Profil gewählt wurde
        for (let i = 0; i < selectedProfiles.length; i++){
            if (selectedProfiles[i] == "1"){
                profil = i;
                break;
            }
        }
        //console.log(profil);
        var options = [];
        if (profil == 0){
            options = [9, 8, 5, 6, 11, -1]
        } else if (profil == 1){
            options = [9, 8, 11, -1]
        } else if (profil == 2){
            options = [5, 6, 11, -1]
        } else if (profil == 3){
            options = [9, 8, 5, 6, 11, -1]
        }

        for (let i = 0; i < options.length; i++){
            //console.log(i);
            let elem = document.getElementById("button"+box+"_"+i); 
            elem.disabled = true;
            if (i == buttonIndex){
                if (options[i] != -1){
                    selectedSubjects[options[i]] = 1;
                    selectedKindOfSubjects[options[i]] = parseInt(selectedKindOfSubjects[subjects[options[i]].kindOfSubject]) + 1;
                }
                setIn12(options[i]);
                selectedB[box] = options[i];
                elem.classList.add("selected");
                elem.classList.remove("selectable");
            } else {
                if (elem.classList.contains("selectable")){
                    elem.classList.remove("selectable");
                    elem.classList.add("notSelectable");
                }
            }
        }

    } else if (boxType == 5 || boxType == 9){
        console.log("yes");
        if (buttonIndex == 0){
            let elem = document.getElementById("button"+box+"_0");
            elem.disabled = true;
            elem.classList.add("selected");
            elem.classList.remove("selectable");
            console.log("yes");
            if (boxType == 5){
                selectedSubjects[10] = 1;
                selectedKindOfSubjects[5] = 1;
                console.log("yes");
            } else {
                selectedSubjects[17] = 1;
                selectedKindOfSubjects[9] = 1;
            }

            elem = document.getElementById("button"+box+"_1");
            elem.disabled = true;
            elem.classList.remove("selectable");
            elem.classList.add("notselectable");
            
        } else {
            let elem = document.getElementById("button"+box+"_1");
            elem.disabled = true;
            elem.classList.add("selected");
            elem.classList.remove("selectable");

            elem = document.getElementById("button"+box+"_0");
            elem.disabled = true;
            elem.classList.add("notselectable");
            elem.classList.remove("selectable");
            if (boxType == 5){
                selectedSubjects[10] = -1;
                selectedKindOfSubjects[5] = -1;
            } else {
                selectedSubjects[17] = -1;
                selectedKindOfSubjects[9] = -1;
            }
        }
        
        
    } else {
        for (let i = 0; i < subjects.length; i++) {
            if (subjects[i].kindOfSubject == boxType){
                let elem = document.getElementById("button"+box+"_"+cnt); 
                elem.disabled = true;
                if (cnt == buttonIndex){
                    selectedB[box] = i;
                    selectedSubjects[i] = 1;
                    selectedKindOfSubjects[subjects[i].kindOfSubject] = parseInt(selectedKindOfSubjects[subjects[i].kindOfSubject]) + 1;
                    elem.classList.add("selected");
                    elem.classList.remove("selectable");
                } else {
                    if (elem.classList.contains("selectable")){
                        elem.classList.remove("selectable");
                        elem.classList.add("notSelectable");
                    }
                }
                cnt++;
            }
        }
    }
    setShowingBoxes(showingBoxes);
    setSelectedB(selectedB);
    setSubjects(selectedSubjects);
    setKindOfSubjects(selectedKindOfSubjects);

    if (box < 7){
        loadNextBox(box+1);
    }
}

function resetBox(box){

    var selectedSubjects = getSubjects();
    var selectedKindOfSubjects = getKindOfSubject();

    var showingBoxes = getShowingBoxes();
    var selectedB = getSelectedB();
    //console.log(selectedB);


    for (let i = 7; i >= box; i--){
        let elem = document.getElementById("b"+i); 
        //console.log(elem);        
        elem.classList.add("nonvisible");
        elem = document.getElementById("b"+i+"Reset"); 
        //console.log(elem);        
        elem.classList.add("nonvisible");
        elem = document.getElementById("h" + i);
        elem.textContent = "";

        for (let j = 0; j < 10; j++){
            let elem = document.getElementById("button"+i+"_"+j); 
            //console.log(elem);
            elem.textContent = " ";
            elem.disabled = true;
            
            elem.classList.add("nonvisible");
            if (elem.classList.contains("visible")){
                elem.classList.remove("visible");
            }
            if (elem.classList.contains("selectable")){
                elem.classList.remove("selectable");
            }
            if (elem.classList.contains("notSelectable")){
                elem.classList.remove("notSelectable");
            } 
            if (elem.classList.contains("selected")){
                elem.classList.remove("selected");
                let subjectIndex = parseInt(selectedB[i]);
                selectedB[i] = 0;
                if (showingBoxes[i] == "10"){
                    setIn12(0);
                } else {
                    selectedSubjects[subjectIndex] = 0;
                    //console.log(subjects[subjectIndex].kindOfSubject);
                    selectedKindOfSubjects[subjects[subjectIndex].kindOfSubject] = parseInt(selectedKindOfSubjects[subjects[subjectIndex].kindOfSubject]) - 1;
                }
                
            }
            showingBoxes[i] = 0;

        }
    }
    //console.log("ja");
    
    //console.log("nein");
    setSubjects(selectedSubjects);
    setSelectedB(selectedB);
    setShowingBoxes(showingBoxes);
    setKindOfSubjects(selectedKindOfSubjects); 

}


function loadShow(){
    resetElection();
    var selectedSubjects = getSubjects();
    var selectedProfiles = getProfiles();
    var selectedP = getP();
    var in12 = getIn12();
    var elem = document.getElementById("l");
    var profil;
    for (let i = 0; i < selectedProfiles.length; i++){
        if (selectedProfiles[i] == "1"){
            profil = profiles[i].name;
            break;
        }
    }
    elem.textContent = profil;

    for (let i = 0; i < 5; i++) {
        elem = document.getElementById("l"+i);
        elem.textContent = "Prüfungsfach " + (i+1) + ": " + subjects[selectedP[i]].name;
    }
    for (let i = 0; i < subjects.length; i++) {
        elem = document.getElementById("l"+(i+5));
        let out = subjects[i].name + ": ";
        if (i == 18){
            out = subjects[i].name + "theorie: ";
        }
        if (selectedSubjects[i]=="1"){
            out += "x"
        } else {
            out += "--"
        }
        elem.textContent = out;
    }
    elem = document.getElementById("l25");
    let out = "In 12 belegen: ";
    if (in12 == "-1"){
        out += "--";
    } else {
        out += subjects[in12].name;
    }
    elem.textContent = out;

}





/*
To Do:

- das mit dem zurücksetzen fixen -> done
- die geschichte mit dem gessellschaftlichen und und den kernfächern in den prüfungsfächern -> habe es schon versucht, jetzt fehlt noch p3
- alle Texte ändern
- halbwegs ansehbares Design schreiben
- ausdrucken
- informatik in den abdeckern
- zurücksetzen und neu laden in den abdeckern
- anzeigen von den bereichen und kernfächern

- p5 zurücksetzen fixen -> done



*/
