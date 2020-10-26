function DezVinte(numero){
  this.numero = numero
  let vet = []
  let foraIntervalo = 0
  let dentroIntervalo = 0
  this.percorrer = function(){
    for(let i = 1; i <= numero; i++){
      if(i >= 10 && i <= 20){
        dentroIntervalo ++
        vet[i] = i
      }else{
        foraIntervalo ++
        vet[i] = i
      }
    }
    console.log(`Dentro = ${dentroIntervalo}, fora = ${foraIntervalo}`)
  }
}

const contador = new DezVinte(50)
contador.percorrer()
