let notas = [
    [8.5, 7.0, 9.0], // Notas do Aluno 1
    [6.5, 5.0, 10.0], // Notas do Aluno 2
    [7.5, 6.5, 9.0], // Notas do Aluno 3
    ];
for (let i = 0; i < notas.length; i++) {
    let soma = 0;
        for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j];
    }
    
    let media = soma / notas[i].length;
    
    
    console.log("Média do Aluno " + (i + 1) + ": " + media.toFixed(2));
}

console.table(notas);
