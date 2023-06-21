function compareNames(name1, name2) {
	if (name1.length > name2.length) {
		console.log("prvo ime je duze", name1);
	} else if (name1.length === name2.length) {
		console.log("imena su iste duzine");
	} else {
		console.log("drugo ime je duze", name2);
	}
}

let nameeee = "vahid";
compareNames("vahid", "mehme");

compareNames("nikola", "nikolaaa");

compareNames("nikola", "ilhan");
// funkcija ukloniTri prima 1 parametar, a to je niz
// kada se pozove funkcija ukloniTri(array),
// ona ce da ukloni tri poslednja elementa, i da vrati taj novi niz.

let nekiNizKojiIdeNaRezervisanoMestouFunkciju = [12, 3, 4, 5];
let nekiDrugiNizKojiIdeNaRezervisanoMestouFunkciju = [12, 3, 4, 5, 6];

function ukloniTri(rezervacijaZaElementKojiCeDaDodjeOvdeKadPozovemoFunkciju) {
	rezervacijaZaElementKojiCeDaDodjeOvdeKadPozovemoFunkciju.splice(-3);
	console.log(rezervacijaZaElementKojiCeDaDodjeOvdeKadPozovemoFunkciju);
}

ukloniTri(nekiNizKojiIdeNaRezervisanoMestouFunkciju);
ukloniTri(nekiDrugiNizKojiIdeNaRezervisanoMestouFunkciju);

// funkcija koja spaja 2 niza u jedan i ispisite taj spojeni niz.
// sto znaci da funkcija prima 2 parametra

let niz1 = ["nesto", "nesttttttooo"];
let niz2 = ["hajde", "opet"];

function spojiDva(jedan, dva) {
	let finalniNiz = jedan.concat(dva);
	console.log(finalniNiz);
}

spojiDva(niz1, niz2);

// za domaci:

// da napravite funkciju, koja ce unetu vrednost iz prompta da smesti
// u niz koji ste napravili u telu funkcije.
// i napravite posebnu funkciju za ispis tog niza
// znaci imate dve funkcije, jednu za smestanje vrednosti iz inputa
// drugu za ispis niza

let enesovaFunkcija = () => {}; // arrow function

function enessovaFunkcija() {} // obicna funkcija
