// da uradite 5 zadataka:
// let array = ["nikola", "muhamed", "davud", "ninininin"]
// 1. da nadjete najduze ime
// 2. da sva imena prebacite u velika slova
// 3. da ako je paran broj elemenata u nizu dodate jos toliko elemanata
// 4. ispraznite ceo niz
// 5. imate prompt i prazan niz. u niz unosite vrednosti iz prompta, dokle god se ne unese
// broj 50. kad se unese broj 50 tad se prekida petlja, i ispisuje se niz
// sa prethodno unetim elementima. 50 nece da bude u nizu!!!!

const array = [];
let input = parseFloat(prompt("unesi broj"));

for (let i = 0; input !== 50; i++) {
	array.push(input);
	input = parseFloat(prompt("unesi broj"));
}
console.log(array);

// while (input !== 50) {
// 	array.push(input);
// 	input = parseFloat(prompt("unesi broj"));
// }
// console.log(array);

// 1;
// const array = ["nikola", "muhamed", "davud", "ninininin"];
// let longestName = array[0];

// for (let i = 0; i < array.length; i++) {
// 	if (array[i] > longestName) {
// 		longestName = array[i];
// 	}
// }

// console.log(longestName);

// 2;
// for (let i = 0; i < array.length; i++) {
// 	array[i] = array[i].toUpperCase();
// }

// console.log(array);

// 3, 'prvi nacin';

// function addElements(arrayNas) {
// 	for (let i = 0; i < arrayNas; i++) {
// 		array.push("dodajemo_majka");
// 	}
// 	return arrayNas;
// }

// if (array.length % 2 === 0) {
// 	addElements(array.length);
// }

// console.log(array);

// 3, 'drugi nacin;

// if (array.length % 2 === 0) {
// 	const duzinaNiza = array.length;
// 	for (let i = 0; i < duzinaNiza; i++) {
// 		array.push("toliko o tome");
// 	}
// }

// console.log(array);

// while (array.length !== 0) {
// 	array.pop();
// }
// let duzina = array.length;
// console.log(array);

// for (let i = 0; i < duzina; i++) {
// 	console.log(i, "index");
// 	array.pop();
// }

// console.log(array);
// let index = 0;

// for (; index < 6; index++) {
// 	console.log(index, "ne");
// }

// objasniti razliku var i leta u for petlji

// domaci:

// 5. prethodni zadatak da dodate jos sledece:
// ako se unese broj koji je deljiv sa 3, da se ispise poruka "ENES"
// ako se unese broj koji je deljiv sa 5, da se ispise poruka "ENES KLIMENTA"
// ako se unese broj koji je deljiv sa 3 i 5, da se ispise poruka "SEJO BOY"
// svaki od ovih brojeva se paralelno upisuje u niz.
// i nema vise unosa nakon toga broja koji je deljiv sa 3 i 5.

// const niz = [1, 2, 3, 44, 1, 112, 44, 55, 1, 224, 55, 1, 50, 2, 0];

// const sortNumbers = (a, b) => a - b;

// function sortNumberRegular(a, b) {
// 	return a - b;
// }

// niz.sort((a, b) => a - b);

// console.log(niz);
