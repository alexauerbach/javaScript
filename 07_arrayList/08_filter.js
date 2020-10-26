//forma de filtrar um array, percorrendo um array.
//ex.: retorna os alunos com nota acima da média.

const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
  {nome: 'Copo de Plastico', preco: 4.99, fragil: false}
]

//filter retorna true or false
console.log(produtos.filter(function(p){
  return p.preco > 2500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
