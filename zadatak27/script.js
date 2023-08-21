// const ptag = document.getElementById("p-tag");
// ptag.style.backgroundColor = "red";
// ptag.innerHTML = "nije vise to sad je ovo";
// console.dir(ptag);

// // const img = document.getElementById("prvaslika");
// // img.src = "https://www.zenasamja.me/images/0100/monalisa-v.jpg";
// // console.dir(img);

// const listaSlika = document.getElementsByClassName("slika");

// listaSlika[0].src = "https://www.zenasamja.me/images/0100/monalisa-v.jpg";
// listaSlika[1].src = "https://www.zenasamja.me/images/0100/monalisa-v.jpg";
// listaSlika[2].src = "https://www.zenasamja.me/images/0100/monalisa-v.jpg";

// // const body = document.getElementsByTagName("body");
// // let peee = document.createElement("p");
// // peee.innerHTML = "dobrodosli";
// // body[0].append(peee);

// // querySelector je univerzalna zamena za getElementbyId, tagName, i class name..
// // (#id), (.className), (h1)

const tiDokleSiBakire = document.querySelectorAll(".fotografije");
console.dir(tiDokleSiBakire);

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.getElementsByTagName("body");
const btnSubmit = document.getElementById("submit");
const btnClear = document.getElementById("clear");

const bobanRajovic = () => {
	for (let i = 0; i < parseFloat(input1.value); i++) {
		let pTag = document.createElement("p");
		pTag.innerHTML = `${input2.value}`;
		pTag.setAttribute("id", "p-tag");
		body[0].appendChild(pTag);
		console.log(pTag);
	}
};

btnSubmit.addEventListener("click", () => bobanRajovic());
// btnSubmit.addEventListener("click", bobanRajovic);  isto se desava

btnClear.addEventListener("click", () => {
	for (let i = 0; i < parseFloat(input1.value); i++) {
		const element = document.getElementById("p-tag");
		element.remove();
	}
});

// u html body nemate elemenata, sve pravite preko javascript
// preko js-a pravite sahovsku tablu
// samo treba da napravite sahovsku tablu 64 polja ( razlicite boje  polja naravno bez figura)
// + je da uradite nazive polja u tim kockicama koje budete pravili.
