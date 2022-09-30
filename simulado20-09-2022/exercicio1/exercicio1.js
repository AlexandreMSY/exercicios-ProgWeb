/*
01 - Crie um algoritmo que tenha uma variável chamada nome e
que tenha como resultado seu nome. Crie um laço de repetição
que exiba seu nome a quantidade de letras que ele possui.
Por exemplo:
nome = Leo
Resultado esperado:
1 - Leo
2 - Leo
3 - Leo
Dica: para saber a quantidade de letras em uma variável basta
utilizar o método .length
*/


let nome = "Alexandre";
let tamanhoLetras = nome.length;
let contador = 1;

while (contador <= tamanhoLetras){
    console.log(contador + " - " + nome)
    contador++;
}