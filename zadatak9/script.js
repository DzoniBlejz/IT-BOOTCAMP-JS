let names = ["muhamed", "enes", "dinel", "omer"];

console.log(names[names.length]); // ovo ce da vrati undefined

names[names.length] = "sejo"; // ovo ce da doda na kraj niza element

console.log(names); // ['muhamed', 'enes', 'dinel', 'omer', 'sejo']

names.push("davudu se pokvario trotinet");

console.log(names); // ['muhamed', 'enes', 'dinel', 'omer', 'sejo', 'davudu se pokvario trotinet']

names.pop(); // izbacio poslednjeg iz niza

console.log(names); // ["muhamed", "enes", "dinel", "omer", "sejo"];

names.unshift("imlek"); // dodao element na pocetak niza

console.log(names); //  ['imlek', 'muhamed', 'enes', 'dinel', 'omer', 'sejo']

names.shift(); // uklonio prvi element

console.log(names); //  ['muhamed', 'enes', 'dinel', 'omer', 'sejo']
