let niz = [12, -12, 5, -5, 6, -6, 7, -7, 8, -20, 20, 50, -30];
// napisati funkciju koja ce da proveri da li za svaki pozitivan broj ima isti takav negativan broj, i ako ima,
// smestiti te pozitivne brojeve u novi niz i taj niz ispisati.

// let niz2 = [];

// for (let i = 0; i < niz.length; i++) {
// 	if (niz[i] > 0) {
// 		for (let j = 1; j < niz.length; j++) {
// 			if (niz[i] + niz[j] === 0) {
// 				niz2.push(niz[i]);
// 			}
// 		}
// 	}
// }

// console.log(niz2);

// const header = document.querySelector(".header");
// header.style.backgroundColor = "red";

const header2 = document.getElementsByClassName("header");
console.log(header2);
header2[0].style.backgroundColor = "blue";

const btn1 = document.getElementById("1");

btn1.addEventListener("click", () => {
	alert("clicked");
});

const btn2 = document.getElementById("2");

btn2.addEventListener("mouseleave", () => {
	console.log("Radi");
	document.body.style.backgroundColor = "white";
});

const colors = ["red", "blue", "green", "black", "grey", "purple", "orange"];

btn2.addEventListener("mouseover", () => {
	let n = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = `${colors[n]}`;
});

// napravite funckiju koju cete proslediti u addevenetlistener.
