console.log("ha");

const API =
	"https://private-anon-341d53318c-pizzaapp.apiary-mock.com/restaurants/"; // endpoint, pokazuje ka mestu u bazi

// fetch(API)
// 	.then((response) => {
// 		response.json().then((data) => {
// 			console.log(data);
// 			// ako bi smo ovde pokusali da ispisemo response, dobili bi error, ali ako bi koristili await, u async
// 			// funkciji, await bi pauzirao izvrsavanje funkcije, oddnosno cekao bi da se promise izvrsi, pa bi zato
// 			// i dobili resenje
// 		});
// 	})
// 	.catch((error) => {
// 		console.log(error, "error");
// 	});

// async function Dzoni() {
// 	return "Time is up!";
// }

// async funkcije uvek vracaju promise, pa onda
// mozemo da ih koristimo kao kraci nacin za kreiranje promise
// kad koristimo async funkcije sa await, await komanda pauzira izvrsavanje funkcije, cekajuci
// da promise bude Resolved

async function asinkFunkcija() {
	try {
		const response = await fetch(API);
		// po defaultu salje GET HTTP metodu. (mozemo da stavimo koji god mi hocemo, ali default je GET metoda)
		data = response.json();
		console.log(data);
	} catch (error) {
		console.log(error, "error");
	}
}

asinkFunkcija();
