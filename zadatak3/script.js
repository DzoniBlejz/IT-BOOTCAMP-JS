let kokoske = 4;

kokoske - 1; // rezultat je 3

console.log(kokoske); // rezultat ce da bude 4

// ako hocemo da promenimo broj kokosaka to mozemo da uradimo ovako:

kokoske = kokoske - 1;

// ili mozemo to uraditi ovako

kokoske -= 1; // ovo ce isto da umanji broj za 1

console.log(kokoske, "dinel kaze da imamo jos 2 koke"); // sad ce se ispisat broj 3

kokoske = kokoske + 10; // sad imamo 12 kokosaka

// mozemo da uradimo na ovaj nacin:

kokoske += 10; // ovo ce da doda broj 10 isto kao i u prethodnom primeru.
// pa ovako mozemo da radimo i za operaciju mnozenja

kokoske *= 50;

// kokoske = kokoske * 50; isto kao u liniji 24

console.log(kokoske);

// ovako ne mozemo da deklarisemo varijable :

// let let = 10;

let broj = 0;
broj++;
console.log(broj); // broj = 1;

broj--;
console.log(broj); // broj = 0;

let firstName = "marcus aurelius";

console.log(firstName, "hheehhe");

console.log(firstName[4]);

console.log(firstName.toUpperCase());

console.log(firstName);

console.log(firstName.length);

let pom = "test string";

// ispisace duzinu reci

//svaki karakter u stringu ima svoj index, tj redni broj, npr:

console.log(
	firstName[0],
	"ispisace se prvo slovo, tj nulti index, index 0 a to je slovo d"
);

console.log(firstName[1], "drugo slovo");

// ne mozemo menjati slova u stringu, npr:

firstName[1] = "C";

console.log(firstName, "ovo ce se ispisat, nista se nije promenilo");

let bigFirstName = firstName.toUpperCase();

console.log(bigFirstName);

// boolean

let isGameFinished = false;

// pa recimo sad, ako je igra zavrsena, jednostavno cemo promenit vrednost na true:

isGameFinished = true;

let ime = "sejo";
let velikaSlova = ime.toUpperCase();

// napravite novu varijablu koja se zove street i dodelite joj
// vrednost naziva vase ulice gde zivite;

let flowers = "tulips";
let food = "burgers";
let juices = "lemonades";

console.log(flowers.length);
let duzinaReci = flowers.length - 1;

console.log(flowers[flowers.length - 1]);
console.log(flowers[duzinaReci]);

// ako je dinel stariji od omera ispisi tu poruku

let dinel = 19;
let omer = "19";

if (dinel > omer) {
	console.log("dinel je stariji od omca");
} else if (dinel == omer) {
	// console.log("dinel " + dinel + " i omer" + " 19" + " imaju isto godina");
	console.log(
		`dinel ima ${dinel} godina isto kao i omer koji ima ${omer} godina`
	);
}
