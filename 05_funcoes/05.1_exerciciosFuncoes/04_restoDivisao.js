function Divisao(dividendo, divisor){
  this.dividendo = dividendo
  this.divisor = divisor
  this.calculo = function(){
    console.log(this.dividendo / this.divisor)
    console.log(this.dividendo % this.divisor)
  }
}

const divi = new Divisao(5,2)
divi.calculo()
