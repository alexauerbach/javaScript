//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JavaScript
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções Construtoras
function Produto(nome, preco , desc){
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1-desc)
  }
}

//Função Factory
function criarFuncionario(nome,salarioBase, faltas){
  return{
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'

//uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
