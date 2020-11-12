var appElement = document.getElementById("app");

var titulo = document.createElement('h1') 
var inputNome = document.createElement('input')
var inputLink = document.createElement('input')
var inputVitoria = document.createElement('input')
var inputDerrota = document.createElement('input')
var inputEmpate = document.createElement('input')
var btnAdd = document.createElement("button")

var tableTime =  document.createElement('table')

var linha= document.createElement('tr')
var thTime = document.createElement('th');
var thVitoria =  document.createElement('th');
var thDerrota = document.createElement('th');
var thEmpate = document.createElement('th');
var thPonto = document.createElement('th');

var textTit = document.createTextNode("TABELA DO BRASILEIRÃO")
titulo.appendChild(textTit);

titulo.setAttribute('id', 'titulo')
tableTime.setAttribute('id','tabela')
inputNome.setAttribute('type', 'text')
inputNome.setAttribute('class', 'inputs')
inputNome.setAttribute('id', 'nome')
inputNome.setAttribute('name', 'time')
inputNome.setAttribute('placeholder', 'Nome do time')


inputLink.setAttribute('id', 'linktime')
inputLink.setAttribute('type', 'text')
inputLink.setAttribute('class', 'inputs')
inputLink.setAttribute('id', 'linktime')
inputLink.setAttribute('name','link')
inputLink.setAttribute('placeholder','Site do time');



inputVitoria.setAttribute('type', 'number')
inputVitoria.setAttribute('id', 'vitoria')
inputVitoria.setAttribute('name', 'vitoria')
inputVitoria.setAttribute('class', 'inputs')
inputVitoria.setAttribute('placeholder', 'Numero de vitorias')

inputDerrota.setAttribute('type', 'number')
inputDerrota.setAttribute('id', 'derrota')
inputDerrota.setAttribute('name', 'empate')
inputDerrota.setAttribute('class', 'inputs')
inputDerrota.setAttribute('placeholder', 'Numero de derrotas')

inputEmpate.setAttribute('type', 'number')
inputEmpate.setAttribute('id', 'empate')
inputEmpate.setAttribute('name', 'empate')
inputEmpate.setAttribute('class', 'inputs')
inputEmpate.setAttribute('placeholder', 'Numero de empates')

var textBtn = document.createTextNode("Adcionar");
btnAdd.appendChild(textBtn);

appElement.appendChild(titulo);

appElement.appendChild(inputNome);
appElement.appendChild(inputLink);
appElement.appendChild(inputVitoria);
appElement.appendChild(inputEmpate);
appElement.appendChild(inputDerrota);
appElement.appendChild(btnAdd);

thTime.innerHTML = "TIMES"
thVitoria.innerHTML = "VITORIAS"
thDerrota.innerHTML ="DERROTAS"
thEmpate.innerHTML = "EMPATES"
thPonto.innerHTML = "PONTOS"

appElement.appendChild(tableTime);
tableTime.appendChild(linha)
linha.appendChild(thTime);
linha.appendChild(thVitoria);
linha.appendChild(thEmpate);
linha.appendChild(thDerrota);
linha.appendChild(thPonto);

btnAdd.onclick = function(){
    var ponto; //variavel que recebe o valor do calculo dos pontos
    var linha= document.createElement('tr')
    var tdTime = document.createElement('td')
    var tdVitoria = document.createElement('td')
    var tdDerrota = document.createElement('td')
    var tdEmpate =  document.createElement('td')
    var tdPonto = document.createElement('td')

    tdTime.innerHTML = "<a href=" +inputLink.value+ " target=\"_blank \">" + inputNome.value +"</a>";
    tdVitoria.innerHTML = inputVitoria.value;
    tdEmpate.innerHTML = inputEmpate.value;
    tdDerrota.innerHTML = inputDerrota.value;

    ponto = parseInt(inputVitoria.value)*3;
    ponto += parseInt(inputEmpate.value);
    tdPonto.innerHTML = ponto;

    if(inputNome.value!="" && inputVitoria.value !="" && inputEmpate.value !="" && inputDerrota.value !="" && inputLink.value!=""){
        linha.appendChild(tdTime);
        linha.appendChild(tdVitoria);
        linha.appendChild(tdEmpate);
        linha.appendChild(tdDerrota);
        linha.appendChild(tdPonto);
        tableTime.appendChild(linha);

        inputNome.value = ""
        inputVitoria.value = ""
        inputDerrota.value = ""
        inputEmpate.value = ""
        inputLink.value = ""
    }else{
        alert("Por favor, preencha os campos!")
    }
}

    



