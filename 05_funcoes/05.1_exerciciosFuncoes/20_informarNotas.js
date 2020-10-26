function DevolverNotas(valor){
  this.valor = valor
  let notaCem = 0
  let notaCinquenta = 0
  let notaDez = 0
  let notaCinco = 0
  let notaUm = 0

  this.calcular = function(){
    notaCem = Math.trunc(valor / 100)
    valor = valor - (Math.trunc(valor / 100) * 100)

    notaCinquenta = Math.trunc(valor / 50)
    valor = valor - (Math.trunc(valor / 50) * 50)

    notaDez = Math.trunc(valor / 10)
    valor = valor - (Math.trunc(valor / 10) * 10)

    notaCinco = Math.trunc(valor / 5)
    valor = valor - (Math.trunc(valor / 5) * 5)

    notaUm = Math.trunc(valor / 1)
    valor = valor - (Math.trunc(valor / 1) * 1)

    console.log(`${notaCem} nota(s): de R$100, ${notaCinquenta} nota(s): de R$50, ${notaDez} nota(s): de R$10, ${notaCinco} nota(s): de R$5, ${notaUm} nota(s): de R$1`)
    }
}

const devolver = new DevolverNotas(135)
devolver.calcular()
