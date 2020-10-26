function Vetores( vetor1 = [4], vetor2 = [4]){
  this.vetor1 = vetor1
  this.vetor2 = vetor2

  this.troca = function(){
    vetor1 = vetor1.concat(vetor2)
    let tamanho = vetor1.length/2
    for(let i = 0; i < tamanho; i++){
      vetor2[i] = vetor1[0]
      vetor1.shift()
    }
    console.log(vetor1, vetor2)
  }
}


const vetores = new Vetores([1,2,3],[6,7,8])
vetores.troca()
