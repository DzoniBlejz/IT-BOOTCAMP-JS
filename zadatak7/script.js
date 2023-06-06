// let variable = "22.912";

// console.log(variable);

// console.log(typeof variable);

// variable = parseInt(variable);

// console.log(typeof variable);
// console.log(variable);

// let variable2 = "5.5";

// console.log(typeof variable2);

// variable2 = parseFloat(variable2);

// console.log(typeof variable2);
// console.log(variable2);

//napisati program koji ce na osnovu unetog broja da ispise koji je to dan u nedelji
// npr, let day = 1, treba da se ispise u consoli ponedeljak, i tako da sve ostale dane.
// ukoliko se unese dan koji je van opsega dana u nedelji
// (0, ili negativan broj, ili broj veci od 7)
// ispisati odgovarajucu poruku.
// koristite IF

// switch (day) {
// 	case 1:
// 		console.log("pon");
// 		break;
// 	case 2:
// 		console.log("uto");
// 		break;
// 	case 3:
// 		console.log("sreda");
// 		break;
// 	case 4:
// 		console.log("cet");
// 		break;
// 	case 5:
// 		console.log("petak");
// 		break;
// 	case 6:
// 		console.log("sub");
// 		break;
// 	case 7:
// 		console.log("ned");
// 		break;
// 	default:
// 		console.log("nevalidan dan");
// }
// let day = Number(prompt("unesite dan"));

// if (day === 1) {
// 	console.log("ponedeljak");
// } else if (day === 2) {
// 	console.log("utorak");
// } else if (day === 3) {
// 	console.log("sreda");
// } else if (day === 4) {
// 	console.log("cetvrtak");
// } else if (day === 5) {
// 	console.log("petak");
// } else if (day === 6) {
// 	console.log("subota");
// } else if (day === 7) {
// 	console.log("nedelja");
// } else {
// 	console.log("nevalidan uslov");
// }

// switch (day) {
// 	case 1:
// 		console.log("ponedeljak");
// 		break;
// 	case 2:
// 		console.log("uto");
// 		break;
// 	case 3:
// 		console.log("sre");
// 		break;
// 	case 4:
// 		console.log("cet");
// 		break;
// 	case 5:
// 		console.log("pet");
// 		break;
// 	case 6:
// 		console.log("sub");
// 		break;
// 	case 7:
// 		console.log("ned");
// 		break;
// 	default:
// 		console.log("nevalidan unos");
// }
// 1. jagode
// 2. banane
// 3. lubenice
// 4. narandze
// 5. jabuke
// pisete cenu tog istog unetog voca
// npr: banane, poruka je:
// poskupele haos, ili kilo 240 dinara
// za slucaj kad je uneto nesto drugo
// console.log("nevalidan unos");
// pisete

let input = prompt("unesite naziv voca");
switch (input) {
	case "jagode":
		console.log("dzab dzabe");
		break;
	case "banane":
		console.log("utorkom dzabe");
		break;
	case "lubenice":
		console.log("uvek dzabe");
		break;
	case "narandze":
		console.log("nikad dzabe");
		break;
	case "jabuke":
		console.log("dzabe");
		break;
	default:
		console.log("nevalidan unos");
}
