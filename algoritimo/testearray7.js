const prompt=require("prompt-sync")()
listaSupermercado= ["maçã", "banana","leite", "pão","arroz","cerveja"]


function menu(){
    console.log ("  MENU   ")
    console.log (" ")
    console.log ("1- adicionar item ")
    console.log ("2- Listar itens")
    console.log ("3- Sair")
    const escolha= prompt(" escolha uma opção ")
    switch (escolha){
        case "1":
            console.log (" adicionar item ")
            break
        case "2":
            //console.log (listaSupermercado) 
            for (let  i=0; i< listaSupermercado.length; i++){

                console.log(listaSupermercado[i])

            

            }
            menu()
            
        break
            
        case "3":
            console.log (" Sair ")
            break
    }
}
 menu()