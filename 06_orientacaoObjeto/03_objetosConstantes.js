//pessoa -> 123 -> {...}
//constantes de objetos sendo alteradas...
//na verdade um objeto não recebe um valor (ex.: nome: "João"),
//mas sim um endereço do local onde o valor esta armazenado
//na memoria e este endereço não vai ser alterado.
const pessoa = {nome: "João"}
pessoa.nome = 'Pedro'
console.log(pessoa)

//metodo para congelar o objeto, no qual não pode sofrer mais...
//nenhuma alteração.
Object.freeze(pessoa)
pessoa.nome = "Maria"
console.log(pessoa.nome)
