/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

const recepty = document.querySelector('#recepty');
const recept_detail = document.querySelector('#recept_detail_obrazek');
console.log(recepty)

zobrazRecepty();

function zobrazRecepty() {


    for (let i = 0; i < pole_recepty.length; i++) {
        //console.log(pole_recepty[i].nadpis)
        let recept = document.createElement('div');
        recept.className = 'recept';
        recept.onclick = klikNaRecept;

        let recept_obrazek = document.createElement('div');
        recept_obrazek.className = 'recept_obrazek';
        let obrazek = document.createElement('img');
        obrazek.src = (pole_recepty[i].img).slice(0,(pole_recepty[i].img).indexOf('?'));

        obrazek.alt = 'Obrazek'

        let recept_info = document.createElement('div');
        recept_info.className = 'recept_info'
        let recept_nadpis = document.createElement('h3');
        recept_nadpis.textContent = pole_recepty[i].nadpis;



        recepty.appendChild(recept)
        recept.appendChild(recept_obrazek)
        recept_obrazek.appendChild(obrazek)
        recept.appendChild(recept_info)
        recept_info.appendChild(recept_nadpis)
        console.log(recept)
    }
}

function klikNaRecept() {
    let mujRecept = event.target.dataset. mujRecept;

    console.log(mujRecept)
}
