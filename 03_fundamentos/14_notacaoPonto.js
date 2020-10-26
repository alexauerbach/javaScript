//notação ponto serve para chamar uma variavel ou metodo dentro de...
//uma determinada função

//nesse exemplo o ceil (método para arrendondar um valor para cima),
//é chamado de dentro da função Math (lembrando que função, é uma classe para O.O.)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function Obj(nome){
  this.nome = nome
  this.exec = function(){
    console.log('Exec...')
  }
}

const obj2 = new Obj('Alex')
console.log(obj2.nome)
const obj3 = new Obj('Pedro')
console.log(obj3.nome)
obj3.exec()
