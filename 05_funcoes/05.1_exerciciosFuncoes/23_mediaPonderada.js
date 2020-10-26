function Aluno(codigo, a, b, c){
  this.codigo = codigo
  this.a = a
  this.b = b
  this.c = c

  this.media = function(){
    do{
      let pesoA = 0
      let pesoB = 0
      let pesoC = 0

      if(a >= b && a >= c){
        pesoA = 4
      }else if(b >= a && b >= c){
        pesoB = 4
      }else if(c >= a && c >= b){
        pesoC = 4
      }

      if(pesoA == 4){
        pesoB = 3
        pesoC = 3
      }else if(pesoB == 4){
        pesoA = 3
        pesoC = 3
      }else if(pesoC == 4){
        pesoA = 3
        pesoB = 3
      }

      let mediaPonderada = (a*pesoA + b*pesoB + c*pesoC) / (pesoA + pesoB + pesoC)

      if(mediaPonderada >= 5){
        console.log(`Código: ${codigo}, Nota 1: ${a}, Nota 2: ${b}, Nota 3: ${c}, Média Ponderada: ${mediaPonderada}, Aluno Aprovado.`)
      }else{
        console.log(`Código: ${codigo}, Nota 1: ${a}, Nota 2: ${b}, Nota 3: ${c}, Média Ponderada: ${mediaPonderada}, Aluno Reprovado.`)
      }

      codigo--
    }while(codigo != -1)
  }
}

const aluno = new Aluno(10, 2,5,5)
aluno.media()
