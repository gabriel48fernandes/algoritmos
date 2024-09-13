const prompt=require ("prompt-sync")()
const numeroUsuario= parseInt(prompt("digite um numero: "))
const escolhaUsuario=prompt("escolha: par ou impar: ")
const numeroComputador=  Math.floor(Math.random()*11)
const soma= numeroUsuario + numeroComputador
console.log ("o numero gerado pelo computador é:" , numeroComputador)
let avaliaçaosoma=0
if (soma%2===0)
{
console.log("a soma é par")
avaliaçaosoma= "par"
}
else
{
console.log ("a soma é impar")
avaliaçaosoma= "impar"
}
if (escolhaUsuario===avaliaçaosoma){
console.log ("parabens voce ganhou")
}else
console.log ("computador ganhou")
console.log ("o numero total é:" ,soma )