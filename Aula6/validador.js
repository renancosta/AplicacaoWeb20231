function validarCPF(cpf){
    var numCpf,d1,d2;
    var d1V,d2V;
    numCpf = cpf.substring(0,9);
    d1 = cpf.substring(9,10);
    d2 = cpf.substring(10,11);
    
    d1V=descobreDigito(cpf);
    cpf+=d1V;
    d2V=descobreDigito(cpf);

    if(d1V==d1 && d2V==d2){
        alert("CPF válido");
    }else{
        alert("CPF inválido")
    }
    alert(d1V+" "+d2V)
}

function descobreDigito(cpf){
    var cont,soma,resto;
    cont=0;
    soma=0;
    var i=cpf.length;
    alert(i);
    for(i;i>1;i--){
        soma+=cpf[cont]*i;
        cont++;
    }
    resto=soma%11;
    if(resto<2){
        return 0;       
    } else {
        return (11-resto);
    }
}