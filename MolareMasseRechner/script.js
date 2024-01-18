periodtable = [];
anzahlen = [];
erg = 0

function start(){
    periodtable = [];
    anzahlen = [];
    for (let i = 0; i< 118; i++){
        anzahlen.push(0);
    }
    erg = 0;

    periodtable.push(new elements(1, 1.01, "H", "Wasserstoff (Hydro­genium)"));
    periodtable.push(new elements(2, 4.00, "He", "Helium"));
    periodtable.push(new elements(3, 6.94, "Li", "Lithium"));
    periodtable.push(new elements(4, 9.01, "Be", "Beryllium"));
    periodtable.push(new elements(5, 10.81, "B", "Bor"));
    periodtable.push(new elements(6, 12.01, "C", "Kohlenstoff (Car­bonium)"));
    periodtable.push(new elements(7, 14.01, "N", "Stickstoff (Nitro­genium)"));
    periodtable.push(new elements(8, 16.00, "O", "Sauerstoff (Oxy­genium)"));
    periodtable.push(new elements(9, 19.00, "F", "Fluor"));
    periodtable.push(new elements(10, 20.18, "Ne", "Neon"));
    periodtable.push(new elements(11, 22.99, "Na", "Natrium"));
    periodtable.push(new elements(12, 24.30, "Mg", "Magnesium"));
    periodtable.push(new elements(13, 26.98, "Al", "Aluminium"));
    periodtable.push(new elements(14, 28.09, "Si", "Silicium"));
    periodtable.push(new elements(15, 30.97, "P", "Phosphor"));
    periodtable.push(new elements(16, 32.07, "S", "Schwefel (Sulphur)"));
    periodtable.push(new elements(17, 35.45, "Cl", "Chlor"));
    periodtable.push(new elements(18, 39.94, "Ar", "Argon"));
    periodtable.push(new elements(19, 39.10, "K", "Kalium"));
    periodtable.push(new elements(20, 40.08, "Ca", "Calcium"));
    periodtable.push(new elements(21, 44.96, "Sc", "Scandium"));
    periodtable.push(new elements(22, 47.88, "Ti", "Titan"));
    periodtable.push(new elements(23, 50.94, "V", "Vanadium"));
    periodtable.push(new elements(24, 52.00, "Cr", "Chrom"));
    periodtable.push(new elements(25, 54.90, "Mn", "Mangan"));
    periodtable.push(new elements(26, 55.85, "Fe", "Eisen (Ferrum)"));
    periodtable.push(new elements(27, 58.93, "Co", "Cobalt"));
    periodtable.push(new elements(28, 58.69, "Ni", "Nickel"));
    periodtable.push(new elements(29, 63.55, "Cu", "Kupfer (Cuprum)"));
    periodtable.push(new elements(30, 65.39, "Zn", "Zink"));
    periodtable.push(new elements(31, 69.72, "Ga", "Gallium"));
    periodtable.push(new elements(32, 72.61, "Ge", "Germanium"));
    periodtable.push(new elements(33, 74.92, "As", "Arsen"));
    periodtable.push(new elements(34, 78.96, "Se", "Selen"));
    periodtable.push(new elements(35, 79.90, "Br", "Brom"));
    periodtable.push(new elements(36, 83.80, "Kr", "Krypton"));
    periodtable.push(new elements(37, 85.45, "Rb", "Rubidium"));
    periodtable.push(new elements(38, 87.62, "Sr", "Strontium"));
    periodtable.push(new elements(39, 88.91, "Y", "Yttrium"));
    periodtable.push(new elements(40, 91.22, "Zr", "Zirconium"));
    periodtable.push(new elements(41, 92.91, "Nb", "Niob"));
    periodtable.push(new elements(42, 95.94, "Mo", "Molybdän"));
    periodtable.push(new elements(43, 98.91, "Tc", "Technetium"));
    periodtable.push(new elements(44, 101.07, "Ru", "Ruthenium"));
    periodtable.push(new elements(45, 102.91, "Rh", "Rhodium"));
    periodtable.push(new elements(46, 106.42, "Pd", "Palladium"));
    periodtable.push(new elements(47, 107.87, "Ag", "Silber (Argentum)"));
    periodtable.push(new elements(48, 112.41, "Cd", "Cadmium"));
    periodtable.push(new elements(49, 114.82, "In", "Indium"));
    periodtable.push(new elements(50, 118.71, "Sn", "Zinn (Stannum)"));
    periodtable.push(new elements(51, 121.75, "Sb", "Antimon (Stibium)"));
    periodtable.push(new elements(52, 127.60, "Te", "Tellur"));
    periodtable.push(new elements(53, 126.90, "I", "Iod"));
    periodtable.push(new elements(54, 131.29, "Xe", "Xenon"));
    periodtable.push(new elements(55, 132.91, "Cs", "Caesium"));
    periodtable.push(new elements(56, 137.33, "Ba", "Barium"));
    periodtable.push(new elements(57, 138.90, "La", "Lanthan"));
    periodtable.push(new elements(58, 140.11, "Ce", "Cer"));
    periodtable.push(new elements(59, 140.91, "Pr", "Praseodym"));
    periodtable.push(new elements(60, 144.24, "Nd", "Neodym"));
    periodtable.push(new elements(61, 146.92, "Pm", "Pro­methium"));
    periodtable.push(new elements(62, 150.36, "Sm", "Samarium"));
    periodtable.push(new elements(63, 151.96, "Eu", "Europium"));
    periodtable.push(new elements(64, 157.25, "Gd", "Gadolinium"));
    periodtable.push(new elements(65, 158.93, "Tb", "Terbium"));
    periodtable.push(new elements(66, 162.50, "Dy", "Dysprosium"));
    periodtable.push(new elements(67, 164.93, "Ho", "Holmium"));
    periodtable.push(new elements(68, 167.26, "Er", "Erbium"));
    periodtable.push(new elements(69, 168.93, "Tm", "Thulium"));
    periodtable.push(new elements(70, 173.04, "Yb", "Ytterbium"));
    periodtable.push(new elements(71, 174.97, "Lu", "Lutetium"));
    periodtable.push(new elements(72, 178.49, "Hf", "Hafnium"));
    periodtable.push(new elements(73, 180.95, "Ta", "Tantal"));
    periodtable.push(new elements(74, 183.85, "W", "Wolfram"));
    periodtable.push(new elements(75, 186.21, "Re", "Rhenium"));
    periodtable.push(new elements(76, 190.23, "Os", "Osmium"));
    periodtable.push(new elements(77, 192.22, "Ir", "Iridium"));
    periodtable.push(new elements(78, 195.08, "Pt", "Platin"));
    periodtable.push(new elements(79, 196.97, "Au", "Gold (Aurum)"));
    periodtable.push(new elements(80, 200.59, "Hg", "Quecksilber (Hydrar­gyrum)"));
    periodtable.push(new elements(81, 204.38, "Tl", "Thallium"));
    periodtable.push(new elements(82, 207.2, "Pb", "Blei (Plumbum)"));
    periodtable.push(new elements(83, 208.98, "Bi", "Bismut (auch Wismut)"));
    periodtable.push(new elements(84, 208.98, "Po", "Polonium"));
    periodtable.push(new elements(85, 209.99, "At", "Astat"));
    periodtable.push(new elements(86, 222.02, "Rn", "Radon"));
    periodtable.push(new elements(87, 223.02, "Fr", "Francium"));
    periodtable.push(new elements(88, 226.03, "Ra", "Radium"));
    periodtable.push(new elements(89, 227.03, "Ac", "Actinium"));
    periodtable.push(new elements(90, 232.04, "Th", "Thorium"));
    periodtable.push(new elements(91, 231.04, "Pa", "Protac­tinium"));
    periodtable.push(new elements(92, 238.03, "U", "Uran"));
    periodtable.push(new elements(93, 237.05, "Np", "Neptunium"));
    periodtable.push(new elements(94, 244.06, "Pu", "Plutonium"));
    periodtable.push(new elements(95, 243.06, "Am", "Americium"));
    periodtable.push(new elements(96, 247.07, "Cm", "Curium"));
    periodtable.push(new elements(97, 247.07, "Bk", "Berkelium"));
    periodtable.push(new elements(98, 251.08, "Cf", "Californium"));
    periodtable.push(new elements(99, 252.08, "Es", "Einsteinium"));
    periodtable.push(new elements(100, 257.10, "Fm", "Fermium"));
    periodtable.push(new elements(101, 258, "Md", "Mende­levium"));
    periodtable.push(new elements(102, 259, "No", "Nobelium"));
    periodtable.push(new elements(103, 260, "Lr", "Lawren­cium"));
    periodtable.push(new elements(104, 261.11, "Rf", "Ruther­fordium"));
    periodtable.push(new elements(105, 262.11, "Db", "Dubnium"));
    periodtable.push(new elements(106, 263.12, "Sg", "Seaborgium"));
    periodtable.push(new elements(107, 262.12, "Bh", "Bohrium"));
    periodtable.push(new elements(108, 265, "Hs", "Hassium"));
    periodtable.push(new elements(109, 266, "Mt", "Meitnerium"));
    periodtable.push(new elements(110, 269, "Ds", "Darm­stadtium"));
    periodtable.push(new elements(111, 272, "Rg", "Roent­genium"));
    periodtable.push(new elements(112, 277, "Cn", "Coper­nicium"));
    periodtable.push(new elements(113, 287, "Nh", "Nihonium"));
    periodtable.push(new elements(114, 289, "Fl", "Flerovium"));
    periodtable.push(new elements(115, 288, "Mc", "Moscovium"));
    periodtable.push(new elements(116, 289, "Lv", "Liver­morium"));
    periodtable.push(new elements(117, 292, "Ts", "Tenness"));
    periodtable.push(new elements(118, 293, "Og", "Oganesson"));

    init();
}

function init(){
    let elem = document.getElementById("molaremasse");
    let tmp = "Molare Masse: "+erg+"g/mol";
    if (erg != 0){
        tmp = tmp.substring(0, tmp.length-7) + "." +tmp.substring(tmp.length-7, tmp.length);
    }
    elem.textContent = tmp;

    for (let i = 0; i < 118; i++){
        elem = document.getElementById("e"+(i+1)+"o");
        elem.textContent = periodtable[i].ordnungszahl;
        elem = document.getElementById("e"+(i+1)+"m");
        elem.textContent =periodtable[i].masse;
        if (elem.textContent == 0){
            elem.textContent = "--";
        }
        elem = document.getElementById("e"+(i+1)+"i");
        elem.textContent =periodtable[i].iupac;
        elem = document.getElementById("e"+(i+1)+"n");
        elem.textContent =periodtable[i].name;

        elem = document.getElementById("e"+(i+1)+"a");
        elem.textContent = "Anzahl = " + anzahlen[i];

        elem = document.getElementById("e"+(i+1)+"+");
        elem.textContent =  "+";
        elem = document.getElementById("e"+(i+1)+"-");
        elem.textContent = "-";
    }
}

function add(elem){
    anzahlen[elem-1] += 1;
    erg += periodtable[elem-1].m2;

    let a = document.getElementById("molaremasse");
    let tmp = "Molare Masse: "+erg+"g/mol";
    if (erg != 0){
        tmp = tmp.substring(0, tmp.length-7) + "." +tmp.substring(tmp.length-7, tmp.length);
    }
    a.textContent = tmp;
    a = document.getElementById("e"+(elem)+"a");
    a.textContent = "Anzahl = " + anzahlen[elem-1];
    
}

function reduce(elem){
    if (anzahlen[elem-1]!=0){
        anzahlen[elem-1]-=1;
        erg-= periodtable[elem-1].m2;

        let a = document.getElementById("molaremasse");
        let tmp = "Molare Masse: "+erg+"g/mol";
        if (erg != 0){
            tmp = tmp.substring(0, tmp.length-7) + "." +tmp.substring(tmp.length-7, tmp.length);
        }
        a.textContent = tmp;
        a = document.getElementById("e"+(elem)+"a");
        a.textContent = "Anzahl = " + anzahlen[elem-1];
    }
}