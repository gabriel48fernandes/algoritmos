function limpacpf (cpf){
return cpf.replaceAll(".", "").replaceAll("-", "")
//return cpf.replaceAll (/\D/g, '')
}
const cpforiginal= "006.380.400-30"
const cpflimpo= limpacpf(cpforiginal)
console.log ("voce digitou ", cpforiginal)
console.log ( cpflimpo)
