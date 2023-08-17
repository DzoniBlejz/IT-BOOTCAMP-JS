// input = onChange

const btn = document.querySelector("#paliGasi");
const body = document.querySelector("body");

const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");

const images = [
	"https://res.akamaized.net/domain/image/fetch/t_web/https://static.domain.com.au/domainblog/uploads/2015/01/18225048/choosing-dog-you-home.jpg",
	"https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x4.jpg",
	"https://i2-prod.manchestereveningnews.co.uk/incoming/article26688230.ece/ALTERNATES/s1200c/0_0686M00000cjilVQAQ.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxknnAkHGD1lxOOuiNCoRYGBWCNEOc9jBkAZAbCe5dr8vFAOC63n8T0QK1oynGQiXFII&usqp=CAU",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevpADL8JMRQs6ucJTzPTeZS9kBbxkLuJ7820iqa5tx0oHxO8FnTNelmRIKKjajm7xZlg&usqp=CAU",
];

const imageHTML = document.querySelector("img");
imageHTML.src = images[0];
let brojac = 1;

btnRight.addEventListener("click", () => {
	if (brojac === 4) {
		return;
	}
	brojac += 1;
	imageHTML.src = images[brojac];
});

btnLeft.addEventListener("click", () => {
	if (brojac === 0) {
		return;
	}
	brojac -= 1;
	imageHTML.src = images[brojac];
});

// const input = document.createElement("input");
// body.append(input);

// input.addEventListener("change", () => {
// 	console.log(input.value);
// });

// btn.addEventListener("click", () => {
// 	if (btn.innerHTML === `pali`) {
// 		body.style.backgroundColor = "yellow";
// 		btn.innerHTML = `gasi`;
// 	} else {
// 		body.style.backgroundColor = "black";
// 		btn.innerHTML = `pali`;
// 	}
// });
