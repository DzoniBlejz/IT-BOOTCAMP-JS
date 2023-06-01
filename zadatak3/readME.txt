nazivanje varijabli je jako bitno, pa recimo ako imamo neki finalni rezultat necemo varijablu nazvat x = 10
nego cemo je nazvat finalScore.


u javascript jeziku praksa je da se varijable pisu na sledeci nacin:

prva rec pocinje malim slovom, i svaka sledeca rec pocinje velikim slovom.
To se zove camelCase, npr:


finalScore, ili theBiggestNumber, ili theTallestBuilding. znaci svaka sledeca rec je pisana velikim slovom, osim prve reci variable.
a ne the-biggest-number, ili the_biggest_number.


sta ce se ispisat: 

let eggCount = 42;
eggCount + 2;
eggCount += 2;


ako napisem console.log(eggCount) koji broj cemo videti?

const rating = 8;
rating = 19;

ako napisem console.log(rating) koji broj cemo videti?

let windSpeed = 76;
windSpeed += 5;
windSpeed--;


ako napisem console.log(wind_speed) koji broj cemo videti?
i je li ima nesto sto bi mogli dodatno da promenimo u ovom primeru?


-----

postoji nesto sto se zove sintaksa.

A to je pravilo pisanja koda, odnosno skup pravila za pisanje programa u nekom programskom jeziku.

ne mozemo da deklarisemo varijable kako mi hocemo, nego moramo da se drzimo nekih pravila u javascriptu, kao i u svim ostalim programskim jezicima.



objasniti operatore sledeci cas.
!==, ===, ==, > < | && . . .
interpolaciju, i kako mozemo da koristimo navodnike u stringovima.

JavaScript operatori za poredjenje


==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator (uslovni operator)


JavaScript logicki operatori

&&	logical and, primer: (muhamed && nikola && davud)
||	logical or, primer: (muhamed || nikola || davud)
!	logical not, primer: (!muhamed) , (muhamed)