let vendas = [250,400,150,300,600,200,550]
let maior = []
let soma=0
for (let i=0; i<vendas.length;i++){
    if (vendas[i] > maior){
        maior= vendas[i]
    }
    soma+=vendas[i]
}
console.log (maior)
console.log (soma/vendas.length)