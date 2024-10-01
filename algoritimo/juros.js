let aplicaçao= 1000
let juros= 0.005
let meses=12

for (let mes=1; mes <= meses; mes++){
    aplicaçao += aplicaçao * juros
}
    console.log (" o saldo final após " + meses + " meses é R$ " + aplicaçao.toFixed(2))