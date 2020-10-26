const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//função callback
//faz um for por aprovados, passando indice a indice.
//depois faz um função, que recebe como contexto,
//nome e indice
//foreach percorre dentro de listas: primeiro atributo,
//segundo indice, terceiro o array.
aprovados.forEach(function(nome, indice){
  console.log(`${indice + 1} ${nome}`)
})

//arrow function
//fução foreach que recebe um unico parametro (nome)
aprovados.forEach(nome => console.log(nome))

//passou para uma função
const exibirAprovados = aprovado =>console.log(aprovado)
aprovados.forEach(exibirAprovados)
