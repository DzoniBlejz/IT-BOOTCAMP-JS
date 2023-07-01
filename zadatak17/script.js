const objekat1 = {
	ime: "nikola",
	prezime: "glisovic",
};

const objekat2 = { ime: "nikola", prezime: "glisovic" };

// objekat1 = 012738172398; zamislite da ovako izgledaju reference za oba objekta
// objekat2 = 997655125399;

const array1 = [1, 2, 3, 4, 5];

const array2 = [1, 2, 3, 4, 5];

const broj1 = 50;
const broj2 = 50;

console.log(objekat1 === objekat2);
console.log(objekat1 == objekat2);

console.log(array1 === array2);
console.log(array1 == array2);

console.log(broj1 === broj2);
console.log(broj1 == broj2);

const objekat3 = objekat1;

console.log(objekat1 === objekat3);

objekat = {
	daljinski: "vox",
	kompjuter: "nov",
	biciklo: "staro gvozdje kupujemo stare akulumatore stare kereke",
	ranac: "tudj",
	lopta: "izbusena",
};

imeno = "heheheeheheh";
objekat["nestonovo"] = "samsung";

let najduza = objekat.daljinski;

for (const promenljiva in objekat) {
	if (objekat[promenljiva].length > najduza.length) {
		najduza = objekat[promenljiva];
	}
}
console.log(najduza);

let sviKljucevi = Object.keys(objekat);
console.log(sviKljucevi);

let sveVrednosti = Object.values(objekat);
console.log(sveVrednosti);

let Ddzenis = Object.entries(objekat);
console.log(Ddzenis);

console.log(objekat);

let array3 = [12, 22, 33, 43, 45, 16, 57];

for (let i = 0; i < array3.length; i++) {
	console.log(array3[i]);
}

for (const i of array3) {
	console.log(i);
}

// sumirate sve elemente pomocu for of petlje i pomocu for obicne petlje, i for in petlje;

let sum = null;
for (const key in array3) {
	sum += array3[key];
}

console.log(sum);

// let array = ["apple", "banana", "strawberry", ["apple", "strawberry"]];

// ispisati koliko se puta element apple pojavljuje u nizu.
