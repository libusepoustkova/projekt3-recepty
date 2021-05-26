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

const recepty = document.querySelector('#recepty');
const recept_detail = document.querySelector('#recept_detail_obrazek');

zobrazRecepty(seznam_recepty);

function zobrazRecepty(pole_recepty) {


    for (let i = 0; i < pole_recepty.length; i++) {
        //console.log(pole_recepty[i].nadpis)
        let recept = document.createElement('div');
        recept.className = 'recept';
        recept.onclick = klikNaRecept;

        let recept_obrazek = document.createElement('div');
        recept_obrazek.className = 'recept-obrazek';
        let obrazek = document.createElement('img');
        obrazek.src = (pole_recepty[i].img).slice(0,(pole_recepty[i].img).indexOf('?'));

        obrazek.alt = 'Obrazek'

        let recept_info = document.createElement('div');
        recept_info.className = 'recept-info'
        let recept_nadpis = document.createElement('h3');
        recept_nadpis.textContent = pole_recepty[i].nadpis;


        recepty.appendChild(recept);
        recept.appendChild(recept_obrazek);
        recept_obrazek.appendChild(obrazek);
        recept.appendChild(recept_info);
        recept_info.appendChild(recept_nadpis);

    }
}

function klikNaRecept() {
    let mujRecept = event.target.dataset.mujRecept;

    console.log(mujRecept)
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
    let serazene_recepty=seznam_recepty.sort(compare);
    serazene_recepty.reverse()
    }
    else if (podle == 2) {
    let serazene_recepty=seznam_recepty.sort(compare);
    }
    else {
    let serazene_recepty = seznam_recepty;
    }
    zobrazRecepty(serazene_recepty);
}


function checkStitek(kategorie, stitek) {
  return kategorie == stitek;
}

function VyberKategorie() {
    let kat = document.getElementById("kategorie").value
    console.log(kat)

    let vybrane_recepty = seznam_recepty.filter(el => checkStitek(kat, el.kategorie));

    recepty.innerHTML = '';
    zobrazRecepty(vybrane_recepty);
}
