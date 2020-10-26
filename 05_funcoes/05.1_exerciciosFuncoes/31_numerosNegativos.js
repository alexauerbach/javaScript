function Negativos(){
  let vet = []
  for(let i in arguments){
    vet[i] = arguments[i]
  }
  this.numNegativos = function(){
    let negativos = 0
    for(let i in vet){
      if(vet[i] < 0){
        negativos ++
      }
    }
    console.log(negativos)
  }
}

const negativos = new Negativos(1,-2,3,4)
negativos.numNegativos()
