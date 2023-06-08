nizovi

nizovi  su uredjena kolekcija nekih vrednosti.
niz deklarisemo na sledeci nacin:

let array = [];
ovako deklarisemo prazan niz;

svaki element niza je indeksiran, kao u stringu. npr:

let fruits = ["apple", "banana", "mango"];
pa ako bi smo napisali:

console.log(fruits[0])
videli bi smo apple.

rekli smo da su stringovi nepromenjivi, to ne vazi za nizove.
ako napisemo:
let name = "davud"

i pokusamo da promenimo prvo slovo:

name[0] = "D";
nista se nece promeniti, name ce i dalje ostat davud.

sto se tice nizova, mozemo da dodajemo brisemo menjamo redosled elemenata u nizu.

let names = ["muhamed", "enes", "dinel"];
ako bih napisao:

names[3] = "omer"
console.log(names)

rezultat bi bio:
let names = ["muhamed", "enes", "dinel","omer"];

kako mozemo uvek da dodamo element na kraj niza?:)

metode koje cemo cesto koristit:
pop, push, shift, unsift:
push- dodaje na kraj
pop- uklanja sa kraja
shift-uklanja sa pocetka
unshift - dodaje na pocetak




