
var tabelaEllemnt = document.getElementById('tabela');

function criaElemento(element){
    return document.createElement(element);
}

function formValido(){
    if(nome.value =="" || turma.value =="" || comp.value =="" || nota.value ==""){
        alert("Dados incompletos")
        return false;
    }else{
        return true;
    }
}

function salvar(){

    var linha= criaElemento('tr')
    var tdNome = criaElemento('td')
    var tdTurma = criaElemento('td')
    var tdComp = criaElemento('td')
    var tdNota =  criaElemento('td')
    var tdAction = criaElemento('td')


    if(formValido()){
        tdNome.innerHTML = nome.value;
        tdTurma.innerHTML = turma.value;
        tdComp.innerHTML = comp.value;
        tdNota.innerHTML = nota.value;
        tdAction.innerHTML = "<button type=button>Detalhes</button>";

        linha.appendChild(tdNome)
        linha.appendChild(tdTurma)
        linha.appendChild(tdComp)
        linha.appendChild(tdNota)
        linha.appendChild(tdAction)

        tabelaEllemnt.appendChild(linha);
    }
       
}