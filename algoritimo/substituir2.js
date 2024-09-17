const prompt=require("prompt-sync")()
const texto= prompt("digite o texto desejado - ")
console.log (" escolha uma opção ")
console.log (" [1]- exibir quantos caracteres tem no texto ")
console.log ( "[2]- substituir palavra ")
const opção= prompt (" digite a opção desejada ")
switch (opção){
    case "1":
        console.log (" o texto possui " + texto.length + "caracteres" )
        break
    case "2":
        const troca= prompt(" digite a palavra que deseja trocar ")
        const substituir=prompt (" digite a palavra que vai substituir ")
        const textoModificado= texto.replaceAll (troca , substituir)
        console.log (" texto original: " + texto + "\ntextoModificado " + textoModificado )
        break
        default:
            console.log (" digite uma opção valida ")
}
