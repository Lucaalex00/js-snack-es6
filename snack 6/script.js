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
const squadreDiCalcioNomeFalli = [];

//Cicliamo forEach per individuare la singola "SQUADRA" .1

squadreDiCalcio.forEach(squadra => {
    console.log(squadra);
    // Destrutturiamo la "SQUADRA" recuperando i valori NOME e FALLI SUBITI
    let squadraNome = squadra.nome;
    let squadraFalli = squadra.falliSubiti;
    console.log(squadraNome, squadraFalli);
    //Pushiamo all'interno dell'array i valori sopra riportati.
    squadreDiCalcioNomeFalli.push({ squadraNome, squadraFalli })
    let page = document.querySelector('body');

    let titlePage = document.createElement('h1')
    titlePage.classList.add('text-center', 'red')
    titlePage.innerHTML = `la squadra ${squadra.nome} ha subito ${squadra.falliSubiti} falli`
    page.appendChild(titlePage)

});
console.table(squadreDiCalcioNomeFalli)


//Filtriamo in una nuova array i parametri nome e falli degli oggetti in squadreDiCalcio .2

const listaSquadreDiCalcioFiltrata = squadreDiCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }))


//BONUS

var oggi = new Date();
var giorno = oggi.getDate();
var mese = oggi.getMonth() + 1;
var anno = oggi.getFullYear();

// Formattiamo la data 
var dataOggi = giorno + '-' + mese + '-' + anno;


listaSquadreDiCalcioFiltrata.forEach(squadra => {
    let page = document.querySelector('body');

    let titlePage = document.createElement('h1')
    titlePage.classList.add('text-center', 'red')
    titlePage.innerHTML = `la squadra ${squadra.nome} ha subito ${squadra.falliSubiti} falli fino ad oggi (${dataOggi} )`
    page.appendChild(titlePage)
});
console.log(listaSquadreDiCalcioFiltrata)

