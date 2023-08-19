function average(a, b) {
	console.log("average funkcija pozvana");
	return add(a, b) / 2;
}
function multiply(a, b) {
	console.log("multply funkcija pozvana");
	return a * b;
}

function express(a, b) {
	console.log("express funkcija pozvana");
	return a ** b;
}

function divide(a, b) {
	console.log("divide funkcija pozvana");
	multiply(a, b);
	return a / b;
}

function add(a, b) {
	console.log("add funkcija pozvana");
	express(a, b);
	divide(a, b);
	return a + b;
}

average(10, 20);

//HTTP methods

const API =
	"https://private-anon-341d53318c-pizzaapp.apiary-mock.com/restaurants/";

function getRestauraunts() {
	const response = fetch(API);
	const restaurants = response
		.then((result) => {
			console.log(result, "rezultat");
		})
		.catch((err) => {
			console.log(err, "error");
		});
	console.log(restaurants);
}

getRestauraunts();
