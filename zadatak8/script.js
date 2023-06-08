// imate 3 prompta.
// prvi prompt prima matematicku operaciju: " +, -, *, /"
// drugi prompt prima broj
// treci prompt prima broj

// unosite matematicku operaciju prvo, pa nakon toga unosite brojeve koje
// hocete da kalkulisete

// bilo kakav drugi unos u prvom promptu a da nije ove 4 pomenute operacije, ispisace se
// neka poruka koja to indikuje.

// let numberOne = Number(prompt("unesi prvi broj"));
// let numberTwo = Number(prompt("unesi drugi broj"));

// let operation = prompt("unesite + - * ili / ili kvadrat");

// let result = 0;

// switch (operation) {
// 	case "+":
// 		result = numberOne + numberTwo;
// 		console.log(result);
// 		break;
// 	case "-":
// 		result = numberOne - numberTwo;
// 		console.log(result);
// 		break;
// 	case "*":
// 		result = numberOne * numberTwo;
// 		console.log(result);
// 		break;
// 	case "/":
// 		result = numberOne / numberTwo;
// 		console.log(result);
// 		break;
// 	case "^":
// 		result = Math.pow(numberOne, numberTwo);
// 		console.log(result);
// 		break;
// 	default:
// 		console.log("uneli ste pogresnu mat operaciju");
// }

// if (operation === "-") {
// 	result = numberOne - numberTwo;
// 	alert(`rezultat operacije ${operation} je: ${result}`);
// } else if (operation === "+") {
// 	result = numberOne + numberTwo;
// 	alert(`rezultat operacije ${operation} je: ${result}`);
// } else if (operation === "*") {
// 	result = numberOne * numberTwo;
// 	alert(`rezultat operacije ${operation} je: ${result}`);
// } else if (operation === "/") {
// 	result = numberOne / numberTwo;
// 	alert(`rezultat operacije ${operation} je: ${result}`);
// } else {
// 	alert("uneli ste nevalidnu operaciju");
// }

// let day = "ponedeljak";

// if (day === "ponedeljak") {
// 	console.log("danas nemamo kurs");
// } else {
// 	console.log("danas imamo kurs");
// }

// day === "pondeljak" ? console.log("nemamo kurs") : console.log("imamo kurs");

////// NIZOVI:

let names = ["davud", "muhamed", "omer", 5];
console.log(names);

let papuce = "nike";
console.log(papuce[0]);
papuce[0] = "N";
console.log(papuce);

names[0] = "nikola je 2 put pametniji od davuda";
console.log(names);

names[3] = "prof. semsudin plojovic";
console.log(names);

console.log(names.length);

let komsije = [
	"biska",
	"munir",
	"bajramka",
	"knele",
	undefined,
	null,
	NaN,
	123,
];

komsije[komsije.length] = "davude uci skolu";
console.log(komsije);
