function Valores (vetor, numero){
  this.vetor = vetor
  this.numero = numero
  this.funcao1 = function(){
    let outroVetor = []
    for(let i in vetor){
      outroVetor[i] = vetor[i] * numero
    }
    console.log(outroVetor)
  }
  this.funcao2 = function(){
    if(numero > 5){
      this.funcao1()
    }
  }
}

const valores = new Valores([5,1,2], 6)
valores.funcao1()
valores.funcao2()
