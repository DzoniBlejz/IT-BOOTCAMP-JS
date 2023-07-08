let array = [
	"apple",
	"banana",
	"strawberry",
	["banana", "apple", "strawberry"],
];

let brojac = 0;

for (let i = 0; i < array.length; i++) {
	if (array[i] === "apple") {
		brojac++;
	}
	if (Array.isArray(array[i])) {
		for (let j = 0; j < array[i].length; j++) {
			if (array[j] === "apple") {
				brojac++;
				console.log("nasao sam jabuku u drugi niz");
			}
		}
	}
}
console.log(brojac);

// let spojeniNiz = array.flat();
// let brojac = 0;

// for (let i = 0; i < spojeniNiz.length; i++) {
// 	if (spojeniNiz[i] === "apple") {
// 		brojac++;
// 	}
// }

// console.log(brojac);
