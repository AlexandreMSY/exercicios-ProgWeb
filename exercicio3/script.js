/*Exercicio 3
Faça um script que leia um número inteiro, em seguida calcule e mostre o dobro desse número.
*/


let numero = parseInt(prompt("Entre com um numero para calcular o dobro: "));
let dobro = numero * 2;

alert(`O dobro de ${numero} é ${dobro}`);

/*Exercicio 4 
Faça um script para somar dois números informados pelo usuário.
*/

let numero1 = parseInt(prompt("Entre com o primeiro numero: "));
let numero2 = parseInt(prompt("Entre com o segundo numero:"));
let soma = numero1 + numero2;

alert(`${numero1} + ${numero2} = ${numero1 + numero2}`)

/*Exercicio 5
Faça um script para calcular o quadrado de um número informado pelo usuário.
*/

numero = prompt("Entre com um numero para calcular o quadrado: ");
let quadrado = numero * numero;

alert(`O quadrado de ${numero} é ${quadrado}`);

/*Exercicio 6 
Faça um script que leia três notas reais, calcule e mostre a média dessas notas
*/

let nota1 = parseInt(prompt("Entre com a primeira nota"));
let nota2 = parseInt(prompt("Entre com a segunda nota"));
let nota3 = parseInt(prompt("Entre com a terceira nota"));

let somaDasNotas = nota1 + nota2 + nota3;
let quantidadeNumeros = 3;
let media = somaDasNotas / quantidadeNumeros;

alert(`A média das notas é ${media}`);

/*Exercicio 7 
Faça um programa que receba três números inteiros, calcule e mostre a soma desses números.
*/

numero1 = parseInt(prompt("Entre com o primeiro número: "));
numero2 = parseInt(prompt("Entre com o segundo número: "));
let numero3 = parseInt(prompt("Entre com o terceiro número: "));
soma = numero1 + numero2 + numero3;

alert(`${numero1} + ${numero2} + ${numero3} = ${soma}`);

/*Exercicio 8
Faça um script para calcular e mostrar a área de um triângulo (área = (base * altura) /2.
*/

let base = parseInt(prompt("Entre com a base: "));
let altura = parseInt(prompt("Entre com a altura: "));
let area = (base * altura) / 2;

alert(`A área é ${area}`)

/*
Exercicio 9
Faça um script que leia o nome de uma pessoa, o ano de nascimento dessa pessoa e o ano atual, calcule e mostre a idade dessa pessoa e seu nome em
linhas separadas.
 */

let nome = prompt("Entre com o seu nome: ");
let anoDeNascimento = parseInt(prompt("Entre com o seu ano de nascimento: "));
let anoAtual = parseInt(prompt("Entre com o ano atual: "));
let idade = anoAtual - anoDeNascimento;

alert(`Nome: ${nome} \n Idade: ${idade}`);

/*
Exercicio 10;
Faça um script que receba a altura de um degrau de uma escada e a altura que um pedreiro deseja alcançar utilizando essa escada, calcule e mostre
quantos degraus ele deverá subir para atingir seu objetivo, os valores fornecidos devem ser em metros.
*/

let metrosSubir = parseInt(prompt("Metros para subir: "));
let alturaDegraus = parseInt(prompt("Altura do degrau da escada: "));
let quantidadeDegraus = ((metrosSubir * 100) / alturaDegraus);

alert(`Você tera que subir ${quantidadeDegraus} degraus`);
