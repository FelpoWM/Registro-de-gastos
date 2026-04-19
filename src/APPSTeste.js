let gastos = [];

function adicionarGasto(descricao, valor) {
    if (valor <= 0) {
        console.log("Valor inválido!");
        return;
    }

    gastos.push({ descricao, valor });
    console.log("Gasto adicionado com sucesso!");
}

function listarGastos() {
    console.log("Lista de gastos:");
    gastos.forEach((gasto, index) => {
        console.log(`${index + 1}. ${gasto.descricao} - R$ ${gasto.valor}`);
    });
}

function calcularTotal() {
    const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
    console.log(`Total gasto: R$ ${total}`);
}

// Exemplo de uso
adicionarGasto("Almoço", 25);
adicionarGasto("Transporte", 10);
listarGastos();
calcularTotal();