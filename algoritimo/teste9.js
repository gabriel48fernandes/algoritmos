const prompt=require("prompt-sync")()
let cadastro = []; // Array que armazena os itens cadastrados

// Função para mostrar o menu e pegar a escolha do usuário
function mostrarMenu() {
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "1. Inserir item\n" +
        "2. Deletar item\n" +
        "3. Mostrar itens cadastrados\n" +
        "4. Mostrar quantidade de itens\n" +
        "5. Sair"
    );
    return opcao;
}

// Função para inserir um novo item no cadastro
function inserirItem() {
    let item = prompt("Digite o nome do item que deseja cadastrar:");
    cadastro.push(item);
    console.log("Item '" + item + "' foi adicionado.");
}

// Função para deletar um item específico do cadastro
function deletarItem() {
    let item = prompt("Digite o nome do item que deseja deletar:");
    let index = cadastro.indexOf(item);

    if (index !== -1) {
        cadastro.splice(index, 1); // Remove o item encontrado
        console.log("Item '" + item + "' foi removido.");
    } else {
        console.log("Item não encontrado.");
    }
}

// Função para mostrar todos os itens cadastrados
function mostrarItens() {
    if (cadastro.length === 0) {
        console.log("Nenhum item cadastrado.");
    } else {
        console.log("Itens cadastrados:\n" + cadastro.join(", "));
    }
}

// Função para mostrar a quantidade de itens cadastrados
function mostrarQuantidade() {
    console.log("Quantidade de itens cadastrados: " + cadastro.length);
}

// Loop principal do menu
function executarCadastro() {
    let opcao = "";

    while (opcao !== "5") {
        opcao = mostrarMenu();

        switch (opcao) {
            case "1":
                inserirItem();
                break;
            case "2":
                deletarItem();
                break;
            case "3":
                mostrarItens();
                break;
            case "4":
                mostrarQuantidade();
                break;
            case "5":
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida! Escolha novamente.");
                break;
        }
    }
}

// Executa o sistema de cadastro
executarCadastro();
