// uradite za slucaj kad je vrednost is prompta neparna i veca od 5 a manja od 20
// da se izbrisu prva 2 elementa iz niza.
// u suprotnom, dodajte 3 elementa na pocetak.
// kad imamo || (ili) u uslovu, samo jedan od datih treba da bude tacan da bi ceo uslov
// bio tacan

// let input = parseFloat(prompt("unesite broj"));
// let array = ["elemtent", "niz", "string", undefined, NaN];

// if (input % 2 !== 0 && input > 5 && input < 20) {
// 	array.shift();
// 	array.shift();
// } else {
// 	array.unshift("1");
// 	array.unshift("2");
// 	array.unshift("3");
// }

// console.log(array, "niz");

// let input = prompt("unesite nesto");

// if (isNaN(input)) {
// 	// isNaN ce da vrati true ako vrednost NIJE BROJ
// 	console.log(`unos ${input} nije broj`);
// } else {
// 	console.log(`unos ${input} je broj`);
// }

// u javscript ne odredjujemo tip podatka unapred, tj ne pisemo:
// parametri se nalaze unutar zagrada funkcije
// parametri su vrednosti koje ocekuje neka funkcija
// da bi mogla da radi neku dalju radnju sa tim vrednostima

let niz = [20, 30, 50, 100, -2, -30, 50, "20"];

console.log(niz.indexOf(50), "first index of");

console.log(niz.lastIndexOf(50), "last index of");

console.log(niz.includes("20"));

if (niz.indexOf(50) === -1) {
	console.log("taj element ne postoji u nizu");
} else {
	console.log("taj element postoji u nizu");
}

// za domaci
// imamo niz od 5 elemenata
// napisite kod koji ce da proveri koliko se puta jedan broj 2 ponavlja u nizu :)
// primer:
// let niz = [1, 2, 2, 2 , 3, 5]
// vasa poruka treba da bude, da se broj 2 ponavlja tri puta u nizu.

// za domaci:
// isti niz imate
// let niz = [4, 5, 6, 7, 7, 8, 8, 9, 10, 11]
// treba da ispisete u konsoli u kojoj se polovini niza nalaze
//(podelite niz na 2 dela posto imamo tacno 10 elemenata)
// brojevi 6 i 9

// imate niz od 10 elemenata:
let newArray = [4, 5, 6, 7, 7, 8, 8, 9, 10, 11];
// da nadjete prvu sedmicu sa leve strane, tj njen index
// i prvu sedmicu sa desne strane, tj njen index

console.log(newArray.indexOf(7));
console.log(newArray.lastIndexOf(7));

let prvaSedmica = newArray.indexOf(7);
let drugSedmica = newArray.indexOf(7, prvaSedmica + 1);

console.log(drugSedmica);
