
console.log (" SELECT THE DESIRED LANGUAGE ")
console.log (" 1 = PORTUGUES ")
console.log (" 2 = INGLES ")
console.log (" 3 = ESPANHOL" )
console.log (" 4 = FRANÇES")
const prompt = require("prompt-sync")()
const idiomas= prompt(" escolha um idioma")
switch (idiomas) {
case "1":
    console.log ("idioma configurado para portugues")
break
case "2":
    console.log ("language set to english")
break
case "3":
    console.log ("idioma configurado a espanõl")
break
case "4":
    console.log ("langue definie sur le français")
break
    default:
    console.log ("idioma não suportado", idiomas)

}
