const prompt = require ("prompt-sync")()
console.log 
 console.log (" ------INSUFILMES AUTO CENTER------ ")
console.log (" 1- COMPRAR PRODUTOS ")
console.log ("  2- FALAR COM SUPORTE  " )
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

console.log ( " -entrar em contado via whatsapp " )
console.log (" -reclamações ")
console.log (" -numero de contato " ) 
}

function produtomenu(){
console.log (" -insufilme garvareBlack " )
console.log (" -insufilme garvareBlack2 " )
console.log (" -insufilme cobalt " )
console.log (" -insufilme linha PRO " )
console.log (" -insufilme linha premium " )
}