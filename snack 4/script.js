//# SNACK 4
//Crea un array di oggetti che rappresentano delle persone
//Ogni persona ha un nome, un cognome e un età.
//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e età e l'indicazione se può guidare, in base all'età.

//Crea un array di oggetti che rappresentano delle persone
//Ogni persona ha un nome, un cognome e un età.

const peopleList = [
    {
        nome: 'Luca',
        cognome: 'Cirio',
        eta: 23,
    }, {
        nome: 'Sara',
        cognome: 'Parollu',
        eta: 14,
    }, {
        nome: 'David',
        cognome: 'Maester',
        eta: 33,
    }, {
        nome: 'Fabio',
        cognome: 'Manini',
        eta: 15,
    }, {
        nome: 'Matteo',
        cognome: 'Faustro',
        eta: 12,
    },
]

console.log(peopleList)

//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e età e l'indicazione se può guidare, in base all'età.
let newPeopleList = []

peopleList.forEach(person => {
    if (person.eta >= 18) {
        const allowedList = [` ${person.nome} ${person.cognome} with ${person.eta} years`, 'Allowed']
        console.log(allowedList)
        newPeopleList.push(allowedList)
    }
    else {
        const deniedList = [` ${person.nome} ${person.cognome} with ${person.eta} years`, 'Denied']
        console.log(deniedList)
        newPeopleList.push(deniedList)



    }
});
console.log(newPeopleList)

