var cardsEllement = document.querySelector('.card-container');

function idadeValida(age){
    return age >= 40;
}

function criaElemento(element){
    return document.createElement(element);
}

function formValido(){
    if(nome.value =="" || email.value =="" || idade.value =="" || tel.value ==""){
        alert("Dados incompletos")
        return false;
    }else{
        return true;
    }
}

function verify(){
    if(formValido)
        idadeValida(idade.value)?alert("Elegivel para exame!"):alert("Inelegível para exame. Idade insuficiente!");
}

function creatBox(){
    var boxInfo = criaElemento('div');
    var textp = criaElemento('p');

    if(formValido()){
        if(idadeValida(idade.value)){
            var condicao = "Situação: Encaminhar para exames de rotina especificos com proctologista."
            boxInfo.style.backgroundColor = 'rgb(1, 102, 210)';
        }else{
            var condicao = "Situação: Não elegivel para realizar exames mais complexos.";
            boxInfo.style.backgroundColor = 'rgb(0, 139, 46)';
        }
        textp.innerHTML = "Nome: " + nome.value +  "<br>Idade: " + idade.value+ "<br><br>"+condicao;
        boxInfo.appendChild(textp);
        cardsEllement.appendChild(boxInfo);
    }

    boxInfo.style.width = '295px';
    boxInfo.style.height = '150px';
    boxInfo.style.padding= '0px 10px';
    boxInfo.style.marginTop ='10px';
    boxInfo.style.color ='white';
   
    clearInput();
}

function clearInput(){
    nome.value=""
    email.value=""
    tel.value=""
    idade.value=""
}

