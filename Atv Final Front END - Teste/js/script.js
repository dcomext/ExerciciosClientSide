let seletorAbacaxi=null;
let seletorMelancia=null;
let seletorCoco=null;

let Abacaxi=null;
let Melancia=null;
let Coco=null;
let codigoAbacaxi=null;
let codigoMelancia=null;
let codigoCoco=null;
let quantidadeAbacaxi=null;
let quantidadeMelancia=null;
let quantidadeCoco=null;
let preçoAbacaxi=null;
let preçoMelancia=null;
let preçoCoco=null;
let subtotalAbacaxi=null;
let subtotalMelancia=null;
let subtotalCoco=null;

let totalPagamento=null;

let dataVenda=null;
let Vendedor=null;
let cliente=null;

let btnGerarPedido=null;
let btnImprimir=null;
let btnLimpar=null;

window.addEventListener("load",()=>{
    inicializar()
    

    
});

function inicializar(){

    seletorAbacaxi=document.querySelector("#seletorabacaxi")
    seletorMelancia=document.querySelector("#seletormelancia")
    seletorCoco=document.querySelector("#seletorcoco");
    Abacaxi=document.querySelector("#Abacaxi");
    Melancia=document.querySelector("#Melancia");
    Coco=document.querySelector("#Coco");
    codigoAbacaxi=document.querySelector("#codigoabacaxi")
    codigoMelancia=document.querySelector("#codigomelancia")
    codigoCoco=document.querySelector("#codigococo");
    quantidadeAbacaxi=document.querySelector("#quantidadeabacaxi");
    quantidadeMelancia=document.querySelector("#quantidademelancia")
    quantidadeCoco=document.querySelector("#quantidadecoco")
    preçoAbacaxi=document.querySelector("#precoabacaxi");
    preçoMelancia=document.querySelector("#precomelancia")
    preçoCoco=document.querySelector("#precococo");
    subtotalAbacaxi=document.querySelector("#subtotal_abacaxi")
    subtotalMelancia=document.querySelector("#subtotal_melancia")
    subtotalCoco=document.querySelector("#subtotal_coco");
    totalPagamento=document.querySelector("#total_pagamento")
    dataVenda=document.querySelector("#data_venda");
    Vendedor=document.querySelector("#vendedor");
    cliente=document.querySelector("#cliente");
    btnGerarPedido=document.querySelector("#btn_gerarpedido");
    btnImprimir=document.querySelector("#btnimprimir");
    btnLimpar=document.querySelector("#btnreset");
    
}

btnGerarPedido.addEventListener("click", ()=>{


var car = {type:"Fiat", model:"500", color:"white"};

});