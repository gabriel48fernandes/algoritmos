const prompt = require("prompt-sync")()
const expr= prompt( "escolha uma fruta")
switch (expr) {
    case "oranges" :
    console.log ("oranges are $0.59 a pound. ")
    break;
    case "mangoes":
    case "papayas" :
    console.log ("mangoes and papayas are $ 2.79 a pound ")
    break;
    case "bergamota":
        console.log ("a bergamota custa R$ 2.00")
    break;
    case "banana":
        console.log ("a banana custa R$ 8.00")
    default:
    console.log (" sorry, we are out os $" ,{expr})
}