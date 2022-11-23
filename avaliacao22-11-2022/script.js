function executar(){
    let nome = document.getElementById("nome").value
    let numeroRepeticoes = document.getElementById("numero").value
    let resultado = document.getElementById("resultado")

    if(resultado.innerHTML.length > 0){
        resultado.innerHTML = ''
    }

    for (let numero = numeroRepeticoes; numero >= 1; numero--){
        resultado.innerHTML += `<p> ${numero} - ${nome} </p>`
    }
}