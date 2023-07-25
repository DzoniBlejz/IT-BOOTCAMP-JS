//Zadatak 4: Pronalaženje prvog pozitivnog broja
//Napišite funkciju koja pronalazi i vraća prvi pozitivan broj u nizu. Ako nema pozitivnih brojeva, funkcija treba vratiti null.

// Zadatak 3: Every
// Napišite funkciju koja provjerava jesu li svi elementi niza veći od 10.

// Zadatak 2: Some
// Napišite funkciju koja provjerava je li barem jedan od elemenata u nizu parni broj.

// Zadatak 1: Filter zadatak
// Napišite funkciju koja prima niz brojeva i vraća novi niz koji sadrži samo pozitivne brojeve.

const arrayOfNumbers = [
	1, 2, 3, -2, -4, -10, 1, 5, 67, 1321, -2, -223, -4, -6, 23,
];

const positiveNumbers = arrayOfNumbers.filter((element) => {
	return element > 0;
});

console.log(positiveNumbers);

// some metoda, vraca true ili false, ne vraca niz.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
// const even = (element) => element % 2 === 0;

console.log(array.some((even) => even % 2 === 0));
// Expected output: true

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

const array2 = [12, 8, 130, 44];

const found = array2.find((element) => element % 2 === 1);

console.log(found);
// Expected output: 12
