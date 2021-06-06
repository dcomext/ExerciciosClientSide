let seletorAbacaxi = null;
let seletorMelancia = null;
let seletorCoco = null;
let Abacaxi = null;
let Melancia = null;
let Coco = null;
let codigoAbacaxi = null;
let codigoMelancia = null;
let codigoCoco = null;
let quantidadeAbacaxi = null;
let quantidadeMelancia = null;
let quantidadeCoco = null;
let preçoAbacaxi = null;
let precoMelancia = null;
let precoCoco = null;
let subtotalAbacaxi = null;
let subtotalMelancia = null;
let subtotalCoco = null;
let totalPagamento = null;
let dataVenda = null;
let horaVenda = null;
let Vendedor = null;
let cliente = null;
let btnGerarPedido = null;
let btnImprimir = null;
let btnLimpar = null;
let observacoes = null;

let frutasList = []

window.addEventListener("load", () => {
    inicializardadosentrada()
    handlerGerarPedido()


});

function handlerGerarPedido() {
    btnGerarPedido.addEventListener("click", (event) => {
        event.preventDefault()

        geraArrayFrutas();
        geraObjetoVenda();
        console.log(geraObjetoVenda())

    });


}

//Funcao inicializa dados de entrada
function inicializardadosentrada() {

    seletorAbacaxi = document.querySelector("#seletorabacaxi")
    seletorMelancia = document.querySelector("#seletormelancia")
    seletorCoco = document.querySelector("#seletorcoco");
    Abacaxi = document.querySelector("#Abacaxi");
    Melancia = document.querySelector("#Melancia");
    Coco = document.querySelector("#Coco");
    codigoAbacaxi = document.querySelector("#codigoabacaxi")
    codigoMelancia = document.querySelector("#codigomelancia")
    codigoCoco = document.querySelector("#codigococo");
    quantidadeAbacaxi = document.querySelector("#quantidadeabacaxi");
    quantidadeMelancia = document.querySelector("#quantidademelancia")
    quantidadeCoco = document.querySelector("#quantidadecoco")
    precoAbacaxi = document.querySelector("#precoabacaxi");
    precoMelancia = document.querySelector("#precomelancia")
    precoCoco = document.querySelector("#precococo");
    subtotalAbacaxi = document.querySelector("#subtotal_abacaxi")
    subtotalMelancia = document.querySelector("#subtotal_melancia")
    subtotalCoco = document.querySelector("#subtotal_coco");
    totalPagamento = document.querySelector("#total_pagamento")
    dataVenda = document.querySelector("#data_venda");
    horaVenda = document.querySelector("#hora");
    Vendedor = document.querySelector("#vendedor");
    cliente = document.querySelector("#cliente");
    btnGerarPedido = document.querySelector("#btngerar_pedido");
    console.log(btnGerarPedido);
    btnImprimir = document.querySelector("#btnimprimir");
    btnLimpar = document.querySelector("#btnreset");
    observacoes = document.querySelector("#observacoes");

}


function validaCamposDeEntrada() {
    return codigoAbacaxi.value !== ""
        && quantidadeAbacaxi.value !== "" && quantidadeAbacaxi.value > 0
        && precoAbacaxi.value !== "" && precoAbacaxi.value > 0
        && codigoMelancia.value !== ""
        && quantidadeMelancia.value !== "" && quantidadeMelancia.value > 0
        && precoMelancia.value !== "" && precoMelancia.value > 0
        && codigoCoco.value !== ""
        && quantidadeCoco.value !== "" && quantidadeCoco.value > 0
        && precoCoco.value !== "" && precoCoco.value > 0

}

function geraArrayFrutas() {
    const objAbacaxi = {
        nome: Abacaxi.textContent,
        codigo: codigoAbacaxi.value,
        quantidade: quantidadeAbacaxi.value,
        preco: precoAbacaxi.value,
        subtotal: subtotalAbacaxi.textContent,
        isChecked: seletorAbacaxi.checked
    }

    const objMelancia = {
        nome: Melancia.textContent,
        codigo: codigoMelancia.value,
        quantidade: quantidadeMelancia.value,
        preco: precoMelancia.value,
        subtotal: subtotalMelancia.textContent,
        isChecked: seletorMelancia.checked
    }

    const objCoco = {
        nome: Coco.textContent,
        codigo: codigoCoco.value,
        quantidade: quantidadeCoco.value,
        preco: precoCoco.value,
        subtotal: subtotalCoco.textContent,
        isChecked: seletorCoco.checked
    }

    frutasList.push(objAbacaxi, objMelancia, objCoco);
    console.log(frutasList);

}

function geraObjetoVenda() {
    const venda = {
        frutas: frutasList,
        dataVenda: dataVenda.value,
        horaVenda: horaVenda.value,
        vendedor: Vendedor.value,
        cliente: cliente.value,
        observacoes: observacoes.value

    };
    return venda
}

function Render() {



}

