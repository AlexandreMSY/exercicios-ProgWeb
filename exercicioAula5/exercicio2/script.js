function parOuImpar(numero){
    if (numero % 2 == 0){
        return "Par";
    }else{
        return "Impar";
    }
}

function exibirResultado(){
    let numero = document.getElementById("numero").value;
    let resultado = parOuImpar(numero);
    let exibirResultado = document.getElementById("resultado");

    exibirResultado.innerHTML = `${numero} é um numero ${resultado}.`
}