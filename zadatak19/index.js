// let osoba = {
// 	ime: "nikola",
// 	prezime: "glisovic",
// 	nadimak: "bosko",
// 	godine: 100,
// 	methodaUspavljivanja: function () {
// 		console.log("spavaj");
// 	},
// };

// console.log(osoba.methodaUspavljivanja());

// const novijiNacin = () => {
// 	console.log("noviji nacin");
// };

// // arrow funkcija

// function starijiNacin() {
// 	console.log("stariji nacin");
// }

// console.log(osoba.ime);

// console.log(osoba["godine"]);

// for (const element in osoba) {
// 	console.log(element);
// }

// const novaVariabla = Object.keys(osoba);

// console.log(novaVariabla);

// const najnovijaVariabla = Object.values(osoba);

// imamo funkciju koja prima jedan parametar, to je broj
//  funckija vraca indexe elemenata iz niza cija suma je jednaka nasem broju

// unesem 5 , ako je niz sledece niz = [1,2,3,4] rezultat treba da bude [1,2] tj indeksi elemenata 2 i 3 u nizu.

// najtezi deo: da nadjemo indexe koji odgovaraju nama
//  najlaksi deo: da nadjemo indexe

// da napravimo funkciju
// da napravimo varijable koje nam trebaju da bi resili zadatak
// glavni problem:
// kako da saberemo svaki elemment sa svakim?

const array = [1, 2, 3, 10, 20, 2, 3, 5, 20, 1, 15, 45, 1000];
let result = [];
let broj = 40;

for (let i = 0; i < array.length; i++) {
	if (result.length >= 2) {
		break;
	}
	for (let j = 1; j < array.length - 1; j++) {
		if (array[i] + array[j] === broj && i !== j) {
			result.push(i, j);
			break;
		}
	}
}
console.log(result);

// uradite ovo pomocu funkcije
