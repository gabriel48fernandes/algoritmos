const prompt=require("prompt-sync")()
const nome= prompt(" qual seu nome ? ")
const horario= prompt(" horario atual ? ")

function saudacao(hora, nome) {
    const mensagem = (hora >= 6 && hora < 12) ? "Bom dia" :
                     (hora >= 12 && hora < 18) ? "Boa tarde" : 
                     
             

   
"Boa noite";
    
    
console.log(`${mensagem}, ${nome}!`);
}


}
// Exemplo de uso
const horaAtual = new Date().getHours();
const nomeUsuario = "João";
