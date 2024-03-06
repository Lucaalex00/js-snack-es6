/* 

Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


*/
let word = prompt('Scrivi una parola')

let reverseWord = /* word.split('').reverse().join('') */ toReverseWord(word)

/**
 * Make a String in reverse Format
 * @param {String} str 
 * @returns str
 */
function toReverseWord(str) {
    return str.split('').reverse().join('')
}
console.log(reverseWord)