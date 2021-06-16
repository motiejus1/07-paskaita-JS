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
// console.log(suma);
// console.log(sumuoti());
// console.log(sumuoti());
// console.log(sumuoti());
// console.log(sumuoti());


// Išveskite n-ženklio skaičiaus visus skaitmenis atskirai ir suraskite jų sumą. 
// Kiekviena skaitmenį surašome į masyvą


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

let skaicius;
skaicius = 1234;
let rezultatas = skaiciausAtpazinimas(skaicius); // ????

isvedimas(rezultatas);

let rezultatas1 = skaiciausAtpazinimas(120221545313);
isvedimas(rezultatas1);

let rezultatas2 = skaiciausAtpazinimas(91);
isvedimas(rezultatas2);

// console.log("Suma: "+ suma) ;