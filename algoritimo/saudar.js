const prompt=require("prompt-sync")()
const nome= prompt(" qual seu nome ? ")
const horario= prompt(" horario atual ? ")
function saudacaoPorHorario(hora) {
    if (hora < 12) {
        
        re
return "Bom dia!";
    } else if (hora < 18) {
        return "Boa tarde!";
    } else {
        
 
return "Boa noite!";
    }
}

// Solicita a hora ao usuário e exibe a saudação
const hora = parseInt(prompt("Digite a hora (0-23):"));

if (!isNaN(hora) && hora >= 0 && hora <= 23) {
    alert(saudacaoPorHorario(hora));
} else {
    
   
alert("Por favor, insira uma hora válida entre 0 e 23.");
}
