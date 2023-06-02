let broj1 = -2;
let broj2 = 5;
const broj3 = 200;

// if (tu nesto uporedjujemo) {
// 	aksdal;ksd;loadavg;lsd
// } else if (tu nesto uporedjujemo){
// 	as;lkda;lskd;alksd
// } else if (tu nesto uporedjujemo){
// 	as;lkda;lskd;alksd
// } else if (tu nesto uporedjujemo){
// 	as;lkda;lskd;alksd
// } else if (tu nesto uporedjujemo){
// 	as;lkda;lskd;alksd
// } else (tu nesto uporedjujemo){
//     nesto
// }

// if (hahu) {
//     nesto
// } else {
//     ahahah
// }

let komsija1 = "Razvigor";
let komsija2 = "Muzafer";
let komsinica = "Hasima";

let godineKomsija1 = 50;
let godineKomsija2 = 99;
let godineKomsinica = 200;

if (godineKomsija1 < godineKomsija2 && godineKomsija1 < godineKomsinica) {
	//prvo proveravamo koji je najmladji, pa onda unutar tog uslova napravimo jos jedan uslov gde proveravamo koji je drugi najstariji
	// i koji je najstariji
	console.log(komsija1, "je najmladji komsija");
	if (godineKomsija2 < godineKomsinica) {
		// ovde proveravamo koji je drugi najstariji i koji je najstariji, u SLUCAJU kada je prvi uslov tacan, (linija 33)
		console.log(komsija2, "je drugi najstariji komsija");
		console.log(komsinica, "je najstariji komsija");
	} else {
		console.log(komsinica, "je drugi najstariji komsija");
		console.log(komsija2, "je najstariji komsija");
	}
} else if (
	// isto i ovde, proveravamo koji je najmladji komsija, pa onda ako je ovaj uslov tacan, ulazimo u njegov blok
	// pa tamo pravimo jos jedan uslov kao u prethodnom primeru
	godineKomsija2 < godineKomsija1 &&
	godineKomsija2 < godineKomsinica
) {
	console.log(komsija2, "je najmladji komsija");
	if (godineKomsija1 < godineKomsinica) {
		console.log(komsija1, "je drugi najstariji komsija");
		console.log(komsinica, "je najstariji komsija");
	} else {
		console.log(komsinica, "je drugi najstariji komsija");
		console.log(komsija1, "je najstariji komsija");
	}
} else {
	// ako nijedan od prethodna dva uslova nije ispunjen
	// ovaj blok koda ce se izvrsit
	console.log(komsinica, "je najmladji komsija");
	if (godineKomsija1 < godineKomsija2) {
		console.log(komsija1, "je drugi najstariji komsija");
		console.log(komsija2, "je najstariji komsija");
	} else {
		console.log(komsija2, "je drugi najstariji komsija");
		console.log(komsija1, "je najstariji komsija");
	}
}
