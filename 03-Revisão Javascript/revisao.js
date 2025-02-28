// comentario de uma linha

/*
comentario em bloco
*/

// variaveis
// var -> não usa no dia a dia
let nome = "Kesia";
const idade = 23;

//nome = 'teste'
//idade = 23;  não é possivel retribuir uma constante

//Operadores
const soma = 2 + 2
const substraçao = 2 - 2
const multiplicaçao = 2 * 2
const divisao = 2/2 
const resto = 3 % 2

//operadores de coparação
const igaul = 2 == 2
const diferente = 3 != 2 
const maior = 3 > 2 
const menor = 2 < 3
const maiorOuigual = 2 >= 2
const menorOuigual = 3 <= 2

// estruturas condições 
if (idade >=  18) {
    console.log("Maior de idade")
} 

if (idade >= 18) {
     console.log("Maior de idade")
} else {
    console.log("menor de idade")
}


//Operador Ternario

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log("Mensagens ->", mensagem)

//Arrays - Listas

const frutas = ["Maçã", 'Banana','Uva']
console.log(frutas[0])
console.log(frutas[1])

console.log("Quantas frutas tem no array?")
console.log(frutas.length)

frutas.push("Laranja")
console.log("E agora, Quantas frutas tem no array?")
console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)