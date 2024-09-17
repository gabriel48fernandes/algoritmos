const prompt = require("prompt-sync")()
const planos= prompt( "escolha um plano")
switch (planos) {
case "basico" :
    console.log (" o plano basico tem a resolução de 480p. e custa R$49,90 ")
break
case "premium" :
     console.log ("o plano premium tem acesso a filmes/series em resolução 740p e custa R$79.90")
break
case "familia":
    console.log ("o plano familia tem acesso a fimes/series em 4k, e até 6 telas simultâneas")
    break
    default:
        console.log (" plano invalido " , planos)
}