//# SNACK 1
//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.


/*
snack 1
*/

//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const cars = [
    {
        marca: 'Chevrolet', //1
        modello: 'Camarro',
        alimentazione: 'Benzina',
    },

    {
        marca: 'Audi', //2
        modello: 'A1',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Chevrolet', //3
        modello: 'Corvette',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Suzuki', //4
        modello: 'Swift',
        alimentazione: 'Hybrid',
    },
    {
        marca: 'Tesla', //5
        modello: 'Model_S',
        alimentazione: 'Electric',
    },
    {
        marca: 'Audi', //6
        modello: 'A3',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Toyota', //7
        modello: 'Aygo',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Toyota', //8
        modello: 'Yaris',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Fiat', //9
        modello: 'Panda',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Fiat', //10
        modello: 'Tipo',
        alimentazione: 'Diesel',
    },

]

/* Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
*/
//Infine stampa separatamente i 3 array. 
let carBenzina = cars.filter(car => car.alimentazione === 'Benzina')
console.log(carBenzina)

let carDiesel = cars.filter(car => car.alimentazione === 'Diesel')
console.log(carDiesel)

let carEco = cars.filter(car => car.alimentazione !== 'Benzina' && car.alimentazione !== 'Diesel')
console.log(carEco)
