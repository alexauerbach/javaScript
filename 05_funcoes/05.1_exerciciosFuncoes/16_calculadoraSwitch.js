function Calculadora (a, signal, b){
  this.a = a
  this.signal = signal
  this.b = b
  this.calcular = function(){
    switch (signal) {
      case "+":
        console.log(a + b)
        break;
      case "-":
        console.log(a - b)
        break;
      case "*":
        console.log(a * b)
        break;
      case "/":
        console.log(a / b)
        break;
      default:
        console.log("Operação inválida")
    }
  }
}

const calc = new Calculadora(5, "8", 4)
calc.calcular()
