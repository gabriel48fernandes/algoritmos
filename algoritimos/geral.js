const prompt = require("prompt-sync")()
const peso =prompt(" Qual é o peso do caminhão ?? ")
const altura= prompt(" Qual a altura do caminhão ?? " )
const pesomaximo= 5000
const alturamaxima= 4.30  
if (peso <= pesomaximo && altura <= alturamaxima)
{console.log ("pode passar")
return}
else
console.log ("nao pode passar")