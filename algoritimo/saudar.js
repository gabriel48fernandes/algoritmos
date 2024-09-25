const prompt=require("prompt-sync")()
function saudar(nome, hora){}

const nome= prompt(" qual seu nome ? ")


const hora= parseInt(prompt(" horario atual ? "))

 if (hora>=5 && hora < 12)
 {
     console.log (" bom dia ", nome)
 }
if (hora >12 && hora <=18)
{    
console.log ("boa tarde" , nome)
}
if (  
    (hora >18 && hora <=23)
     ||
    (hora > 0 && hora <= 4) ){
    console.log ("boa noite " , nome)
}