// let array = [
// 	"apple",
// 	"banana",
// 	"strawberry",
// 	["banana", "apple", "strawberry"],
// ];

// let brojac = 0;

// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === "apple") {
// 		brojac++;
// 	}
// 	if (Array.isArray(array[i])) {
// 		for (let j = 0; j < array[i].length; j++) {
// 			if (array[j] === "apple") {
// 				brojac++;
// 				console.log("nasao sam jabuku u drugi niz");
// 			}
// 		}
// 	}
// }
// console.log(brojac);

// let spojeniNiz = array.flat();
// let brojac = 0;

// for (let i = 0; i < spojeniNiz.length; i++) {
// 	if (spojeniNiz[i] === "apple") {
// 		brojac++;
// 	}
// }

// console.log(brojac);

// dzejlanov zadatak:

// niz1 = [
// 	"nesto",
// 	null,
// 	"drugo",
// 	false,
// 	5,
// 	3,
// 	10,
// 	true,
// 	undefined,
// 	undefined,
// 	"plastika",
// 	105,
// 	103.2,
// 	null,
// 	"dva" == "dva",
// 	1001,
// 	[5, 5, 3],
// 	{ ime: "dzelal", godine: "koliko ti hoces" },
// 	{ ime: "nikola", godine: 26 },
// ];

// let objekti = [];
// let brojevi = [];
// let stringovi = [];
// let boolean = [];
// let nullElementi = [];
// let nizovi = [];
// let undefinedElementi = [];

// const objekat = {
// 	objekti: [],
// 	brojevi: [],
// 	stringovi: [],
// 	boolean: [],
// 	nullElementi: [],
// 	nizovi: [],
// 	undefinedElementi: [],
// };

// for (let index = 0; index < array.length; index++) {
// 	let item = array[i];
// }

// for (const item of niz1) {
// 	if (typeof item === "object") {
// 		if (item !== null && !Array.isArray(item)) {
// 			objekat.objekti.push(item);
// 		} else if (item === null && !Array.isArray(item)) {
// 			nullElementi.push(item);
// 		} else {
// 			nizovi.push(item);
// 		}
// 	}
// 	if (typeof item === "string") {
// 		stringovi.push(item);
// 	}
// 	if (typeof item === "number") {
// 		brojevi.push(item);
// 	}
// 	if (typeof item === "boolean") {
// 		boolean.push(item);
// 	}
// 	if (typeof item === "undefined") {
// 		undefinedElementi.push(item);
// 	}
// }

// console.log(objekti);
// console.log(stringovi);
// console.log(brojevi);
// console.log(boolean);
// console.log(nizovi);
// console.log(nullElementi);
// console.log(undefinedElementi);

//On predstavlja niz brojeva u kome zbir prethodna dva broja daje vrednost narednog člana niza.
//Prva dva člana su mu 0 i 1, a dalje glasi:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144…

// ispisati 13 elemenata fibonacijevog niza.
// uraditi pomocu funkcije. funkcija prima jedan parametar, koji oznacava koliko cemo imati elemenata naseg
// lepog postenog i prepostenog fibonacijevog niza.

const fibbonacciArray = [0, 1];
let element = 0;

const createFibbonaciArray = (number) => {
	for (let i = 0; i < number - 2; i++) {
		element = fibbonacciArray[i] + fibbonacciArray[i + 1];
		fibbonacciArray.push(element);
	}
	return fibbonacciArray;
};

console.log(createFibbonaciArray(13));

let niz1 = [1, 2, 3, 4, 5];
let niz2 = [6, 7, 8, 9, 1000, 10, 11, 12, 50, 60];
let array = [];
let duziniz;

if (niz1.length > niz2.length) {
	duziniz = niz1;
} else {
	duziniz = niz2;
}

let najnovijiNajduziNiz = Math.max(niz1.length, niz2.length);

for (let i = 0; i < najnovijiNajduziNiz; i++) {
	if (niz1[i] && niz2[i]) {
		array.push(niz1[i] + niz2[i]);
	} else {
		array.push(niz1[i] || niz2[i]);
	}
}
console.log(array);

Array.isArray();
