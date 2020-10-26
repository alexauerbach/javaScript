//array é uma estrutura indexada, na qual você acessa o valor por um valor index

//array é definido por colchetes e os valores são separados por vírgula.
const  valores = [7,8,9,10]
//os valores são chamados apartir de um valor index do array. Ex.: (index = 0 e 3)
console.log(valores[0], valores[3])
//criar mais um index e atribuiu um novo valor.
valores[4] = 10
//mostra o tamanho do array, lembrando que ele é iniciado em 0.
console.log(valores.length)
//retira o ultimo valor do array. ex.: ele printa o valor na tela e retira do array
console.log(valores.pop())
//deleta o valor x do array, deixando uma casa vazia
delete valores[0]
console.log(valores)
//array no java script é do tipo objeto
console.log(typeof valores)
