const prompt = require("prompt-sync")();

let menu = ''
let listafrutas = ["maçã", "banana", "mamao", "laranja", "uva"]
function listar(elemento){
    console.log(elemento)
}

function exibirMenu(){
    console.log("1. Adicionar Frutas")
    console.log("2. Deletar Frutas")
    console.log("3. Ordenar Frutas em Ordem Alfabetica")
    console.log("4. listar Frutas:")
    console.log("5. Total de Frutas: ")
    console.log("6. Sair")

    menu = prompt(" Escolha uma opção: ")
            console.log("---------------------")


    switch (menu) {

        case '1':
            console.log("Adicionar Frutas")
            let adicionar =  prompt("adicionar Fruta: ")
            listafrutas.push(adicionar);
                console.log(listafrutas)
            break;

        case '2':
            
        const deletar = prompt("qual fruta voce quer deletar?")
            let index = listafrutas.indexOf(deletar) 
            if (index !== -1) {
                listafrutas.splice(index,1)
                console.log ("fruta",  deletar , "deletada")
            }else{ 
                console.log (deletar, "nao esta na lista")
        
            }


            break;
        case '3':

            console.log(listafrutas.sort())
            break;
        case '4':
            
            listafrutas.forEach(listar)
                break;
        case '5':
            console.log(listafrutas.length);

        case '6':
            console.log("6.Sair")

        default:
            
    }

}
while(menu !== "6"){
    exibirMenu()
}