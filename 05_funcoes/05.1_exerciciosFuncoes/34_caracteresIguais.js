function Caracter(palavra1, palavra2){
  this.palavra1 = palavra1
  this.palavra2 = palavra2

  this.comparar = function(){
    palavra1 = palavra1.toLowerCase()
    palavra2 = palavra2.toLowerCase()

    let letra
    let resultado = true

    let tamanhoPalavra = palavra1.length
    for(let i = 0; i < tamanhoPalavra; i++){
      letra = palavra1.charAt(i)
      if(palavra2.indexOf(letra) == -1){
        resultado = false
      }
    }
    tamanhoPalavra = palavra2.length
    for(let i = 0; i < tamanhoPalavra; i++){
      letra = palavra2.charAt(i)
      if(palavra1.indexOf(letra) == -1){
        resultado = false
      }
    }
    console.log(resultado)
  }
}

const caracter = new Caracter("alex", "alexi")
caracter.comparar()
