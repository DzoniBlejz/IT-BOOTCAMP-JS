truthy falsy vrednosti: sledeci cas
objasniti ternarni operator ? 
sta vraca uslov u IF
logicki operatori && || !
prednost operatora(&& ima prednost)

let x = 7;
x == 7 || x === 3 && x > 10
true && false === false

zapravo js to gleda ovako: 
x == 7 || (x === 3 && x > 10);
prvo se izvrsi u zagradama pa onda ostalo
true   || false === true

pa je ovaj primer tacan (linija 10 do 13)

ako bi smo stavili:
(x == 7 || x === 3) && x > 10;
true                && false === false

redosled prednost logickih operatora je sledeci:

! pa onda ide && pa onda ide ||

najvecu prednost imaju () zagrade.
primer: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence 


// koja je razlika izmedju == i ===?
// == uporedjuju samo vrednost, primer:

// let a = 10;
// let b = "10";

// (a==b) true

// === uporedjuju i tip podatka i vrednost

// (a===b) false

= koristimo za dodelu vrednosti: 
let a = 5;

5 > 2 && 5 > 4 === true;
5 > 10 || 5 > 4;
false || true === true;

let ime = "davud";

if (!ime) {
	console.log("davud je na casu");
} else {
	console.log("davud je na trotinet");
}