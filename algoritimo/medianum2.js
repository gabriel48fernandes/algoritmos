const prompt=require("prompt-sync")()
let quantidade= 5
let soma= 0 
let contador= 0
numero=0

for (let i= 0; i<quantidade; i++){
    numero = parseFloat(prompt(" insira um numero "))
    contador++
    soma+=numero
}
let media = soma / contador
    console.log ("a soma dos numeros é : ", soma )
    console.log ("a media dos numeros é ", media)