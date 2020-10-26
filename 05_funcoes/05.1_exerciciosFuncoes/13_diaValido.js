function Dia(dia){
  this.dia = dia
  this.diaSemana = function(){
    if(dia <= 7 && dia > 0){
      switch(this.dia){
        case 1: console.log("Fim de semana!")
        break
        case 2: console.log("Dia útil!")
        break
        case 3: console.log("Dia útil!")
        break
        case 4: console.log("Dia útil!")
        break
        case 5: console.log("Dia útil!")
        break
        case 6: console.log("Dia útil!")
        break
        case 7: console.log("Fim de semana!")
        break
      }
    }else{
      console.log("Dia inválido!")
    }
  }
}

const dia = new Dia(9)
dia.diaSemana()
