function Aluno(nota){
  this.nota = nota
  this.situacao = function(){
    let i = 0
    if(nota >= 37){
      for(i = 0; i < nota; i += 5){
      }
      i -= nota
      if (i<=2){
        nota = (Math.round(nota / 5))*5
      }
    }
    if(nota >= 40){
      console.log(`Nota: ${nota}, situação: APROVADO!`)
    }else{
      console.log(`Nota: ${nota}, situação: REPROVADO!`)
    }
  }
}

const aluno = new Aluno(40)
aluno.situacao()
