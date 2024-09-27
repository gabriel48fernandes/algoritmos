const prompt = require ('prompt-sync')()
const palavra = prompt("Digite uma palavra:");
const palavraInvertida = palavra.split('').reverse().join('');
console.log(palavraInvertida);