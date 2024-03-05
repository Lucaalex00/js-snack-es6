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

//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e età e l'indicazione se può guidare, in base all'età.


peopleList.forEach(person => {
    if (person.eta >= 18) {
        console.log(`allowed to drive: ${person.nome} ${person.cognome} with ${person.eta} years`)
    }
    else {
        console.log(`denied to drive: ${person.nome} ${person.cognome} with ${person.eta} years`)
    }

});




/* if (peopleAge.age >= 18) {
    const allowDrive = 'Consentito'
    console.log(`i dati della persona sono ${peopleName} ${peopleSurname} e ha ${peopleAge}, quindi è ${allowDrive} guidare`)
} else {
    const denyDrive = 'Vietato'
    console.log(`i dati della persona sono ${peopleName} ${peopleSurname} e ha ${peopleAge}, quindi è ${denyDrive} guidare`) */