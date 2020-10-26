function Vetor(){
  let vet = []
  for(let i in arguments){
    vet[i] = arguments[i]
  }
  this.chama = function(){
    let maior = 0
    let menor = 0
    for(let i in vet){
      if(maior == 0){
        maior = vet[i]
      }else if(vet[i] > maior){
        menor == 0 ? menor = maior : menor = menor
        maior = vet[i]
      }else if(vet[i] < menor){
        menor = vet[i]
      }
      console.log(`maior: ${maior}, menor: ${menor}`)
    }
  }
}

const vetor = new Vetor(2,5,1,8)
vetor.chama()
