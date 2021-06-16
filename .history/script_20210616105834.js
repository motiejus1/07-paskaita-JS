"use strict";

//Sudeti 2 skaicius


// var masyvas = 5; //negalima ir pakankamai blogai


//masyvas yra nematomas
// console.log(masyvas);

function sumuoti(sk1 = 0,sk2 = 0) {
    let masyvas;
    masyvas = [sk1, sk2];
    let suma;

    //suma = masyvas[0] + masyvas[1];
    suma = sk1 + sk2;

    return suma ; //grazinti bet koki kintamojo tipa
}

function atimtis(sk1 = 0,sk2 = 0) {
    let masyvas;
    masyvas = [sk1, sk2];
    let likutis;
    
    if(sk1 > sk2 ) {
        likutis = sk1 - sk2;
    } else if(sk2 > sk1) {
        likutis = sk2 - sk1;
    } else {
        likutis = 0;
    }
    
    return likutis ; //grazinti bet koki kintamojo tipa
}

function beGrazinimo



// sk1 = 5;
let suma, sk1, sk2;
sk1 = 5;
sk2 = 10;
suma = sk1 + sk2;

let tekstas;

tekstas = sumuoti(3, 21); // i funckija galim perduoti bet kokio tipo kintamaji
console.log(tekstas);// ?

let tekstas1= atimtis(sk1,sk2);
console.log(tekstas1);

// console.log(suma);
// console.log(sumuoti());
// console.log(sumuoti());
// console.log(sumuoti());
// console.log(sumuoti());
