//função sem retorno
function imprimirSoma(a, b){
  console.log(a + b);
}
imprimirSoma(2, 3)

//função com retorno,
//o valor b tem um valor padrão, caso não seja definido
function soma(a, b = 0){
  return a + b
}
console.log(soma(2))


//Armazenando uma função em uma variavel
const imprimirSoma2 = function (a,b){
  console.log(a + b)
}

//Armazenando uma função arrow (=>) em uma variável
const soma2 = (a, b) => {
  return a + b
}
console.log(soma2(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')

//Uma variável definida com var não tem escopo e pode ser chama fora de um bloco
{
  var sera = 'Será??'
}
console.log(sera)
