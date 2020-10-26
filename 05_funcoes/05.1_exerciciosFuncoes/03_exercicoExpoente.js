function Expoente(base, expoente){
  this.base = base
  this.expoente = expoente
  this.calculo = function(){
    console.log(Math.pow(this.base, this.expoente))
  }
}

const expo = new Expoente(2,3)
expo.calculo()
