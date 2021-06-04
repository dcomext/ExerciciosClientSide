/*Até 7 km/h acima da velocidade permitida pela via informar:
Advertência - Acima de 7 km/h.
Até 20% informar: Autuado. Infração Grave
- Entre 20% e 50% informar. Autuado. Infração gravíssima.
-Acima de 50% informar. Autuado. Infração gravíssima.
Penalidade de suspensão do direito de dirigir.*/

let inputvmaxpermitida = document.querySelector("#velmax");
let inputvcarro = document.querySelector("#velcarro");
let valoresinfracao = document.querySelector("#resultadoinfracao");
console.log(valoresinfracao);
let alterarpontuacao = document.querySelector("#mudancapontuacao");

function calculaInfracao() {

    let vmaxp = parseFloat(inputvmaxpermitida.value);
    let vcarro = parseFloat(inputvcarro.value);

    let advertencia = vmaxp + 7;
    let grave = vmaxp * 1.2;
    let gravissima = vmaxp * 1.5

    if (vcarro <= advertencia && vcarro > vmaxp) {
        valoresinfracao.innerHTML = `<p>Você recebeu uma Advertência por trafegar na via
                    acima da velocidade permitida em 7km/h</p>`
    }

    else if (vcarro <= grave && vcarro > advertencia) {
        valoresinfracao.innerHTML = `<p> Infração Grave. Você foi autuado por trafegar na via
                     em até 20% acima da velocidade permitida</p>`
    }

    else if (vcarro <= gravissima && vcarro > grave) {
        valoresinfracao.innerHTML = `<p>Infração Gravíssima. Você foi autuado por trafegar na via
                     entre 20% e 50% acima da velocidade permitida</p>`
    }

    else if (vcarro > gravissima) {
        valoresinfracao.innerHTML = `<p>Infração Gravíssima. Suspensão do direito de 
            dirigir. Você foi autuado por trafegar na via em 50% acima da velocidade permitida`
    }

    else {
        valoresinfracao.innerHTML = `<p>Infração Gravíssima. Suspensão do direito de 
            dirigir. Você foi autuado por trafegar na via em 50% acima da velocidade permitida`
    }

}

function atribuirpontuacao() {
    alterarpontuacao.innerHTML = `<br>
            <label for="nomecondutor">Informe o nome do condutor</label>
            <input type="text" id="nomecondutor">
            <br>
            <label for="pontuacao">Informe o número de habilitação</label>
            <input type="number" id="numhabilitacao">
            <button type="button" value="Enviar Dados" onclick="imprimirdados()">Enviar dados</button>`

}
