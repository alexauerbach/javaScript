const nome = 'Rebeca'

//valor concatenado
const concatenacao = 'Ola' + nome + '!'
//valor de acordo com template string, deve ser iniciado e fechado com ` (crase)
const template = `Ola ${nome}`

console.log(template)

console.log(`1 + 1 = ${1 + 1}`)
//função em java script. Onde x = recebe um valor y, no qual realiza um metodo z
//Exemplo: (x = up, y = texto, z = y.toUpperCase();)
const up = texto => texto.toUpperCase();
//chamando uma função dentro do template string
console.log(`Ei... ${up('cuidado')}!`)

var teste = valor => valor.toUpperCase();

var objeto = 'medo'
console.log('Ei...', teste(objeto) )
