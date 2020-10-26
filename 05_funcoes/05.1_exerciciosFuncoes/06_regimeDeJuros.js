function Juros(capitalIncial, taxaJuros, tempoAplicacao){
  this.capitalInicial = capitalIncial
  this.taxaJuros = taxaJuros
  this.tempoAplicacao = tempoAplicacao

  this.jusrosSimples = function(){
    for(var mes = 1; mes<=tempoAplicacao; mes++){
      console.log(`${mes}: ${capitalIncial + taxaJuros}`)
    }
  }

  this.jurosComposto = function(){
    for (var mes = 1; mes<=tempoAplicacao; mes++){
      capitalIncial +=taxaJuros
      console.log(`${mes}: ${capitalIncial}`)
    }
  }
}

const juros = new Juros(10, 1, 5)
console.log("Juros Simples")
juros.jusrosSimples()
console.log("Jursos Composto")
juros.jurosComposto()
