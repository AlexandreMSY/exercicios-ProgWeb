/*2 - Na votação do Brasil só temos segundo turno quando um dos candidatos não atinge
51% dos votos válidos.
Crie um algoritmo que receba a porcentagem de 3 candidatos (Bolsonaro, Lula e Tebet)
e:
● Caso Bolsonaro atingir 51% dos votos o sistema deve exibir a seguinte
mensagem: Bolsonaro ganhou no primeiro turno
● Caso Lula atingir 51% dos votos o sistema deve exibir a seguinte mensagem:
Lula ganhou no primeiro turno
● Caso Simone Tebet atinja 51% dos votos o sistema deve exibir: Tebet ganhou no
primeiro turno
● Caso nenhuma das opções acima se concretizem o sistema deve exibir a
seguinte mensagem: Vamos ter segundo turno
*/

let bolsonaro = 0;
let lula = 100;
let tebet = 0;

if (bolsonaro >= 51){
    console.log("Bolsonaro ganhou no primeiro turno")
}else if (lula >= 51){
    console.log("Lula ganhou no primeiro turno")
}else if(tebet >= 51){
    console.log("Tebet ganhou no primeiro turno")
}else{
    console.log("Vamos ter segundo turno")
}