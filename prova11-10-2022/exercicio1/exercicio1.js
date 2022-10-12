/*1 - Em uma variável chamada nome insira seu nome, e em uma variável chamada rgm
insira os 3 últimos digitos do seu rgm.
Realize uma divisão dos digitos do seu rgm pelo número de letras do seu nome.
E crie um laço de repetição que deverá imprimir seu nome o tanto de vezes que for o
resultado da divisão.
Utilizar a função .length para saber quantos caracteres possui o nome.
*/

let nome = "Leandro";
let rgm = 896;
let quantidadeLetras = nome.length;
let resultadoDivisao = rgm / quantidadeLetras;

for (let numero = 1; numero <= resultadoDivisao; numero++){
    console.log(`${numero} - ${nome}`);
}
