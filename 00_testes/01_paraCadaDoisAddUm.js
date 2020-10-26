function Cachorro(totalCachorrosPretos){
  this.totalCachorrosPretos = totalCachorrosPretos
  let cachorroPreto = 0
  let cachorroAmarelo = 0
  let soma = 0
  this.contar = function(){
    for(let i = 1; i <= totalCachorrosPretos; i++){
      cachorroPreto += 1
      soma += 1
      if(soma == 2){
        cachorroAmarelo += 1
        soma = 0
      }
      console.log(`Total de cachorros pretos: ${cachorroPreto}, total de cachorros amarelos: ${cachorroAmarelo}`)
    }
  }
}

const cachorro = new Cachorro(4)
cachorro.contar()
