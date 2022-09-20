function verificarNumeros(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let maiorNumero;
    let exibirNumero = document.getElementById("resultado");

    if (numero1 > numero2){
        maiorNumero = `${numero1} é maior que ${numero2}`;
    } else if (numero2 > numero1){
        maiorNumero = `${numero2} é maior que ${numero1}`;
    } else {
        maiorNumero = `${numero1} é igual a ${numero2}`
    }

    exibirNumero.innerHTML = maiorNumero;
}