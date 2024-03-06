// Array di oggetti rappresentanti squadre di calcio
let squadreDiCalcio = [
    { nome: "Juventus", puntiFatti: Math.floor(Math.random() * 50 + 1), falliSubiti: Math.floor(Math.random() * 50 + 1) },
    { nome: "Milan", puntiFatti: Math.floor(Math.random() * 50 + 1), falliSubiti: Math.floor(Math.random() * 50 + 1) },
    { nome: "Inter", puntiFatti: Math.floor(Math.random() * 50 + 1), falliSubiti: Math.floor(Math.random() * 50 + 1) },
    { nome: "Roma", puntiFatti: Math.floor(Math.random() * 50 + 1), falliSubiti: Math.floor(Math.random() * 50 + 1) },
    { nome: "Napoli", puntiFatti: Math.floor(Math.random() * 50 + 1), falliSubiti: Math.floor(Math.random() * 50 + 1) }
];

// Stampare le squadre di calcio
console.log("Squadre di calcio:");
console.table(squadreDiCalcio);

//Definizione di un nuovo array VUOTO
/* const squadreDiCalcioNomeFalli = [];

//Cicliamo forEach per individuare la singola "SQUADRA" .1

squadreDiCalcio.forEach(squadra => {
    console.log(squadra);
    // Destrutturiamo la "SQUADRA" recuperando i valori NOME e FALLI SUBITI
    let squadraNome = squadra.nome;
    let squadraFalli = squadra.falliSubiti;
    console.log(squadraNome, squadraFalli);
    //Pushiamo all'interno dell'array i valori sopra riportati.
    squadreDiCalcioNomeFalli.push({ squadraNome, squadraFalli })

});
console.table(squadreDiCalcioNomeFalli) */

//Filtriamo in una nuova array i parametri nome e falli degli oggetti in squadreDiCalcio .2
const listaSquadreDiCalcioFiltrata = squadreDiCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
console.log(listaSquadreDiCalcioFiltrata)


