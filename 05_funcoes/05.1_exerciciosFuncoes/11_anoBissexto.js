function Ano(ano){
  this.ano = ano
  this.bissexto = function(){
    let anoBissexto = ano % 4
    let anoBissextoCem = ano % 100
    let anoBissextoQuatrocentos = ano % 400

    if(anoBissextoQuatrocentos == 0){
      console.log(true)
    }else if(anoBissextoCem == 0){
      console.log(false)
    }else if(anoBissexto == 0){
      console.log(true)
    }else{
      console.log(false)
    }
  }
}

const ano = new Ano(100)
ano.bissexto()
