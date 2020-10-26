//objeto é um conjunto de chave e valor

//index seria o endereço de um valor dentro de uma variável
const valores = [1,2,3,4,5,6]
//O console vai imprimir o index x. Ex.: x = 0
console.log(valores[0])

//context
const nome = 'alex'
//Onde o valor é definido, vai ser o seu contexto léxico
console.log(nome)//contexto léxico 1

const exec() {
  const saudacao = 'Falaa';//contexto léxico 2
  return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor.
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123;
  }
}
