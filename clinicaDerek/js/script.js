var cardsEllement = document.querySelector('.card-container');

function verify(){
    // var nome = document.getElementById("nome");
    // var email = document.getElementById("email");
    // var age = document.getElementById("idade");
    // var phone = document.getElementById("tel");
    if(nome.value =="" || email.value =="" || idade.value =="" || tel.value ==""){
        alert("Dados incompletos")
    }else if(idade.value>=40){
        alert("Elegivel para exame!")
    }else{
        alert("Inelegível para exame. Idade insuficiente!")
    }
}

function creatBox(){
    var boxInfo = document.createElement('div');
    var textp = document.createElement('p');

    if(nome.value =="" || email.value =="" || idade.value =="" || tel.value ==""){
        alert("Dados incompletos")
    }else if(idade.value>=40){
        textp.innerHTML = "Nome: " + nome.value +  "<br>Idade: " + idade.value+ "<br><br>Situação: Encaminhar para exames de rotina especificos com proctologista."; 
        boxInfo.appendChild(textp);
        cardsEllement.appendChild(boxInfo);
        boxInfo.style.backgroundColor = 'rgb(1, 102, 210)';
    }else{
        textp.innerHTML = "Nome:" + nome.value + "<br>Idade:"+ idade.value+ "<br><br>Situação: Não elegivel para realizar exames mais complexos.";
        boxInfo.appendChild(textp);
        cardsEllement.appendChild(boxInfo);
        boxInfo.style.backgroundColor = 'rgb(0, 139, 46)';
    }
        
    boxInfo.style.width = '295px';
    boxInfo.style.height = '150px';
    boxInfo.style.padding= '0px 10px';
    boxInfo.style.marginTop ='10px';
    boxInfo.style.color ='white';
   
}

function clearInput(){
    nome.value=""
    email.value=""
    tel.value=""
    idade.value=""
}

