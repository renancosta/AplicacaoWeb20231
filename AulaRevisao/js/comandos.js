function buscarBasico(nome){
    var nomes = ["João","Maria","José","Mario","Pedro"];
    var achou = false;
    for(var i=0;i<nomes.length;i++){
        if(nomes[i]==nome){
            achou=true;
        }
    }
    if(achou){
        document.getElementById("resultado").innerText = "Essa pessoa existe!";
    } else {
        alert("Essa pessoa não existe");
    }
}

function buscarCompleto(nome){
    var pessoa1 = {nome: "João", sobrenome: "Costa", idade:"10"};
    var pessoa2 = {nome: "Maria", sobrenome: "Silva", idade:"28"};
    var pessoa3 = {nome: "José", sobrenome: "Soares", idade:"18"};
    var pessoa4 = {nome: "Mario", sobrenome: "Henrique", idade:"17"};
    var pessoa5 = {nome: "Pedro", sobrenome: "José", idade:"15"};
    var pessoas = [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5];
    var achou = false;
    for(var i=0;i<pessoas.length;i++){
        if(pessoas[i].nome==nome){
            achou=true;
            break;
        }
    }
    if(achou){
        document.getElementById("resultado").innerText = "Dados do "+nome+"\n Sobrenome: "+pessoas[i].sobrenome+"\n Idade: "+pessoas[i].idade;
    } else {
        alert("Essa pessoa não existe");
    }
}

function listarProduto(){
    var produto1 = {marca:"Logitech",fabricante:"Logitech",serie: "MX MASTER 3S"};
    var produto2 = {marca:"Logitech",fabricante:"Logitech",serie: "MX MASTER 3S"};
    var produtos = {produto1,produto2};
}