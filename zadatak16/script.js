const mooviesReview = {};

mooviesReview["dolina vukova"] = 5.5;
mooviesReview["sjaj zvezda"] = 6.5;

console.log(mooviesReview);

// ovo je jedan od nacina kako mozemo da dodajemo nove propertije u objekat.
// mozemo takodje i ovako:

mooviesReview.noviFilm = 4;
mooviesReview.vraticeSeRode = 10;
mooviesReview.abakadabra = 10;

console.log(mooviesReview);

// const map1 = new Map();

// map1.set("c", 3);
// map1.set("a", 1);
// map1.set("b", 2);

// console.log(map1, "na");

const student = {
	firstName: "Nikola",
	lastName: "Glisovic",
	study: "Computer Science",
	exams: { midterm: 82, final: 95 },
};

console.log(student.exams.midterm);

delete student.firstName;

console.log(student);

let nikola = "davud";
let omer = nikola;

omer = "tarzan";

console.log(omer);

console.log(nikola);

const paletaBoja = {
	crvena: "#3333",
	zelena: "#2222",
	crna: "#9999",
};

const paletaBoja2 = paletaBoja;

paletaBoja2.zuta = "#5555";

console.log(paletaBoja);
console.log(paletaBoja2);

let niz = [1, 2, 3, 45];

console.log(niz);

const moovieCollection = [
	{
		nazivFilma: "Kad Jaganjci utihnu",
		godinaPustanja: 2006,
		budzet: 150000,
		trajanje: 100,
	},
	{
		nazivFilma: "Lajanje na zvezde",
		godinaPustanja: 2009,
		budzet: 50000,
		trajanje: 165,
	},
	{
		nazivFilma: "Transformersi",
		godinaPustanja: 2010,
		budzet: 12000,
		trajanje: 120,
	},
	{
		nazivFilma: "Mau Mau",
		godinaPustanja: 2022,
		budzet: 1500000,
		trajanje: 160,
	},
	{
		nazivFilma: "Varljivo leto",
		godinaPustanja: 1989,
		budzet: 1500,
		trajanje: 120,
	},
	{
		nazivFilma: "Gorila",
		godinaPustanja: 2019,
		budzet: 150200,
		trajanje: 110,
	},
	{
		nazivFilma: "Samuraj",
		godinaPustanja: 2012,
		budzet: 124500,
		trajanje: 120,
	},
	{
		nazivFilma: "Transporter",
		godinaPustanja: 2015,
		budzet: 190000,
		trajanje: 115,
	},
	{
		nazivFilma: "Planeta majmuna",
		godinaPustanja: 2015,
		budzet: 120000,
		trajanje: 110,
	},
	{
		nazivFilma: "Zmije u avionu",
		godinaPustanja: 2023,
		budzet: 19000,
		trajanje: 90,
	},
];

let najskupljiFilm = moovieCollection[0];
let najduziFilm = moovieCollection[0];
let najdzuziNaslovFilma = moovieCollection[0];
let najstarijiFilm = moovieCollection[0];

for (let i = 0; i < moovieCollection.length; i++) {
	if (moovieCollection[i].budzet > najskupljiFilm.budzet) {
		najskupljiFilm = moovieCollection[i];
	}
	if (moovieCollection[i].trajanje > najduziFilm.trajanje) {
		najduziFilm = moovieCollection[i];
	}
	if (
		moovieCollection[i].nazivFilma.length >
		najdzuziNaslovFilma.nazivFilma.length
	) {
		najdzuziNaslovFilma = moovieCollection[i];
	}
	if (moovieCollection[i].godinaPustanja < najstarijiFilm.godinaPustanja) {
		najstarijiFilm = moovieCollection[i];
	}
}
console.log(najskupljiFilm, "najskupljiFilm");
console.log(najduziFilm, "najduziFilm");
console.log(najdzuziNaslovFilma, "najdzuziNaslovFilma");
console.log(najstarijiFilm, "najstarijiFilm");
