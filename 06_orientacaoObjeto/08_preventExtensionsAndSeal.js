
//com preventExtensions eu posso editar os atributos,
//mas não posso criar um atributo novo.
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})


//objeto selado é similar ao preventExtensions,
//mas agora não pode excluir os atributos.
const pessoa = Object.seal({
  nome:'Juliana', idade: 35
})

console.log(pessoa)


//selando um objeto, apos ser criado.
const pessoa2 = {
  nome:'Pedro', idade: 22
}
Object.seal(pessoa2)
