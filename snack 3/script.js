//# SNACK 3
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:[  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },]
// Crea un nuovo array con la lista dei mammiferi. 

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.

let animals =
    [
        {
            nome: 'leone',
            famiglia: 'felidi',
            classe: 'mammiferi',
        }, {
            nome: 'tigre',
            famiglia: 'felidi',
            classe: 'mammiferi',
        }, {
            nome: 'gallina',
            famiglia: 'fasianidi',
            classe: 'uccelli',
        }, {
            nome: 'cane',
            famiglia: 'canidi',
            classe: 'mammiferi',
        }, {
            nome: 'zanzara',
            famiglia: 'culicidae',
            classe: 'insetti',
        },
    ]




// Filtro in una variabile, gli animali con classe 'mammiferi'
// Crea un nuovo array con la lista dei mammiferi. 
let mammalAnimalsList = animals.filter(animal => animal.classe === 'mammiferi')
console.log(mammalAnimalsList)
