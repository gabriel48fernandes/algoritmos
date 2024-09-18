const prompt = require("prompt-sync")()
function calculadora() {

    const calcular= prompt("digite a operaçao")
    const num1 = parseInt(prompt (" digite o primeiro numero"))
    const num2 = parseInt(prompt ("digite o segundo numero"))
    switch (calcular) {
        case "+" :
        const soma= num1 + num2
        console.log ("a soma é:" , soma)  
    break
        case "-" :
            const sub = num2 - num1
            console.log ("a subtraçao é " , sub)
    break

        case "*" :
            const mult= num1 * num2
            console.log (" a multiplicação dos numeros são:" , mult)
    break
        case "/" :
            if (num2 ==0)
                console.log ("valor invalido")
            else
            {
                const divisao= num1 / num2
                console.log (" a divisao dos numeros são : " , divisao)

         }
    break 
    default:
        console.log ("calculo invalido " , calcular)
        calculadora()
    }
}
calculadora()

