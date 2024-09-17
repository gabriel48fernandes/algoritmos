const prompt = require ("prompt-sync")()
const xis_salada= 28
const xis_salada_duplo= 35
const xis_frango=  40
const xis_calabresa= 45
console.log ("MENU DA CASA")
console.log ("1- Xis salada R$", xis_salada )
console.log ("2- Xis salada duplo R$", xis_salada_duplo)
console.log ("3- Xis frango R$", xis_frango)
console.log ("4- Xis calabresa R$", xis_calabresa)
const menu = parseInt(prompt("qual numero voce quer? "))
console.log ("voce escolheu", menu)