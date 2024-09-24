const prompt = require ("prompt-sync")()
 console.log (" ------INSUFILMES AUTO CENTER------ ")
 console.log(" ")
console.log (" 1- COMPRAR PRODUTOS ")
console.log (" 2- FALAR COM SUPORTE  " )
console.log (" 3- FAZER DEVOLUÇÃO " )
console.log (" 4- MINHAS COMPRAS ")
const escolha= prompt(" escolha uma opção ")


switch (escolha){
    case "1":
     produtomenu()
        break

    case "2":
    falar_com_suporte()
            
        break
    case "3":
        devoluçao()
                
                break
    case "4":
          minhasCompras()          

}


// aqui criamos as funções






function devoluçao(){
console.log (" -devolver produto ")
console.log (" -produto não chegou ")
console.log (" -produto chegou errado ")
console.log (" -acompanhar devolução ")
}



function minhasCompras(){
console.log (" -ver minhas compras ")
}


function falar_com_suporte(){

console.log ( " 1-entrar em contado via whatsapp " )
console.log (" 2-reclamações ")
console.log (" 3-numero de contato " )
const suporte=prompt(" escolha uma opção ")
console.log (" voce escolheu " )
switch (suporte) {
    case "1":
        console.log (" segue o link para whatsapp  >>  ")
        break
    case "2":
        console.log (" segue o limk para reclamações: ")
        break
        case "3":
            console.log ( " segue o numero de contato : - 51 991946185 ")
            break
}




function produtomenu(){
console.log (" 1 -insufilme garvareBlack " )
console.log (" 2 -insufilme garvareBlack2 " )
console.log (" 3 -insufilme cobalt " )
console.log (" 4 -insufilme linha PRO " )
console.log (" 5 -insufilme linha premium " )
const produto=prompt("escolha um produto")
console.log(" voce escolheu: ")

    switch (produto){

    case "1":
        console.log (" INSUFILME GARVAREBLACK ")
        break

    case "2":
        console.log (" INSUFILME GARVAREBLACK 2 ")
        break
    case "3":
        console.log (" INSUFILME COBALT ")
        break
    case "4":  
    console.log (" INSUFILME LINHA PRO ")
    break
    case "5":
        console.log (" INSUFILME LINHA PREMIUM ")

    }
    }
