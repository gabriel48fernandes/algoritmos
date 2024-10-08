let listacompras = ["maça", "feijão"];
//------------------------------------------------------
//inserir

//no fim
listacompras.push("arroz"); // Adiciona no fim
listacompras.push("vodka kysla")
//listacompras.push("1-arroz"); // Adiciona no fim
//listacompras.push("2-arroz"); // Adiciona no fim
//listacompras.push("deletar"); // Adiciona no fim
//console.log(listacompras); 
 

//------------------------------------------------------
//deletar 
listacompras.pop(); // Remove o último elemento
//console.log(listacompras); 

//------------------------------------------------------
//tamanho do array
//console.log(listacompras.length); 

//------------------------------------------------------
//pesquisa item , -1 quando nao acha ou o retona o nro do indice
//console.log(listacompras.indexOf("vodka kysla"));


//------------------------------------------------------
//forEach(): Executa uma função para cada elemento do array
//mostrar os itens, o indice o e tamanho
listacompras.forEach(mostrar) ;

 function mostrar(elemento, indice){
   console.log(elemento, indice);
  };

  
 

 console.log(listacompras) 
//------------------------------------------------------
//ordenação alfabetica
  console.log(  listacompras.sort()); 


//----------------------------------------
//exemplo de delção de um item especifico:
let array = [1, 2, 3, 4, 5];
let index = 2;  // Índice do item que você deseja remover (no caso, o número 3)
array.splice(index, 1);  // O segundo argumento indica quantos itens serão removidos