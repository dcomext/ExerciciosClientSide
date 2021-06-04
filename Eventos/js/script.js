let btnGerar = document.querySelector("#btnGerar");
let numeroSorte1 = documento.querySelector("numeroSorte1");
let numeroSorte2 = documento.querySelector("numeroSorte2");
let numeroSorte3 = documento.querySelector("numeroSorte3");
let coordenadasMouse = document.querySelector("coordenadas-mouse");

btnGerar.addEventListener("click", (event) => {
    event.preventDefault();
    numeroSorte1.textContent = geraNumeroAleatorio();
    numeroSorte1.textContent = geraNumeroAleatorio();
    numeroSorte1.textContent = geraNumeroAleatorio();
    console.log(event.target);

    Math.round(Math.random() * 1000);
    Math.floor
    Math.ceil

});
document.addEventListener("click", (event) => {
    let pAleatorio = document.createElement("a");
    pAleatorio.textContent = `O posicionamento do mouse no eixo é ${event.clientX} 
    e no eixo é ${event.clientY}`;
    coordenadasMouse.appendChild(pAleatorio);
    console.log(event.target);
});


function geraNumeroAleatorio() {
    return Math.round(Math.random() * 1000);
}