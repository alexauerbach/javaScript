function Divisao(dividendo, divisor){
  this.dividendo = dividendo
  this.divisor = divisor
  this.calculo = function(){
    console.log(this.dividendo / this.divisor)
    console.log(this.dividendo % this.divisor)
  }
}

function PrintarValor(valor){
  this.valor = valor
  this.escrever = function(){
    console.log(`R$${this.valor.toFixed(2).replace(".",",")}`)
  }
}

const print = new PrintarValor(0.33333333)
print.escrever()
