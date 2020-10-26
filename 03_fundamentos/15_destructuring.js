//
const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}
console.log(pessoa)

//cria variaveis fora do objeto, que recebem os valores do objeto
const {nome, idade } = pessoa
console.log(nome, idade)

//destructuring não afeta o objeto
console.log(pessoa)

//renomeou a variavel nome para n e idade para i
const {nome: n, idade: i} = pessoa
console.log(n, i)

//passou um valor padrão, caso não tenha um valor atribuido
const{sobrenome, dinheiro = 'sem'} = pessoa
console.log(sobrenome, dinheiro)

//para destruturar um objeto dentro de um objeto,
const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//dessa forma vc pega todo o objeto aninhado
const {endereco} = pessoa
console.log(endereco)

const [a] = [10]
