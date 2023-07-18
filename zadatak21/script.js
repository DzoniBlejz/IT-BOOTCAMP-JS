// napisite funkciju koja se zove isValidPassword
// f-ja prima 2 argumenta: password i username
// Sifra mora:
// biti 8 karaktera minimum
// ne moze da sadrzi " " space
// ne moze da sadrzi username
// ako su svi uslovi tacni vrati true, ako nisu vrati false
// if(password.length >= 8 && !password.includes(" ") && !password.includes(username))
// scope, return

// function isValidPassword(password, username) {
// 	let pass = password.toUpperCase();
// 	let user = username.toUpperCase();
// 	if (password.length >= 8 && !pass.includes(user) && !password.includes(" ")) {
// 		return true;
// 	} else return false;
// }
// isValidPassword("omer12345", "davud");

// function createSomethingNice() {
// 	let nesto = "nema veze";
// }

// let nije = "e sad nije";

// nije.includes();

// function kolikoGod() {
// 	let nije = "jeste";
// }

// if (true) {
// 	var animal = "ptica";
// }

// console.log(animal);

// function checkColor(colorName) {
// 	if (colorName === "purple") {
// 		return;
// 	} else {
// 		return false;
// 	}
// }
// console.log(checkColor("purple"));

const porscheCarPlatz = [
	{
		brandName: "Audi",
		model: "SQ5",
		price: "45.500$",
	},
	{
		brandName: "Mercedes",
		model: "AMG-45",
		price: "65.500$",
	},
	{
		brandName: "SKODA",
		model: "SUPER-B",
		price: "35.000$",
	},
	{
		brandName: "BMW",
		model: "X7",
		price: "120.000$",
	},
	{
		brandName: "Rolls Royce",
		model: "PHANTOM",
		price: "300.000$",
	},
];

const carSpeed = [
	{
		brandName: "SKODA",
		maxsSpeed: "340kmh",
	},
	{
		brandName: "Rolls Royce",
		maxsSpeed: "300kmh",
	},
	{
		brandName: "AUDI",
		maxsSpeed: "280kmh",
	},
	{
		brandName: "BMW",
		maxsSpeed: "320kmh",
	},
	{
		brandName: "Mercedes",
		maxsSpeed: "280kmh",
	},
];

// napraviti funkciju, koja ce u objekat porscheCarPlatz
// da doda max brzinu automobila iz objekta CarSpeed kao noovi properti u objektu porscheCarPlatz
// pogledajte iteracija kroz objekat, metode Object.keys, Object.values, Object.entries, for in petlja
// na mdn, w3schools
