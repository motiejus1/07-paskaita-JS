"use strict";

//Sudeti 2 skaicius


// var masyvas = 5; //negalima ir pakankamai blogai


//masyvas yra nematomas
// console.log(masyvas);





// sk1 = 5;
let suma, sk1, sk2;
sk1 = 5;
sk2 = 10;
suma = sk1 + sk2;

let tekstas;

tekstas = sumuoti(3, 21); // i funckija galim perduoti bet kokio tipo kintamaji
// console.log(tekstas);// ?

let tekstas1= atimtis(sk1,sk2);
// console.log(tekstas1);


// let tekstas2 =  beGrazinimo(); //? let tekstas2;
// console.log(tekstas2); //undefined
beGrazinimo(suma);
beGrazinimo(sumuoti());
beGrazinimo(tekstas1);

let skaicius;
skaicius = 1234;
let rezultatas = skaiciausAtpazinimas(skaicius); // ????

isvedimas(rezultatas);

let rezultatas1 = skaiciausAtpazinimas(120221545313);
isvedimas(rezultatas1);

let rezultatas2 = skaiciausAtpazinimas(91);
isvedimas(rezultatas2);

// console.log("Suma: "+ suma) ;