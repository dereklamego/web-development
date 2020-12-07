var tabuadaEllement = document.querySelector('.tabuada');
var i=0;
function criaElemento(element){
    return document.createElement(element);
}

function inputValido(){
    if(numero.value==""){
        alert("digite um numero");
        return false;
    }else{
        return true;
    }  
}

function calcular(){
    var soma;
    if(inputValido()){
        for(i=0;i<=5;i++){
            var linha = criaElemento('li');
            var textLinha = criaElemento('p');
            soma = parseInt(numero.value)+i;
            textLinha.innerHTML =`Multiplicação: ${numero.value} x ${i} = ${numero.value*i} | Soma: ${numero.value} + ${i} = ${soma} `
            linha.appendChild(textLinha);
            tabuadaEllement.appendChild(linha);
        }
    }
}