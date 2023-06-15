// let niz = [4, 5, 6, 7, 7, 8, 8, 9, 10, 11];
// treba da ispisete u konsoli u kojoj se polovini niza nalaze
//(podelite niz na 2 dela posto imamo tacno 10 elemenata)
// brojevi 6 i 9

// // let unos = parseFloat(prompt("unesite broj"));

// if (niz.indexOf(unos) === -1) {
// 	console.log("ne postoji taj element u nizu");
// } else if (niz.indexOf(unos) >= niz.length / 2) {
// 	console.log(`broj koji ste uneli ${unos} se nalazi u drugoj polovini niza`);
// } else {
// 	console.log(`broj koji ste uneli ${unos} se nalazi u prvoj polovini niza`);
// }

// let niz = [1, 3, 4, 2, 3, 5];
// let brojac = 0;
// if (niz.indexOf(2) !== -1) {
// 	brojac++;
// 	let p = niz.indexOf(2);
// 	if (niz.indexOf(2, p + 1) !== -1) {
// 		brojac++;
// 		let c = niz.indexOf(2, p + 1);
// 		if (niz.indexOf(2, c + 1) !== -1) {
// 			brojac++;
// 		} else {
// 			console.log("kriket");
// 		}
// 	}
// 	console.log(brojac);
// }

let array = [
	"davud zukorlic",
	"muhamed nicevic",
	"dzenis",
	"ilhan",
	"omer curic",
	"bakir",
	"enes klimenta",
	"nikola glisovic",
];

console.log(array.slice(-2)); // sa kraja prva dva
console.log(array.slice(0, 2)); // sa ppocetka prva dva
// slice ne muttira niz, tj ne menja stari niz.
console.log(array);

array.splice(0, 2, "seyo boj", "dodji mi dodji pobjedi daljinu"); // splice mutira niz
// zamenili smo prva dva elementa sa dva u zagradama
console.log(array);

array.splice(0, 2); // sad smo samo uklonili prva dva el iz niza
console.log(array);

array.splice(0, "seyo boj", "dodjimidodjipobjedidaljinu"); // mozemo takodje samo da dodamo elemente, ne moramo da brisemo
console.log(array);

console.log(array.join("---")); // metoda join ne mutira niz
console.log(array);

let array2 = [4, 40, 400, 4000, 40000];

let newArray = array.concat(array2); // metoda concat spaja dva ili vise nizova u jedan novi niz.
console.log(newArray);

let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111];
console.log(brojevi); // mutira niz, i radi reverse elemenata u nizu
brojevi.reverse();
console.log(brojevi);

let letters = ["s", "k", "o", "p", "a", "w"];
console.log(letters);
letters.sort(); // ne sortira brojeve, samo stringove
console.log(letters);

brojevi.sort();
console.log(brojevi);

// funkcija ima kljucnu rec, naziv funkcije, parametre moze da ima a i ne mora, i telo funkcije.

function davudKalkulise(a, b) {
	let rezultat = 0;
	rezultat = a + b;
	console.log(rezultat);
	return rezultat;
}

function davudOduzima(a, b) {
	let rezultat = 0;
	rezultat = a - b;
	console.log(rezultat);
	return rezultat;
}
// funckija ispisiPoruku ne prima nikakve parametre.
function ispisiPoruku() {
	console.log("uneli ste pogresne podatke, probajte opet");
}

davudKalkulise(5, 5);
davudKalkulise(10, 52);
davudKalkulise(10, 52);
davudKalkulise(10, 52);
davudKalkulise(10, 52);
davudKalkulise(10, 52);

davudOduzima(1, 5);
davudOduzima(122, 5);
davudOduzima(122, 25);

ispisiPoruku();
ispisiPoruku();
ispisiPoruku();
ispisiPoruku();

function ispisiImeiPrezime(a, b) {
	console.log(`cao ${a} ${b}`);
}
ispisiImeiPrezime("davud", "zzukorlic");
ispisiImeiPrezime("muhamed", "nicevic");
ispisiImeiPrezime("enes", "klimenta");

// za domaci:

// prodjite sve metode, iskucajte ih opet sve, i funkcije.
