const prompt=require("prompt-sync")()
const paises = [
    ["Brasil", 213993437],
    ["Estados Unidos", 331002651],
    ["China", 1439323776],
    ["Índia", 1380004385],
    ["Japão", 126476461],
    ["Alemanha", 83783942],
    ["França", 65273511],
    ["Reino Unido", 67886011],
    ["Itália", 60244639],
    ["Canadá", 37742154]
]
let paisComMaishabitantes = 0;
let maiorPopulacao = 0;

for (let i = 0; i < paises.length; i++) {
    
    for (let j = 0; j < paises[i].length; j++) { 
        if (paises[i][1] > maiorPopulacao) {
            maiorPopulacao = paises[i][1];
            
            paisComMaishabitantes = paises[i] [0]
        } 
    }
}

console.log("Maior população: " + paisComMaishabitantes + " (" + maiorPopulacao + " habitantes)")
console.table(paises)
console.log ("adicionar pais")
let adicionaPais= prompt("digite o pais que deseja adicionar")
let adicionaHabitantes= parseInt (prompt("quantos habitates tens nesse pais"))
let novoPais = [adicionaPais, adicionaHabitantes]
paises.push(novoPais)
paises.sort((a,b)=>b[1]-a[1])
console.table (paises)
console.log ("pesquisar pais")
let pesquisarpais=prompt("digite qual pais voce quer pesquisar ")
let encontrado =false
for (let i=0; i<paises.length; i++){
    if (paises[i][0].toLowerCase() === pesquisarPais.toLowerCase()) {
    }
}