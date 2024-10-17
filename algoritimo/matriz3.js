const prompt = require("prompt-sync")();

// Lista de países e populações
let paisesPopulacao = [
    ["Brasil", 213993437],
    ["Estados Unidos", 331002651],
    ["China", 1439323776],
    ["Índia", 1380004385],
    ["Japão", 126476461],
    ["Alemanha", 83783942],
    ["França", 65273511],
    ["Reino Unido", 67886011],
    ["Itália", 60244639],
    ["Canadá", 37742154]
];

// Função para encontrar o país com maior população
function paisComMaiorPopulacao() {
    let paisComMaishabitantes = "";
    let maiorPopulacao = 0;

    for (let i = 0; i < paisesPopulacao.length; i++) {
        if (paisesPopulacao[i][1] > maiorPopulacao) {
            maiorPopulacao = paisesPopulacao[i][1];
            paisComMaishabitantes = paisesPopulacao[i][0];
        }
    }
    console.log("Maior população: " + paisComMaishabitantes + " (" + maiorPopulacao + " habitantes)");
}

// Função para adicionar país (apenas população)
function adicionarPais() {
    let nomePais = prompt("Digite o nome do país que deseja adicionar: ");
    let habitantes = parseInt(prompt("Digite a população do país: "));

    // Adiciona o país na lista de populações
    paisesPopulacao.push([nomePais, habitantes]);

    // Ordena a lista de países por população em ordem decrescente
    paisesPopulacao.sort((a, b) => b[1] - a[1]);

    console.log("País " + nomePais + " com " + habitantes + " habitantes foi adicionado.\n");
}

// Função para pesquisar por população
function pesquisarPais() {
    let nomePais = prompt("Digite o nome do país que deseja pesquisar: ");
    let encontradoPopulacao = false;

    // Pesquisa na lista de populações
    for (let i = 0; i < paisesPopulacao.length; i++) {
        if (paisesPopulacao[i][0].toLowerCase() === nomePais.toLowerCase()) {
            console.log("País: " + paisesPopulacao[i][0] + ", População: " + paisesPopulacao[i][1]);
            encontradoPopulacao = true;
            break;
        }
    }

    if (!encontradoPopulacao) {
        console.log("País " + nomePais + " não encontrado.\n");
    }
}

// Menu interativo
function menu() {
    let opcao;
    do {
        console.log("\n--- MENU ---");
        console.log("1. Adicionar um país");
        console.log("2. Pesquisar um país");
        console.log("3. Mostrar o país com maior população");
        console.log("4. Mostrar todos os países e populações");
        console.log("5. Sair");

        opcao = prompt("Digite o número da opção desejada: ");

        switch(opcao) {
            case "1":
                adicionarPais();
                break;
            case "2":
                pesquisarPais();
                break;
            case "3":
                paisComMaiorPopulacao();
                break;
            case "4":
                // Ordena a lista de países por população em ordem decrescente
                paisesPopulacao.sort((a, b) => b[1] - a[1]);
                console.table(paisesPopulacao);
                break;
            case "5":
                console.log("Saindo do programa.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.\n");
        }
    } while (opcao !== "5");
}

// Executa o menu
menu();
