function ImparesEntre(valor1, valor2){
  this.valor1 = valor1
  this.valor2 = valor2

  this.imprimirImpares = function(){

    let valorMenor = valor1
    let valorMaior = valor2
    if(valor1 > valor2){
      valorMenor = valor2
      valorMaior = valor1
    }

    for(let i = valorMenor; i <= valorMaior; i++){
      if((i % 2) == 1){
        console.log(i)
      }
    }

  }
}

const impares = new ImparesEntre(20,10)
impares.imprimirImpares()
