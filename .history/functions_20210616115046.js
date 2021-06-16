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

function skaiciausAtpazinimas(skaicius) {
    let suma = 0;
    let skaitmuo = 0;
    let indekas = 0;
    let skMasyvas = [];
    while (skaicius != 0) { 
    
        skaitmuo = skaicius % 10;
        skMasyvas[indekas] = skaitmuo;
     
        skaicius = parseInt(skaicius / 10); 
        suma += skaitmuo;
         
        indekas++;
     }
    //skmasyvas 6, paskutinio indeksas 5, 
    skMasyvas[skMasyvas.length] = suma;
    return skMasyvas; // kiekvienas skaicius atskirai + suma

    // grazina masyva kuriame pirmi elementai yra skaitmenys, o paskutinis - suma
}

function isvedimas(rezultatas) {
    console.log(rezultatas);
    for (let i=0; i<rezultatas.length-1; i++) {
        console.log(rezultatas[i]);
    }
    console.log("Suma: "+ rezultatas[rezultatas.length-1]);
}