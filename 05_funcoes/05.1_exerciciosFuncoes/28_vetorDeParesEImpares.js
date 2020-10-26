function Vetor(numero){
  this.numero = numero
  this.paresEImpares = function(){
  // let vetor = []
    let par = 0
    let impar = 0
    for(let n = 1; n <= numero; n++){
      //vetor[n] = n
      let div = n % 2
      if(div == 0){
        par++
      }else{
        impar++
      }
    }
    console.log(`Pares: ${par}, Impares: ${impar}`)
  }
}

const vet = new Vetor(5)
vet.paresEImpares()
