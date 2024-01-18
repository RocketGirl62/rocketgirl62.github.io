#include <bits/stdc++.h>

using namespace std;

int main()
{
    /*for (int i = 0; i <6; i++){
        cout << ".n"<<i <<" {"<<endl;
        cout << "\t grid-area: p"<<i<<";"<<endl;
        cout <<"}"<<endl <<endl;
    }*/

    /*
    vector<string> erg;
    for (int i = 0; i < 118;i++){
        string line;
        getline(cin, line);
        int cnt = 0;
        string iupac, name, tmp = "", masse, ordnungszahl;
        char zeichen = line.at(cnt);

        while (zeichen != '\t'){
            tmp += zeichen;
            cnt++;
            zeichen = line.at(cnt);
        }
        cnt++;
        zeichen = line.at(cnt);
        ordnungszahl = tmp;
        tmp = "";
        while (zeichen != '\t'){
            tmp += zeichen;
            cnt++;
            zeichen = line.at(cnt);
        }
        cnt++;
        zeichen = line.at(cnt);
        iupac = tmp;
        cout << tmp << endl;
        tmp = "";
        while (zeichen != '\t'){
            tmp += zeichen;
            cnt++;
            zeichen = line.at(cnt);
        }
        cnt++;
        zeichen = line.at(cnt);
        name = tmp;
        for (int i = 0; i < 3; i++){
            tmp = "";
            while (zeichen != '\t'){
                if (zeichen == ','){
                    zeichen = '.';
                }
                tmp += zeichen;
                cnt++;
                zeichen = line.at(cnt);
            }
            cnt++;
            zeichen = line.at(cnt);
        }
        if (tmp == ""){
            masse = "0";

        } else {
            masse = tmp;
        }
        erg.push_back("periodtable.push(new elements("+ordnungszahl+", "+masse+", xyz"+iupac+"xyz, xyz"+name+"xyz));");
        cout << erg[0]<<endl;


    }

    for (auto elem : erg){
        cout << elem<< endl;
    }*/

    /*for (int i = 0; i < 8; i++){
        cout << "<div class=xyzp"<<i<<"xyz>\n\t<p>"<<i<<"</p>\n</div>\n\n";
    }*/

    /*for (int i = 1; i < 119; i++){
        cout << "<div class=xyzelement-gridxyz id=xyze"<<i<<"xyz>\n\t<p class=xyzordnungszahxyz id=xyze"<<i<<"oxyz></p>\n\t<p class=xyzmassexyz id=xyze"<<i<<"mxyz></p>\n\t<p class=xyzelementxyz id=xyze"<<i<<"ixyz></p>\n\t<p class=xyznamexyz id=xyze"<<i<<"nxyz></p>\n\t<p class=xyzanzahlxyz id=xyze"<<i<<"axyz></p>\n\t<button class=xyzplusxyz id=xyze"<<i<<"+xyz onclick=xyzadd("<<i<<")xyz>\n\t</button>\n\t<button class=xyzminusxyz id=xyze"<<i<<"-xyz onclick=xyzreduce("<<i<<")xyz></button>\n</div>\n\n"<<endl;
    }*/

    for (int i = 1; i < 19; i++){
        cout << "<div class=xyzz"<<i<<"xyz><p>"<<i<<"</p></div>\n";
    }




    return 0;
}
