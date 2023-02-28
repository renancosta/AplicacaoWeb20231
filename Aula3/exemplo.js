function exibirBemVindo(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var nomeCompleto = nome+" "+sobrenome;
    alert("Olá mundo, "+nomeCompleto);
}

function somaNumeros(){
    var num1 = parseInt(document.getElementById("num1").value,10);
    var num2 = document.getElementById("num2").value;
    num2 = parseInt(num2,10);
    soma = num1+num2;
    if(isNaN(soma)){
        alert("Valor informado não é um número");
    }else{
        alert("Soma: "+soma);
    } 
}

function tratamentoNumero(num){
    if(isNaN(num)){
        alert("Valor informado não é um número");
    }
}
