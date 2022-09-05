function calcular(){
    const valor1 = parseInt(document.getElementById("valor1").value);
    const valor2 = parseInt(document.getElementById("valor2").value);
    const opcoes = document.getElementsByName("opcao");
    let operacao;
    let resultado;

    for(let opcao = 0; opcao < opcoes.length; opcao++){
        if (opcoes[opcao].checked){
            operacao = opcoes[opcao].value;
        }
    }

    if (operacao === "soma"){
        resultado = valor1 + valor2;
    }

    else if (operacao === "subtracao"){
        resultado = valor1 - valor2;
    }

    else if(operacao === "multiplicacao"){
        resultado = valor1 * valor2;
    }

    else {
        resultado = valor1 / valor2;
    }

    document.getElementById("resultado").value = resultado;
}