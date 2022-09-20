function calculoDesconto(valor, taxaDesconto){
    let valor1Porcento = valor / 100;
    let desconto = valor1Porcento * taxaDesconto;

    return valor - desconto;
}

function calculoTaxa(valor, taxa){
    let valor1Porcento = valor / 100;
    let desconto = valor1Porcento * taxa;

    return desconto + valor;
}

function calcular(){
    let valorProduto = parseInt(document.getElementById("valor").value);
    let descontoAVista = calculoDesconto(valorProduto, 15);
    let descontoDebito = calculoDesconto(valorProduto, 5);
    let taxaCartao = calculoTaxa(valorProduto, 10);
    let taxaCheque = calculoTaxa(valorProduto, 50);

    let exibirResultado = document.getElementById("resultado");

    let resultado = `Preço a vista: ${descontoAVista}
        Preço a débito: ${descontoDebito}  
        Preço cartão:  ${taxaCartao}  
        Preço cheque:  ${taxaCheque}`;
    
    exibirResultado.innerText = resultado;
}
