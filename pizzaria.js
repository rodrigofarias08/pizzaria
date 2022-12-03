
//Entradas
let tamanho = document.querySelector("#tamanho")
let sabor = document.querySelector("#sabor")
let borda = document.querySelector("#borda")
let refrigerante = document.querySelector("#refrigerante")

//Botão
let fPedido = document.querySelector("#fazerPedido")

//Saídas:
let saidaPedido = document.querySelector("#saidaPedido")
let totalPagamento = document.querySelector("#totalPagamento")


//Funções

//Função para ler os campos de texto e definir o pedido do usuário.
//Imprime na tela o pedido confirmando o pedido e retorna o mesmo em forma de vetor.
const imprimirPedido = () => {
    let tam = tamanho.value
    let sab = sabor.value
    let bor = borda.value
    let ref = refrigerante.value

    saidaPedido.innerHTML = `Tamanho: ${tam}<br>
    Sabor: ${sab}<br>
    Tipo da borda: ${bor}<br>
    Refrigerante: ${ref}<br>`

    return [tam, sab, bor, ref]
}

//Função que recebe um vetor de pedido e o desestrutura em [tam, sab, bor, ref].
//Define o preço para cada quesito e o total.
//Imprime os detalhes do valor a ser cobrado.
function calcularImprimirValor (pedido) {
    let [tam, sab, bor, ref] = pedido
    let precoTam, precoSab, precoBor, precoRef

    switch (tam) {
        case "Gigante": { precoTam = 80; break}
        case "Grande": { precoTam = 60; break}
        case "Média": { precoTam = 40; break}
        case "Pequena": { precoTam = 20; break}
    }

    switch (sab) {
        case "Calabresa": { precoSab = 0; break}
        case "Frango": { precoSab = 0; break}
        case "Peperoni": { precoSab = 10; break}
        case "Portuguesa": { precoSab = 0; break}
        case "Estrogonofe": { precoSab = 0; break}
    }

    switch (bor) {
        case "Sem borda": { precoBor = 0; break}
        case "Catupiry": { precoBor = 0; break}
        case "Cheddar": { precoBor = 5; break}
        case "Chocolate": { precoBor = 5; break}
    }

    switch (ref) {
        case "Sem refrigerante": { precoRef = 0; break}
        case "Cola": { precoRef = 10; break}
        case "Guaraná": { precoRef = 8; break}
        case "Laranja": { precoRef = 8; break}
    }

    totalPagamento.innerHTML = `Preço por tamanho: R$${precoTam.toFixed(2)}<br>
    Preço adicional por sabor: R$${precoSab.toFixed(2)}<br>
    Preço adicional da borda: R$${precoBor.toFixed(2)}<br>
    Preço do Refrigerante: R$${precoRef.toFixed(2)}<br>
    Preço total: R$${(precoTam + precoSab + precoBor + precoRef).toFixed(2)}`
}

//Função executada ao clicar no botão Fazer Pedido.
//Primeiro é chamado a função que imprime e define o pedido.
//Depois é chamado a função que calcula e imprime os detalhes de pagamento.
function fazerPedido () {
    
    let pedido = imprimirPedido()
    calcularImprimirValor(pedido)
    
}

//Evento de click no botão Fazer Pedido
fPedido.addEventListener("click", fazerPedido)


