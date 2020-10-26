function Media(){
  let vet = []
  for(let i in arguments){
    vet[i] = arguments[i]
  }
  this.calcular = function(){
    let totValores = vet.length
    let soma = 0
    for(let i in vet){
      soma += vet[i]
    }
    let total = soma / totValores
    console.log(`${soma} dividido por ${totValores} é igual à ${total}`)
  }
}

const media =  new Media(5,5,5)
media.calcular()
