let lista = [12, 3, 45, 7, 22];
let maiorNumero = 0
let menorNumero= 1000

for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maiorNumero) {
        maiorNumero = lista[i];
    }
    if (lista[i] < menorNumero){
        menorNumero=lista[i]
    }
}

console.log(" O maior numero é:" ,maiorNumero)
console.log("O menor numero é:" ,menorNumero)