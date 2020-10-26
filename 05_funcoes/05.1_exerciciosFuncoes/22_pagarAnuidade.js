function Anuidade(mes, valor){
  this.mes = mes
  this.valor = valor

  let juros = []
  this.juros = juros
  for(let i = 1; i <= 12; i++){
    valor = valor / 100 * 5 + valor
    juros[i] = valor.toFixed(2)
  }

  this.respectiveMounth = function(){
    switch(mes){
      case 1:
      console.log(`Mês: Janeiro, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 2:
      console.log(`Mês: Fevereiro, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 3:
      console.log(`Mês: Março, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 4:
      console.log(`Mês: Abril, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 5:
      console.log(`Mês: Maio, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 6:
      console.log(`Mês: Junho, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 7:
      console.log(`Mês: Julho, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 8:
      console.log(`Mês: Agosto, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 9:
      console.log(`Mês: Maio, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 10:
      console.log(`Mês: Outubro, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 11:
      console.log(`Mês: Novembro, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      case 12:
      console.log(`Mês: Dezembro, Valor: R$ ${juros[mes].replace(".",",")}`)
      break
      default:
      console.log("Valor Inválido")
    }
  }

}

const anuidade = new Anuidade(12, 100)
anuidade.respectiveMounth()
