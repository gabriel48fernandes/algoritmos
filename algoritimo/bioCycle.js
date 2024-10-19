const prompt = require("prompt-sync")()

// Armazenamento dos dados (em memória)
let pesagens = [];
let palestras = [];

// Preços por tipo de material
const precoPorMaterial = {
    "Papel": 0.25,    // preço por kg para papel
    "Plástico": 4.0, // preço por kg para plástico
    "Vidro": 2.5     // preço por kg para vidro
};

// Função para registrar pesagem de resíduos
function registrarPesagem() {
    console.log("\n-- Registrar Pesagem --");
    let tipoMaterial = prompt("Digite o tipo de material (Papel, Plástico, Vidro): ");
    let peso = parseFloat(prompt("Digite o peso (em kg): "));
    let unidade = prompt("Digite a unidade responsável pela coleta: ");

    // Verificar se o tipo de material existe no objeto de preços
    if (!precoPorMaterial[tipoMaterial]) {
        console.log("Material não reconhecido. Por favor, escolha entre 'Papel', 'Plástico' ou 'Vidro'.");
        return; // Retorna sem registrar a pesagem
    }

    // Calcular o valor bruto baseado no preço por kg do material
    let valorBruto = peso * precoPorMaterial[tipoMaterial];
    let taxaCooperativa = valorBruto * 0.2; // Deduz 20% para cooperativa
    let valorLiquido = valorBruto - taxaCooperativa;

    // Registrar pesagem no histórico
    pesagens.push({
        tipoMaterial,
        peso,
        unidade,
        valorBruto,
        taxaCooperativa,
        valorLiquido,
        data: new Date().toLocaleString()
    });

    console.log(`Pesagem registrada: ${peso}kg de ${tipoMaterial} - Valor Bruto: R$${valorBruto} - Valor Líquido: R$${valorLiquido}`);
}

// Função para visualizar histórico de pesagens
function visualizarHistorico() {
    console.log("\n-- Histórico de Pesagens --");
    if (pesagens.length === 0) {
        console.log("Nenhuma pesagem registrada.");
    } else {
        pesagens.forEach((pesagem, index) => {
            console.log(`#${index + 1} - Tipo: ${pesagem.tipoMaterial}, Peso: ${pesagem.peso}kg, Valor Líquido: R$${pesagem.valorLiquido}`);
        });
    }
}

// Função para agendar palestra
function agendarPalestra() {
    console.log("\n-- Agendar Palestra --");
    let tema = prompt("Digite o tema da palestra: ");
    let data = prompt("Digite a data (DD/MM/AAAA): ");
    let hora = prompt("Digite a hora (HH:MM): ");
    let setor = prompt("Digite o setor do hospital: ");
    let palestrante = prompt("Digite o nome do palestrante: ");

    palestras.push({ tema, data, hora, setor, palestrante });

    console.log(`Palestra agendada: ${tema} em ${data} às ${hora} no setor ${setor} - Palestrante: ${palestrante}`);
}

// Função para listar as palestras agendadas
function listarPalestras() {
    console.log("\n-- Palestras Agendadas --");
    if (palestras.length === 0) {
        console.log("Nenhuma palestra agendada.");
    } else {
        palestras.forEach((palestra, index) => {
            console.log(`#${index + 1} - Tema: ${palestra.tema}, Data: ${palestra.data}, Hora: ${palestra.hora}, Setor: ${palestra.setor}, Palestrante: ${palestra.palestrante}`);
        });
    }
}

// Função para visualizar o dashboard (indicadores chave)
function dashboard() {
    console.log("\n-- Dashboard --");
    let totalPesado = pesagens.reduce((acc, pesagem) => acc + pesagem.peso, 0);
    let totalValorLiquido = pesagens.reduce((acc, pesagem) => acc + pesagem.valorLiquido, 0);

    console.log(`Total de resíduos reciclados: ${totalPesado} kg`);
    console.log(`Valor total recebido (liquido): R$${totalValorLiquido.toFixed(2)}`);
}

// Menu principal
function menu() {
    let opcao;
    do {
        console.log("\n--- MENU ---");
        console.log("1. Registrar Pesagem");
        console.log("2. Visualizar Histórico de Pesagens");
        console.log("3. Agendar Palestra");
        console.log("4. Listar Palestras Agendadas");
        console.log("5. Dashboard");
        console.log("6. Sair");

        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                registrarPesagem();
                break;
            case "2":
                visualizarHistorico();
                break;
            case "3":
                agendarPalestra();
                break;
            case "4":
                listarPalestras();
                break;
            case "5":
                dashboard();
                break;
            case "6":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida, tente novamente.");
        }
    } while (opcao !== "6");
}

// Executa o menu
menu();
