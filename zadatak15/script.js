// 5. prethodni zadatak da dodate jos sledece:
// ako se unese broj koji je deljiv sa 3, da se ispise poruka "ENES"
// ako se unese broj koji je deljiv sa 5, da se ispise poruka "ENES KLIMENTA"
// ako se unese broj koji je deljiv sa 3 i 5, da se ispise poruka "SEJO BOY"
// svaki od ovih brojeva se paralelno upisuje u niz.
// i nema vise unosa nakon toga broja koji je deljiv sa 3 i 5.

// let input = parseFloat(prompt("unesi broj"));
// const array = [];

// while (!(input % 3 === 0 && input % 5 === 0)) {
// 	if (input % 3 === 0 && input % 5 === 0) {
// 		console.log("SEYO BOY");
// 		array.push(input);
// 	} else if (input % 3 !== 0 && input % 5 === 0) {
// 		console.log("ENES KLIMENTA");
// 		array.push(input);
// 	} else if (input % 3 === 0 && input % 5 !== 0) {
// 		console.log("ENES");
// 		array.push(input);
// 	}
// 	input = parseFloat(prompt("unesi broj"));
// }

// console.log(array);

const muhamedGodine = 13;
const muhamedVisina = "179cm";
const muhamedTezina = "70kg";
const muhamedBrUlice = 14;

const muhamedPodaci = [13, "179cm", "70kg", 14];
const davudPodaci = [14, "170cm", "65kg", 20];

// objekti su kolekcije propertija
// pa su properti zapravo key-value par, npr.
// ime: "Nikola", u ovom slucaju ime predstavlja key, "Nikola" predstavlja value
// u pajton programskom jeziku objekti se zovu dictionary - recnici.

const muhamedPodaciObjekat = {
	muhamedGodine: 13,
	muhamedVisina: "179cm",
	muhamedTezina: "70kg",
	muhamedBrUlice: 14,
};

const emilovAuto = {
	markaAutomobila: "Mercedes",
	godinaProizvodnje: "2018",
	cena: "dzabe",
	kilometraza: 96000,
};

const dzenisov = {
	markaAutomobila: "Mercedes",
	godinaProizvodnje: "2018",
	cena: "dzabe",
	kilometraza: 40000,
};
console.log(dzenisov.kilometraza, "dzenis");
console.log(emilovAuto.kilometraza, "emil");

if (emilovAuto.kilometraza > dzenisov.kilometraza) {
	dzenisov.kilometraza += emilovAuto.kilometraza - dzenisov.kilometraza;
} else {
	dzenisov.kilometraza =
		dzenisov.kilometraza + emilovAuto.kilometraza - dzenisov.kilometraza;
}

console.log(dzenisov.kilometraza, "dzenis");
console.log(emilovAuto.kilometraza, "emil");

// console.log(muhamedPodaciObjekat["muhamedTezina"]);
// console.log(muhamedPodaciObjekat.muhamedBrUlice);
