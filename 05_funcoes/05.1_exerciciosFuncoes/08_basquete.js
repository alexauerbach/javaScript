function Jogos(jogos){
  this.jogos = jogos
  let pontos = []

  this.baterRecords = function(){
    let newRecord = ""
    let vezesRecord = ""
    let menorRecord = ""
    for(var n = 0; n < this.jogos; n++){
      if(newRecord == ""){
        newRecord = this.pontos[n]
        vezesRecord = 0
        menorRecord = this.pontos[n]
      }else{
        if(newRecord < this.pontos[n]){
          newRecord = this.pontos[n]
          vezesRecord ++
        }else if(newRecord >= this.pontos[n]){
          if(menorRecord >= this.pontos[n]){
            menorRecord = this.pontos[n]
          }
        }
      }
    }
    let jogoMenorPont = this.pontos.indexOf(menorRecord) + 1
    console.log(vezesRecord, jogoMenorPont)
  }
}

const jogos = new Jogos(9)
jogos.pontos = [10,20,20,8,25,3,0,30,1]
jogos.baterRecords()
