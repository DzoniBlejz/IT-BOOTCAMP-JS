// prosli cas smo radili callback funkcije

function callTwice(func) {
	func();
	func();
}

function laugh() {
	console.log("hahaahhaha");
}

callTwice(laugh);

// funkcije kao return vrednosti
// funkcija vraca funkciju

function callIt() {
	return function () {
		console.log("HI");
	};
}

console.log(callIt());

// console.log(callIt()); // ispisace se cela funkcija unutar callIt!

const innerFunction = callIt(); // unutrasnju anonimnu funkciju dodajemo innerFunction varijabli, i ona postaje funkcija!
innerFunction();

// ovo mozemo da uradimo i na ovaj nacin, ne mora da bude anonimna funkcija kao return, moze i ovako:

function noAnonymous() {
	const funkcijaNasa = function () {
		console.log("HI guys!!!");
	};
	return funkcijaNasa;
}

const returnValueOfNoAnoymousFunction = noAnonymous();
returnValueOfNoAnoymousFunction();

// // ----------------------------------------------------------------------------

function multiplyBy(broj) {
	return function (x) {
		return x * broj;
	};
}

console.log(multiplyBy(3));

// const putaTri = function (3) {
// 	return x * 3;
// };

// putaTri(5); // = 5 * 3;

// multiplyBy nam je zapravo kao fabrika funkcija!
// anonimna funkcija ( nema naziv ) je unutrasnja funkcija nase multyplyBy funkcije!

const triple = multiplyBy(3); // varijabli 'triple' dodajemo unutrasnju funkciju nase multiplyBy funkcije
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

console.log(triple(5));
console.log(double(10));
console.log(halve(20));

// napraviti funkciju makeBetweenFunc koja prima 2 broja ( recimo neka se zovu argumenti num1 i num2).
// ona vraca funkciju koja prima 1 argument koji je broj, i mi treba da proverimo da li se
// taj broj nalazi izmedju dva broja u makeBetweenFunc funkciji.
// ako se nalazi u opsegu od 0 - 18 return true , ako je van tog opsega return false!

const isChild = makeBetweenFunc(0, 18);
isChild(5);
isChild(67);

function makeBetweenFunc(num1, num2) {
	return function (ageNumber) {
		if (ageNumber >= num1 && ageNumber <= num2) {
			return true;
		} else return false;
	};
}

isInNineties = makeBetweenFunc(1900, 2001);
// isInNinteris(1997);
// isInNinteris(2007);

// callback funkcije, funkcija koja kao argument prima drugu funkciju i izvrsava je unutar te funkcije!

function message() {
	console.log(prompt("unesi nesto: "));
}

// setInterval(() => {
// 	console.log("setInterval ");
// }, 1000);

// setTimeout(message, 1000);
// setTimeout(() => {
// 	console.log(prompt("unesi nesto posle"));
// }, 2000);
// setTimeout(() => {
// 	console.log(prompt("unesi nesto posle"));
// }, 2000);

const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
// 	alert("nasa poruka!");
// });

let Nikola = function () {
	alert("caooo");
};
// btn.addEventListener("click", function () {
// 	alert("nasa poruka praveci drugaciju funkciju!");
// });

btn.addEventListener("click", Nikola);

// IMAMO funkciju koja se zove totalGuess(num) i prima argument koji je broj pokusaja kojja druga funkcija ima da pogodi njen
// ranndom broj, koji se nalazi u telu prve funkcije.
// return funkcija, funkcije totalGuess,  pogadja broj, sto znaci ako unesemo 5 u totallGuess(5)
// korisnik ce moc 5 puta da pogadja broj.
// napraviti prompt
// u slucaju da pogodite broj, prekidate dalji unos.

// const array = [1, 2, 4, 5, 6, 7];

// array.forEach((e) => {
// 	console.log(e * 2);
// }); // NE GLEDATI SRAMOTA!
