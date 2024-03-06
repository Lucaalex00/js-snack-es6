/* snack-2-b5
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

let zucchine = [
    { varietà: "Zucchina nera di Milano", peso: 150, lunghezza: 15 },
    { varietà: "Zucchina romanesca", peso: 120, lunghezza: 12 },
    { varietà: "Zucchina striata di Napoli", peso: 180, lunghezza: 18 },
    { varietà: "Zucchina lunga fiorentina", peso: 200, lunghezza: 20 },
    { varietà: "Zucchina tonda di Piacenza", peso: 100, lunghezza: 10 },
    { varietà: "Zucchina trombetta di Albenga", peso: 130, lunghezza: 13 },
    { varietà: "Zucchina bianca triestina", peso: 170, lunghezza: 17 },
    { varietà: "Zucchina siciliana", peso: 140, lunghezza: 14 },
    { varietà: "Zucchina genovese", peso: 160, lunghezza: 16 },
    { varietà: "Zucchina lunga fiorentina", peso: 190, lunghezza: 19 }
];
let ZucchinaSmallList = [];
let ZucchinaLargeList = [];
let zucchinaSmallWeight = 0;
let zucchinaLargeWeight = 0;

zucchine.forEach(zucchina => {
    /* console.log(zucchina) */
    if (zucchina.lunghezza < 15) {
        ZucchinaSmallList.push(zucchina)
        zucchinaSmallWeight += zucchina.peso
        return zucchinaSmallWeight
    } else {
        ZucchinaLargeList.push(zucchina)
        zucchinaLargeWeight += zucchina.peso

        return zucchinaLargeWeight
    }
});
console.log(zucchinaSmallWeight)
console.log(zucchinaLargeWeight)