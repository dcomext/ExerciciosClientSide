var jogador = 0
var computador = 0
var jogadorpontos = 0
var computadorpontos = 0
function joquempo(escolha){
   
    jogador=escolha;
    computador= Math.floor((Math.random() * (3 -1+1)))+1;
        if(jogador==1 && computador==1){

            document.getElementById('resultado').innerHTML="Empate"
            document.getElementById('pedrapc').style.border="2px solid #EB405B"
            document.getElementById("tesourapc").style.border="none"
            document.getElementById("papelpc").style.border="none"
        }
        else if(jogador==1 && computador==2){
            document.getElementById('resultado').innerHTML="Você perdeu!"
            computadorpontos++;
            document.getElementById('computadorpontoss').innerHTML= computadorpontos
            document.getElementById('papelpc').style.border="2px solid #EB405B"
            document.getElementById("tesourapc").style.border="none"
            document.getElementById("pedrapc").style.border="none"
        }
        else if(jogador==1 && computador==3){
            document.getElementById('resultado').innerHTML="Você venceu!"
            jogadorpontos++;
            document.getElementById('jogadorpontoss').innerHTML= jogadorpontos
            document.getElementById('tesourapc').style.border="2px solid #EB405B"
            document.getElementById("papelpc").style.border="none"
            document.getElementById("pedrapc").style.border="none"
        }
        else if(jogador==2 && computador==1){
            document.getElementById('resultado').innerHTML="Você venceu!"
            jogadorpontos++;
            document.getElementById('jogadorpontoss').innerHTML= jogadorpontos
            document.getElementById('pedrapc').style.border="2px solid #EB405B"
            document.getElementById("tesourapc").style.border="none"
            document.getElementById("papelpc").style.border="none"
        }
        else if(jogador==2 && computador==2){
            document.getElementById('resultado').innerHTML="Empate"
            document.getElementById('papelpc').style.border="2px solid #EB405B"
            document.getElementById("tesourapc").style.border="none"
            document.getElementById("pedrapc").style.border="none"
        }
        else if(jogador==2 && computador==3){
            document.getElementById('resultado').innerHTML="Você perdeu!"
            computadorpontos++;
            document.getElementById('computadorpontoss').innerHTML= computadorpontos
            document.getElementById("tesourapc").style.border="2px solid #EB405B"
            document.getElementById("papelpc").style.border="none"
            document.getElementById("pedrapc").style.border="none"
        }
        else if(jogador==3 && computador==1){
            document.getElementById('resultado').innerHTML="Você perdeu!"
            computadorpontos++;
            document.getElementById('computadorpontoss').innerHTML= computadorpontos
            document.getElementById("pedrapc").style.border="2px solid #EB405B"
            document.getElementById("tesourapc").style.border="none"
            document.getElementById("papelpc").style.border="none"
        }
        else if(jogador==3 && computador==2){
            document.getElementById('resultado').innerHTML="Você venceu"
            jogadorpontos++;
            document.getElementById('jogadorpontoss').innerHTML= jogadorpontos
            document.getElementById("papelpc").style.border="2px solid #EB405B"
            document.getElementById("tesourapc").style.border="none"
            document.getElementById("pedrapc").style.border="none"
        }
        else if(jogador==3 && computador==3){
            document.getElementById('resultado').innerHTML="Empate"
            document.getElementById("tesourapc").style.border="2px solid #EB405B"
            document.getElementById("papelpc").style.border="none"
            document.getElementById("pedrapc").style.border="none"
        }
       if(jogador==1){
        document.getElementById('pedra').style.border="2px solid #5058D4"
        document.getElementById("papel").style.border="none"
        document.getElementById("tesoura").style.border="none"
       }
       else if(jogador==2){
        document.getElementById('papel').style.border="2px solid #5058D4"
        document.getElementById("tesoura").style.border="none"
        document.getElementById("pedra").style.border="none"
       }
       else if(jogador==3){
        document.getElementById('tesoura').style.border="2px solid #5058D4"
        document.getElementById("papel").style.border="none"
        document.getElementById("pedra").style.border="none"
       }
    
}