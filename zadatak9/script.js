let names = ["muhamed", "enes", "dinel", "omer"];

console.log(names[names.length]); // ovo ce da vrati undefined

names[names.length] = "sejo"; // ovo ce da doda na kraj niza element

console.log(names); // ['muhamed', 'enes', 'dinel', 'omer', 'sejo']

names.push("davudu se pokvario trotinet");

console.log(names); // ['muhamed', 'enes', 'dinel', 'omer', 'sejo', 'davudu se pokvario trotinet']

names.pop(); // izbacio poslednjeg iz niza

console.log(names); // ["muhamed", "enes", "dinel", "omer", "sejo"];

names.unshift("imlek"); // dodao element na pocetak niza

console.log(names); //  ['imlek', 'muhamed', 'enes', 'dinel', 'omer', 'sejo']

names.shift(); // uklonio prvi element

console.log(names); //  ['muhamed', 'enes', 'dinel', 'omer', 'sejo']

// imate niz koji ima 5 elemenata. vas zadatak je sledeci:
// da ako je poslednji element u nizu broj, uklonite poslednji element iz niza
// a ako nije broj, dodate na kraj niza jos 3 elementa.

// let array = ["nikola", "nino", "nedzad", "nenene", 1];

// if (typeof array[array.length - 1] === "number") {
// 	console.log("poseldnji element je broj");
// 	array.pop();
// 	array.pop();
// } else {
// 	console.log("nije broj");
// 	array.push(1, 1, 1);
// }

// console.log(array);

// if (Number.isInteger(array[array.length - 1])) {
// 	console.log("poseldnji element je broj");
// 	array.pop();
// 	array.pop();
// } else {
// 	console.log("nije broj");
// 	array.push(1, 1, 1);
// }

// imate prompt, u njemu upisujete neku vrednost.
// ako je vrednost deljiva sa 2, taj input  ubacite na pocetak niza,
// ako nije deljiva sa 2, tu vrednost ubacite na kraj niza
// ispisite niz

let input = Number(prompt("unesite vrednost"));
let newArray = [1, 2, 3];

if (input % 2 === 0) {
	newArray.unshift(input);
	console.log("broj je paran");
} else {
	newArray.push(input);
	console.log("nije paran");
}

console.log(newArray);

// za domaci:

// uradite za slucaj kad su brojevi neparni i veci od 5 a manji od 20
// da se izbrisu prva 2 elementa iz niza.
// u suprotnom, dodajte 3 elementa na pocetak.
