"use strict";

//Sudeti 2 skaicius


// var masyvas = 5; //negalima ir pakankamai blogai

function sumuoti(a = 0,b = 0) {
    let masyvas;
    masyvas = [a, b];
    let suma;

    //suma = masyvas[0] + masyvas[1];
    suma = a + b;

    return suma ; //grazinti bet koki kintamojo tipa
}

//masyvas yra nematomas
// console.log(masyvas);


let suma, sk1, sk2;
sk1 = 5;
sk2 = 10;
suma = sk1 + sk2;

let tekstas;

tekstas = sumuoti(sk1, sk2); // i funckija galim perduoti bet kokio tipo kintamaji
console.log(tekstas);// ?


// console.log(suma);
// console.log(sumuoti());
console.log(sumuoti());
console.log(sumuoti());
console.log(sumuoti());