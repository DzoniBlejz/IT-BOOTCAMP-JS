const objekat = {
	ime: "nikola",
	godine: 25,
};

objekat["nikola"];

console.log(objekat["ime"]);
console.log(objekat.ime);

function nekaFunkcija() {
	console.log("cao");
}

const nekaNovaFunkcija = function () {
	console.log("hehe");
};

const nekaNajnovijaFunkcija = () => {
	console.log("hahah");
};

const saberi = function (a, b) {
	return a + b;
};
const oduzmi = function (a, b) {
	return a - b;
};
const pomnozi = function (a, b) {
	return a * b;
};
const podeli = function (a, b) {
	return a / b;
};
const kvadriraj = function (a, b) {
	return Math.pow(a, b);
};

const arrayFunkcija = [saberi, oduzmi, pomnozi, podeli, kvadriraj];

for (const funkcija of arrayFunkcija) {
	console.log(funkcija(2, 5));
}

function stadion(lopta) {
	return lopta();
}

function sutniLoptu() {
	console.log(
		"GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLMAN HVATA LOPTU"
	);
}

stadion(sutniLoptu);

// napisati funkciju koja prima dva argumenta, tj dve callback funkcije
// prva ispisuje "Ako pobedis ne mozes da izgubis"
// druga ispisuje "Ako izgubis ne mozes da pobedis"
// u zavisnosti od toga koji broj vrati Math.random(), tako i ispisati funkcije
// ako je broj manji od 5, ispsiati prvu, ako je veci od pet ispisati drugu

function ispisiFunkcije(f1, f2) {
	let rand = Math.random();
}

// pangram
function isPangram(string) {
	let strArr = string.toLowerCase();
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

	for (let i = 0; i < alphabet.length; i++) {
		if (strArr.indexOf(alphabet[i]) < 0) {
			return false;
		}
	}
	console.log("its pangram");
	return true;
}

isPangram("The quick brown fox jumps over the lazy dog");
string.indexOf();
