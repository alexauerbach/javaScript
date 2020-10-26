function Vender(fruta = "goiaba"){
  this.fruta = fruta
  this.venda = function(){
    switch (fruta){
      case "maça":
        console.log("Não vendemos esta fruta aqui")
        break
      case "kiwi":
        console.log("Estamos com escassez de kiwis")
        break
      case "melancia":
        console.log("Aqui está, são 3 reais o quilo.")
        break
      case "goiaba":
        console.log("Erro")
        break
    }
  }
}

const vender = new Vender()
vender.venda()
