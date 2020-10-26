//um objeto é um endereço na memória
const a = {name: "teste"}
console.log(a)
//quando b recebe a, na verdade ele recebe o mesmo endereço de a
const b = a
b.name = "Opa"
console.log(a)

//um valor comum é apenas um valor
let c = 1
console.log(c)
//quando d recebe c, ele recebe um valor igual de c
let d = c
d = d + 1
console.log(c)

let valor
//undefined, nunca foi iniciada, não tendo nenhum endereço
console.log(valor)
//null o valor é nada, logo ela tem um valor na memória
valor = null
console.log(valor)
