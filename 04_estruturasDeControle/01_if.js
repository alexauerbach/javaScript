function resultMedia(nota){
  if(nota >= 7){
    console.log('Boa Noticia')
  }else if(nota >=6){
    console.log('Quase')
  }else{
    console.log('Deu Merda')
  }
}

resultMedia(10)
resultMedia(6.5)
resultMedia(5)
