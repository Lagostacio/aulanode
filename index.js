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


//find, findIndexm findLast, includes
// every (E), some (OU)
//map, forEach, filter
//reduce 

const numeros = [1,2,3,4,5]

//const n = numeros.find(function(v){
//    return ( v % 2 === 0)
//   
//})
/*
const n = numeros.find(v => v%2 === 0 )

console.log("Número :",n)


const pos = numeros.findIndex(v => v%2===0)
console.log('Posição: ', pos)

const ultimoNPar = numeros.findLast(v=> v%2 ===0)
console.log('Último par: ',ultimoNPar)

if (numeros.includes(2)){
    console.log('O vetor números tem o valor 2')
}else{
    console.log('O vetor números NÃO tem o valor 2')
}

const algum = numeros.some(v => v%2===0)
console.log(algum);
if(numeros.some(v => v%2===0)){
    console.log("Existe um número par")
}else{
    console.log("NÃO existe um número par")
}
*/
//const numerosEmOrdem = numeros.every((v,i,k) => i===0 || v >= k[i-1] )
//console.log(numerosEmOrdem)

//const todosPares = numeros.filter(v => v%2==0)
//console.log(todosPares);

//foreEach não retorna nada
//let soma = 0 
//numeros.forEach(v => soma += v)
//console.log(soma)


//const dobro = numeros.map(v => v*2)
//console.log(dobro);

// pv = previous value
// cv = current value
//const soma555 = numeros.reduce((pv,cv)=> pv + cv,0)
//console.log(soma555);

//const reduzObj = numeros.reduce((p,n) =>  [...p,{n}] ,[])
//console.log(reduzObj)

// DESAFIOOO

const dias = ['DOMINGO' ,'SEGUNDA', 'TERÇA','QUARTA','QUINTA','SEXTA','SABADO']
const periodos = [
    {inicio: '00:00',termino: '12:00', dias:['SABADO','DOMINGO']},
    {inicio: '17:00',termino: '20:00', dias:['SEXTA','SABADO']}
]

const r2 = dias.map(dia=> ({dia,periodos: 
    periodos
    .filter(p => p.dias.includes(dia))
    .map(
        p=>({inicio:p.inicio,termino:p.termino})
    ) 

}))
r2.forEach(d => console.log(d.dia,d.periodos.length > 0 ? "Abre" : "Fechado"))