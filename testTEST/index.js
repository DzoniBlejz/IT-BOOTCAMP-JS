// function outerFunction() {
// 	var outerVariable = "I am from the outer function";

// 	function innerFunction() {
// 		console.log(outerVariable); // Accessing outerVariable from the outer function
// 	}

// 	return innerFunction; // Returning the inner function
// }

// var closure = outerFunction(); // The inner function is assigned to the 'closure' variable
// closure(); // Invoking the closure

// Sample array of objects
// const products = [
// 	{ id: 1, name: "Keyboard", price: 20, category: "Electronics" },
// 	{ id: 2, name: "Chair", price: 50, category: "Furniture" },
// 	{ id: 3, name: "Mouse", price: 15, category: "Electronics" },
// 	{ id: 4, name: "Table", price: 100, category: "Furniture" },
// 	{ id: 5, name: "Headphones", price: 30, category: "Electronics" },
// ];

// Sort the array by price in ascending order
// const sortedByPrice = products.sort((a, b) => a.price - b.price);

// console.log("Sorted by price (ascending):");
// console.log(sortedByPrice);

// // Filter the array to get only electronics products
// const electronicsProducts = products.filter(
// 	(product) => product.category === "Electronics"
// );

// console.log("Electronics products:");
// console.log(electronicsProducts);

// function romanToDecimal(romanNumeral) {
// 	const romanNumerals = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};

// 	let decimalNumber = 0;
// 	let previousValue = 0;

// 	for (let i = 0; i < romanNumeral.length; i++) {
// 		const currentSymbol = romanNumeral[i];
// 		const currentValue = romanNumerals[currentSymbol];

// 		if (currentValue >= previousValue) {
// 			decimalNumber += currentValue;
// 		} else {
// 			decimalNumber -= currentValue;
// 		}

// 		previousValue = currentValue;
// 	}

// 	return decimalNumber;
// }

// Example usage
// console.log(romanToDecimal("IX")); // Output: 9
// console.log(romanToDecimal("XIV")); // Output: 14
// console.log(romanToDecimal("CXXIV")); // Output: 124
// console.log(romanToDecimal("MMXXI")); // Output: 2021
// function outerFunction() {
// 	const name = "ovo ce se ispisati u funkciji koju vraca outerFunction";

// 	function innerFunction() {
// 		return console.log(name);
// 	}
// 	return innerFunction;
// }

// let closure = outerFunction();

// closure();
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log([a]);
