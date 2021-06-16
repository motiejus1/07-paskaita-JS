"use strict";

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

function beGrazinimo(tekstas) {
    console.log("Rezultatas:" + tekstas);
}

