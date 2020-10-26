function Crescimento (alt1, tax1, alt2, tax2){
  this.alt1 = alt1
  this.alt2 = alt2
  this.tax1 = tax1
  this.tax2 = tax2

  this.calcular = function(){
    let ano = 0

    if(alt1 == alt2){ //crianças com mesmo tamanho
      console.log("As crianças possuem a mesma altura")
    }else if(tax1 == tax2){ //crianças mesma taxa de altura
      if(alt1 > alt2){ //criança 1 maior que criança 2
        console.log("Criança 2 nunca será maior do que criança 1, pois possuem a mesma taxa de crescimento")
      }else{ // criança 2 maior que criança 1
        console.log("Criança 1 nunca será maior do que criança 2, pois possuem a mesma taxa de crescimento")
      }
    }else if(alt1 > alt2 && tax1 < tax2){ //criança 2 pode ser mair que a criança 1, em determinado ano
      do{
        alt1 = alt1 / 100 * tax1 + alt1
        alt2 = alt2 / 100 * tax2 + alt2
        ano++
      }while(alt2 < alt1)
      console.log(`A criança 2 será maior que a criança 1 em: ${ano}`)
    }else if(alt2 > alt1 && tax2 < tax1){ //criança 1 pode ser maior que a criança 2, em determinado ano
      do{
        alt1 = alt1 / 100 * tax1 + alt1
        alt2 = alt2 / 100 * tax2 + alt2
        ano++
      }while(alt1 < alt2)
      console.log(`A criança 1 será maior que a criança 2 em: ${ano}`)
    }
  }
}

const crescimento = new Crescimento(120, 10, 110, 20)
crescimento.calcular()
