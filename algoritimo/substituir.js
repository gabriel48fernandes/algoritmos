const prompt= require("prompt-sync")();
const frase=prompt ("escreva uma frase")
const substituido =( frase.replaceAll ("a","?"))
console.log (" original " + frase + "\n substituido " + substituido)