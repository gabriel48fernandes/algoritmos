let notas = [
    [8.5, 7.0, 9.0], // Aluno 1
    [6.5, 5.0, 10.0], // Aluno 2
    [7.5, 6.5, 9.0]  // Aluno 3
];

let somaTotal = 0;
let totalNotas = 0;

for (let i = 0; i < notas.length; i++) {
    console.log("Notas do Aluno " + (i +1) + ":");
    for (let j = 0; j < notas[i].length; j++) {
        console.log("Nota " + (j + 1) + ": " + notas[i][j]);
        somaTotal += notas[i][j];
        totalNotas++
    }
    console.log("terminando o aluno" , i+1, somaTotal)
    let media = somaTotal / totalNotas
    somaTotal =0
    totalNotas = 0
console.log("media das notas:" + media)}