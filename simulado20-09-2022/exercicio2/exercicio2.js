/*02 - Crie um algoritmo que simule o sorteio da Mega-Sena.
O sorteio da Mega-Sena é simples, são sorteadas 6 dezenas.
Se o número sorteado for menor que 10 ele deve ter um 0 à
esquerda.
int randomico = Math.floor(Math.random() * 100)
*/

let numeroAleatorio;
let dezenas = " ";
let quantidadeNumeros = 1;

while (quantidadeNumeros <= 6){
    numeroAleatorio = Math.floor(Math.random() * 100);

    if (numeroAleatorio < 10){
        dezenas += "0" + numeroAleatorio + " ";
    }else {
        dezenas += numeroAleatorio + " ";
    }

    quantidadeNumeros++
}

console.log("Dezenas: " + dezenas)