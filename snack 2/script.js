//# SNACK 2
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

/*
snack 2
*/

//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
const strings = ['PiPpO', 'PLUTo', 'PapeRAGNo'];
strings.forEach(string => {
    console.log(string)
    return string
});
const fixedStrings = strings.map(string => string[0].toUpperCase() + string.slice(1).toLowerCase())
console.log(fixedStrings)



