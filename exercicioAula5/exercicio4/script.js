function calculoArea(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let area = base * altura;
    let exibirResultado = document.getElementById("resultado");

    exibirResultado.innerHTML = `A área do retângulo é ${area}.`;
}