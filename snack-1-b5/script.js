
/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

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

let totalWeight = 0;

console.log(zucchine);

zucchine.forEach(zucchina => {
    /* console.log(zucchina.peso); */
    totalWeight += zucchina.peso
    return totalWeight
});

console.log(totalWeight)