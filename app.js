/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie. ON CHANGE, POUŽIT FUNKCI SORT

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

const receptyElement = document.querySelector('#recepty');
const recept_detail = document.querySelector('#recept_detail_obrazek');

//let seznam_recepty = ''
zobrazRecepty(seznam_recepty);
let aktualni = JSON.parse(localStorage.aktual_recept);
//zobrazDetailRecept(aktualni)

function zobrazRecepty(pole_recepty) {

    for (let i = 0; i < pole_recepty.length; i++) {
        //console.log(pole_recepty[i].nadpis)
        let recept = document.createElement('div');
        recept.className = 'recept';
        recept.dataset.mujRecept = i;
        //console.log(recept.dataset.mujRecept)
        //recept.onclick =  klikNaRecept;
        //recept.addEventListener("click", myFunction);
        //recept.addEventListener("click", zobrazDetailRecept(pole_recepty[i]));
        //recept.onclick = zobrazDetailRecept (pole_recepty[i]);
         recept.onclick = function (event) {
                                                       let obr = document.getElementById("recept-foto");
                                                           obr.src = pole_recepty[i].img;
                                                           obr.alt = 'Obrazek'

                                                           document.getElementById("recept-kategorie").innerHTML =pole_recepty[i].kategorie;
                                                           document.getElementById("recept-hodnoceni").innerHTML = pole_recepty[i].hodnoceni;
                                                           document.getElementById("recept-nazev").innerHTML = pole_recepty[i].nadpis;
                                                           document.getElementById("recept-popis").innerHTML = pole_recepty[i].popis;
                                                      }
        let recept_obrazek = document.createElement('div');
        recept_obrazek.className = 'recept-obrazek';
        let obrazek = document.createElement('img');
        obrazek.src = (pole_recepty[i].img).slice(0,(pole_recepty[i].img).indexOf('?'));

        obrazek.alt = 'Obrazek'

        let recept_info = document.createElement('div');
        recept_info.className = 'recept-info'
        let recept_nadpis = document.createElement('h3');
        recept_nadpis.textContent = pole_recepty[i].nadpis;


        receptyElement.appendChild(recept);
        recept.appendChild(recept_obrazek);
        recept_obrazek.appendChild(obrazek);
        recept.appendChild(recept_info);
        recept_info.appendChild(recept_nadpis);

    }
}

function myFunction() {
      alert ("Hello World!")
   let mujRecept = event.target.dataset.mujRecept;
   console.log(mujRecept)
    let obr = document.getElementById("recept-foto");
              console.log(recept)
              obr.src = recept.img;
              obr.alt = 'Obrazek'
              document.getElementById("recept-kategorie").innerHTML = recept.kategorie;
              document.getElementById("recept-hodnoceni").innerHTML = recept.hodnoceni;
              document.getElementById("recept-nazev").innerHTML = recept.nadpis;
              document.getElementById("recept-popis").innerHTML = recept.popis;
              localStorage.aktual_recept = JSON.stringify(recept)
    return
}

function zobrazDetailRecept (det_recept) {
       let obr = document.getElementById("recept-foto");
           console.log(det_recept)
           obr.src = det_recept.img;
           obr.alt = 'Obrazek'

           document.getElementById("recept-kategorie").innerHTML = det_recept.kategorie;
           document.getElementById("recept-hodnoceni").innerHTML = det_recept.hodnoceni;
           document.getElementById("recept-nazev").innerHTML = det_recept.nadpis;
           document.getElementById("recept-popis").innerHTML = det_recept.popis;
           localStorage.aktual_recept = JSON.stringify(det_recept)
      }

function klikNaRecept() {
    let mujRecept = event.target.dataset.mujRecept;
    console.log(mujRecept)
    console.log(2)

}

function partOfString(ret, cast) {
    console.log(ret, cast, ret.includes(cast))
    return ret.includes(cast)
}

function Hledej() {
    let part = document.getElementById("hledat").value;
    let filter_recepty = seznam_recepty.filter(el => partOfString(el.nadpis.toLowerCase(), part.toLowerCase()))
    recepty.innerHTML = '';
    zobrazRecepty(filter_recepty)
    return

}


function compare( a, b ) {
      if ( a.hodnoceni < b.hodnoceni ){
        return -1;
      }
      if ( a.hodnoceni> b.hodnoceni ){
        return 1;
      }
      return 0;
    }

function Serad() {
    let podle = document.getElementById("razeni").value
    recepty.innerHTML = '';
     console.log(podle)
    if (podle == 1) {
    serazene_recepty=seznam_recepty.sort(compare);
    serazene_recepty.reverse()
    }
    else if (podle == 2) {
    serazene_recepty=seznam_recepty.sort(compare);
    }
    else {
    serazene_recepty = seznam_recepty;
    }
    console.log(serazene_recepty)
    zobrazRecepty(serazene_recepty);
}


function checkStitek(kategorie, stitek) {
  return kategorie == stitek;
}

function VyberKategorie() {
    let kat = document.getElementById("kategorie").value;
    let vybrane_recepty = [];
    console.log(kat)
    if (kat != ''){
        vybrane_recepty = seznam_recepty.filter(el => checkStitek(kat, el.kategorie));
    }
    else {
        vybrane_recepty = seznam_recepty;
        }
    recepty.innerHTML = '';
    zobrazRecepty(vybrane_recepty);
}

