const prompt=require("prompt-sync")()
 const numero= prompt("digite o numero de qual tabuada voce quer ")
 for  (let i = 1; i <=10; i++) 
    {
        console.log(numero + "x" , i ,"=" , numero * i)
    
    }