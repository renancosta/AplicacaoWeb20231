function exibirBemVindo(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var nomeCompleto = nome+" "+sobrenome;
    alert("Olá mundo, "+nomeCompleto);
}

//Função que soma dois números, mas que obrigatoriamente os ids precisam ser num1 e num2
function somaNumeros(){
    var num1 = window.prompt("Informe um número");
    var num2 = document.getElementById("num2").value;
    num2 = parseInt(num2,10);
    soma = num1+num2;
    if(isNaN(soma)){
        alert("Valor informado não é um número");
    }else{
        document.getElementById("exemplo").innerHTML = "Somou";
    }

}

/*
    Função que valida se o valor informado é um número ou não
 */
function tratamentoNumero(num){
    if(isNaN(num)){
        alert("Valor informado não é um número");
    }
    document.getElementById("exemplo").innerHTML = "É um número";
}
