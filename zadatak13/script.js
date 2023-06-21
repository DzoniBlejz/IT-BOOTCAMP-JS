// da napravite funkciju, koja ce unetu vrednost iz prompta da smesti
// u niz koji ste napravili u telu funkcije.
// i napravite posebnu funkciju za ispis tog niza
// znaci imate dve funkcije, jednu za smestanje vrednosti iz inputa
// drugu za ispis niza

// function displayArray(test) {
// 	return test;
// }

// function putInArray(input) {
// 	const array2 = [];
// 	array2.push(input);
// 	console.log(array2);
// 	return array2;
// }

// displayArray(putInArray("nesto"));

// primitivnih tipova podataka , null string numbr undefined itd
// referentnih tipova podataka objekti i nizovi

// let a = 5;
// let b = undefined;

// const neMogu = "haha";
// neMogu = "hehe"; ovo ce da izbaci error

// const array2 = [];
// array2.push("heheeheheheh");
// console.log(array2); ovo nece zato sto se referenca ne menja!

// let unos = prompt("unesi unos");

// function prva() {
// 	const array = [];
// 	array.push(unos);
// 	return array;
// }

// function druga() {
// 	console.log(prva());
// }

// druga();

// da vidimo sta rade petlje

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

for (let index = 0; index < array.length; index++) {
	console.log(array[index]);
}
// da uradite 5 zadataka:
// let array = ["nikola", "muhamed", "davud", "ninininin"]
// 1. da nadjete najduze ime
// 2. da sva imena prebacite u velika slova
// 3. da ako je paran broj elemenata u nizu dodate jos toliko elemanata
// 4. ispraznite ceo niz
// 5. imate prompt i prazan niz. u niz unosite vrednosti iz prompta, dokle god se ne unese
// broj 50. kad se unese broj 50 tad se prekida petlja, i ispisuje se niz
// sa prethodno unetim elementima. 50 nece da bude u nizu!!!!
