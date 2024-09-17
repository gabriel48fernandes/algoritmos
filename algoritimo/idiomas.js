    console.log (" SELECT THE DESIRED LANGUAGE ")
    console.log (" pt = PORTUGUES ")
    console.log (" en = INGLES ")
    console.log (" es = ESPANHOL" )
    console.log (" fr = FRANÇES")
const prompt = require("prompt-sync")()
const idiomas= prompt(" escolha um idioma")
switch (idiomas) {
  case "pt":
  console.log ("idioma configurado para portugues")
  break
  case "en":
    console.log ("language set to english")
    break
    case "es":
        console.log ("idioma configurado a espanõl")
        break
        case "fr":
            console.log ("langue definie sur le français")
            break
            default:
            console.log ("idioma não suportado", idiomas)











}