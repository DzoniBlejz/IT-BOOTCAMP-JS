const fruitArray = ["apple", "banana", "watermelon", "kiwi"];
let nizNovi = [];

fruitArray.forEach((e, i, array) => {
	return nizNovi.push(e.toUpperCase());
});

console.log(nizNovi);

let newArray = fruitArray.forEach((e) => e.toUpperCase());
console.log(newArray);

// map metoda kreira novi niz, sa rezultatima iz callback funkcije koja je pozvana na svaki element niza

let mappedArray = fruitArray.map((e) => e.toUpperCase());

console.log(mappedArray);

const numberArray = [12, 13, 15, 16, 17, 18, 20, 21, 22, 25];

const numberDetails = numberArray.map((e) => {
	return {
		number: e,
		isEven: e % 2 === 0,
	};
});

console.log(numberDetails);

const books = [
	{ title: "Vratice se rode", authors: ["First man name"], rating: 4.36 },
	{ title: "Nece se vratiti rode", authors: ["Second man name"], rating: 3.86 },
	{
		title: "Nekad ce se vratiti rode",
		authors: ["Third man name"],
		rating: 4.36,
	},
];

const titles = books.map((element) => {
	return element.title;
});

console.log(titles);

// arrow functions
const doubleUp = (n) => n * n;
console.log(doubleUp(5));

const arrowFunc = (number) => number * 5;
console.log(arrowFunc(10));

const novvvvaFunkcija = (broj) => (broj > 10 ? broj * 100 : broj / 200);
console.log(novvvvaFunkcija(5));

const nijeTernarniIzraz = (broj) => {
	if (broj > 10) {
		return broj * 100;
	}
	return broj / 200;
};

console.log(nijeTernarniIzraz(5));

const someFunc = (param) => {
	return param - param;
};
console.log(someFunc(10));

//filter metoda

const nums = [9, 8, 7, 6, 5, 4, 3];

// filter takodje vraca novi niz!

const neparni = nums.filter((e) => {
	return e % 2 === 1;
});

console.log(neparni);
