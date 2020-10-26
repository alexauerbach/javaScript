function DivisivelPorTres(valor){
  this.valor = valor
  this.divisivel = function(){
    let verificacao = valor % 3
    if(verificacao == 0){
      console.log(true)
    }else{
      console.log(false)
    }
  }
}

const divi3 = new DivisivelPorTres(9)
divi3.divisivel()
