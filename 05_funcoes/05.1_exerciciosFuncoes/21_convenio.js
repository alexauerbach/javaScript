function Convenio(idade){
  this.idade = idade
  let valor = 100
  this.plano = function(){
    if(idade > 0 && idade < 10){
      valor += 80
    }else if(idade <= 30){
      valor += 50
    }else if(idade <= 60){
      valor += 95
    }else if(idade > 60){
      valor += 130
    }
  console.log(valor.toFixed(2).replace(".",","))
  }
}

const convenio = new Convenio(72)
convenio.plano()
