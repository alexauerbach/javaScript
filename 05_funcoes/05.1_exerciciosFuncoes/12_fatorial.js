function Fatorial(valor){
  this.valor = valor
  this.fatorar = function(){
    let fat = 1
    for(let i = valor; i > 0; i --){
      fat *= i
    }
    console.log(fat)
  }
}

const fatorial = new Fatorial(5)
fatorial.fatorar()
