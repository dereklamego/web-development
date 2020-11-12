var appElement = document.getElementById('app');

var titulo = document.createElement('h1');
var inputText = document.createElement('input');
var btnGerar = document.createElement('button');
var textTit = document.createTextNode("POST-IT");
var textBtnGerar = document.createTextNode("Gerar post-it");

inputText.setAttribute('type', 'text')
inputText.setAttribute('id', 'inputText')
inputText.setAttribute('name', 'text')
inputText.setAttribute('placeholder', 'Escreva aqui seu lembrete')

titulo.appendChild(textTit);
btnGerar.appendChild(textBtnGerar);
appElement.appendChild(titulo);
appElement.appendChild(inputText);
appElement.appendChild(btnGerar);

btnGerar.onclick = function(){
    var boxPostit = document.createElement('div');
    var frase = document.createElement('p');
    var textPostit = document.createTextNode(inputText.value )

    boxPostit.style.width = '100px';
    boxPostit.style.height = '100px';
    boxPostit.style.backgroundColor = '#efd6ac';
    boxPostit.style.boxShadow =' 2px 2px 5px #000000';
    inputText.value = ""
    frase.appendChild(textPostit);
    boxPostit.appendChild(frase);
    
    appElement.appendChild(boxPostit); 
   
}

document.body.style.background = 'rgb(199, 128, 110)'//rgb()
appElement.style.margin = '100px 500px'
appElement.style.fontFamily = 'Arial, Helvetica, sans-serif'
appElement.style.textAlign = 'center'
titulo.style.color = "white";
