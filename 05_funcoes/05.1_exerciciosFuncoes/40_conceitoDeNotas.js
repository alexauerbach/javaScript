function Conceitos(notas){
  this.notas = notas
  this.atribuirConceitos = function(){
    for(let i in notas){
      if(notas[i] <= 4.9){
        notas[i] = (`${notas[i]}, conceito D`)
      }else if(notas[i] <= 6.9){
        notas[i] = (`${notas[i]}, conceito C`)
      }else if(notas[i] <= 8.9){
        notas[i] = (`${notas[i]}, conceito B`)
      }else if(notas[i] <= 10){
        notas[i] = (`${notas[i]}, conceito A`)
      }
    }
    console.log(notas)
  }
}

const conceitos = new Conceitos([4.0,5.2,9])
conceitos.atribuirConceitos()
