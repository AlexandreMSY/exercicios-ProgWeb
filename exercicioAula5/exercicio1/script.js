function exibirNome(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("numero").value;
    let exibirTexto = document.getElementById("texto");
    let texto = "";
    
    while (idade > 0){
        texto += nome + " " + "\n";
        idade--;
    }

    exibirTexto.innerText = texto;
}