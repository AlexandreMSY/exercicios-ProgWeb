/*3 - Crie um algoritmo que tenha uma variável chamada idade:
● Caso a idade recebida seja ímpar e seja maior que 18 anos, o algoritmo deve
exibir a seguinte mensagem: Sua idade é ímpar e você é de maior
● Caso a idade recebida seja par e seja maior que 18 anos, o algoritmo deve exibir
a seguinte mensagem: Sua idade é par e você é de maior
● Caso a idade recebida seja menor de idade, o algoritmo não deve exibir nada
*/

let idade = 33;

if (idade % 2 == 1 && idade >= 18){
    console.log("Sua idade é ímpar e você é de maior")
}else if (idade % 2 == 0 && idade >= 18){
    console.log("Sua idade é par e você é de maior")
}else{
    console.log("")
}