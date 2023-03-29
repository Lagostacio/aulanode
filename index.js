//const nome = 'Thyago' //let --> escopo de bloco/função
//const sobrenome = 'Salvah'
/*
const vetor = [1,2,3,4,5]
const [a,b,c,d,e] = vetor
class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

const salvah = new Pessoa("Thyago","Salvah")
const {sobrenome:ultimo, nome} = salvah

function soma (a,b){
    return a + b;
}

 const divisao = (a,b) => a/b;

const inacio = {nome: 'inacio',sobrenome:'lago'}

const mostraNome = ({nome,sobrenome}) => `${nome} ${sobrenome}`
console.log(mostraNome(inacio));


const numeros = [12,3,4,5,6]
for (let i in numeros){
    console.log(numeros[i])
}

for (let i of numeros){
    console.log(i)
}

*/
// map, filter, reduce, find
// includes, forEach, every, some
// findLast, findIndex


const numeros = [1,2,3,4,5]

//const n = numeros.find(function(v){
//    return ( v % 2 === 0)
//   
//})

const n = numeros.find(v => v%2 === 0 )

console.log(n)