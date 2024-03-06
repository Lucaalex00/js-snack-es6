// Definizione di un array di oggetti che rappresentano bici da corsa
let biciDaCorsa = [
    { nome: "Bianchi Oltre XR4", peso: 7.2 },
    { nome: "Specialized Tarmac SL7", peso: 6.2 },
    { nome: "Trek Emonda SLR", peso: 6.5 },
    { nome: "Cannondale SuperSix Evo", peso: 5.7 },
    { nome: "Pinarello Dogma F12", peso: 11.9 }
];

// Definizione variabile con peso Minore "DEFAULT"
let biciPesoMinore = 10;

// Ciclo forEach singolo elemento "BICI"
biciDaCorsa.forEach(bici => {
    // Definizione constante per nome e peso ("Destructuring") & log
    const nomeBici = bici.nome;
    const pesoBici = bici.peso;
    console.log(nomeBici, pesoBici)
    // Condizione se il peso dell'oggetto ciclato è inferiore alla variabile con peso Minore "DEFAULT" = Sovrascrivi la stessa con il peso dell'oggetto ciclato.
    if (pesoBici < biciPesoMinore) {
        biciPesoMinore = pesoBici
    }
});

//log
console.log(`Il peso minore fra tutti i modelli di bici è ${biciPesoMinore} kg.`)

//BONUS

let page = document.querySelector('body');

let titlePage = document.createElement('h1')
titlePage.classList.add('text-center', 'red')
titlePage.innerHTML = `Il peso minore fra tutti i modelli di bici è ${biciPesoMinore} kg.`

page.appendChild(titlePage)