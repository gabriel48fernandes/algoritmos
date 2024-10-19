const prompt = require("prompt-sync")()

// Lista de países e populações
let paisesPopulacao = [
    {nomePais: "Brasil", populaçao: 213993437},
    {nomePais: "Estados Unidos", populaçao: 331002651},
    {nomePais: "China", populaçao: 1439323776},
    {nomePais: "Índia", populaçao: 1380004385},
    {nomePais: "Japão", populaçao: 126476461},
    {nomePais: "Alemanha", populaçao: 83783942},
    {nomePais: "França", populaçao: 65273511},
    {nomePais: "Reino Unido", populaçao: 67886011},
    {nomePais: "Itália", populaçao: 60244639},
    {nomePais: "Canadá", populaçao: 37742154}
];

// Função para encontrar o país com maior população
function paisComMaiorPopulacao() {
    let paisComMaishabitantes = "";
    let maiorPopulacao = 0;

    for (let i = 0; i < paisesPopulacao.length; i++) {
        if (paisesPopulacao[i].populaçao > maiorPopulacao) {
            maiorPopulacao = paisesPopulacao[i].populaçao; // Corrigido para atribuir a população
            paisComMaishabitantes = paisesPopulacao[i].nomePais;
        }
    }
    console.log("Maior população: " + paisComMaishabitantes + " (" + maiorPopulacao + " habitantes)");
}

function adicionarPais() {
    let nomePais = prompt("Digite o nome do país que deseja adicionar: ");
    let habitantes = parseInt(prompt("Digite a população do país: "));
    let paisExiste = paisesPopulacao.some(pais => pais.nomePais.toLowerCase() === nomePais.toLowerCase());

    if (paisExiste) {
        console.log("O país " + nomePais + " já está cadastrado");
    } else {
        // Adiciona o país na lista de populações
        paisesPopulacao.push({nomePais: nomePais, populaçao: habitantes});
        console.log("País " + nomePais + " com " + habitantes + " habitantes foi adicionado.\n");
    }
    
    // Ordena a lista de países por população em ordem decrescente
    paisesPopulacao.sort((a, b) => b.populaçao - a.populaçao);
}

function excluirPais() {
    let paisApagado = prompt("Qual país você deseja excluir? ");
    let paisIndex = paisesPopulacao.findIndex(pais => pais.nomePais.toLowerCase() === paisApagado.toLowerCase());

    if (paisIndex !== -1) {
        paisesPopulacao.splice(paisIndex, 1);
        console.log("País " + paisApagado + " excluído com sucesso.");
    } else {
        console.log("País não encontrado.");
    }
}

// Função para pesquisar por população
function pesquisarPais() {
    let nomePais = prompt("Digite o nome do país que deseja pesquisar: ");
    let encontradoPopulacao = false;

    // Pesquisa na lista de populações
    for (let i = 0; i < paisesPopulacao.length; i++) {
        if (paisesPopulacao[i].nomePais.toLowerCase() === nomePais.toLowerCase()) {
            console.log("País: " + paisesPopulacao[i].nomePais + ", População: " + paisesPopulacao[i].populaçao);
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
        console.log("\n--- MENU ---")
        console.log("1. Adicionar um país")
        console.log("2. Excluir país")
        console.log("3. Pesquisar um país")
        console.log("4. Mostrar o país com maior população")
        console.log("5. Mostrar todos os países e populações em ordem decrescente")
        console.log("6. Sair")

        opcao = prompt("Digite o número da opção desejada: ")

        switch(opcao) {
            case "1":
                adicionarPais();
                break;
            case "2":
                excluirPais();
                break;
            case "3":
                pesquisarPais();
                break;
            case "4":
                paisComMaiorPopulacao();
                break;
            case "5":
                console.table(paisesPopulacao);
                break;
            case "6":
                console.log("Saindo do programa.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.\n");
        }
    } while (opcao !== "6");
}

// Executa o menu
menu();
