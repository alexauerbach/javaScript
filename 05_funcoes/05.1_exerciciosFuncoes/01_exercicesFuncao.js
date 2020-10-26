function Calculos(num1, num2){
  this.num1 = num1
  this.num2 = num2

  this.soma = function(){
    console.log(num1 + num2)
  }
  this.subtracao = function(){
    console.log(num1 - num2)
  }
  this.multiplicacao = function(){
    console.log(num1 * num2)
  }
  this.divisao = function(){
    console.log(num1 / num2)
  }
}

const calc = new Calculos(10, 5)
calc.soma()
calc.subtracao()
calc.multiplicacao()
calc.divisao()
