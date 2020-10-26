function Aumento(valor, plano = "A"){
  this.valor = valor
  this.plano = plano

  this.aumento = function(){
    switch (plano){
      case "A":
        console.log(valor / 100 * 10 + valor)
        break
      case "B":
        console.log(valor / 100 * 15 + valor)
        break
      case "C":
          console.log(valor / 100 * 20 + valor)
          break
      default:
          console.log("Plano inválido")
          break
    }
  }
}

const aumento = new Aumento(0.2, "A")
aumento.aumento()
