/*100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80*/

function Cardapio(codigo, quant){
  this.codigo = codigo
  this.quant = quant
  this.calcular = function(){
      switch (codigo) {
        case 100:
          console.log(`${codigo}: Cachorro Quente, Quant: ${quant}, Valor Total: R$${(quant * 3.00).toFixed(2).replace(".",",")}`)
          break;
          case 200:
            console.log(`${codigo}: Hambúrguer Simples, Quant: ${quant}, Valor Total: R$${(quant * 4.00).toFixed(2).replace(".",",")}`)
            break;
            case 300:
              console.log(`${codigo}: Cheeseburguer, Quant: ${quant}, Valor Total: R$${(quant * 5.50).toFixed(2).replace(".",",")}`)
              break;
              case 400:
                console.log(`${codigo}: Bauru, Quant: ${quant}, Valor Total: R$${(quant * 7.50).toFixed(2).replace(".",",")}`)
                break;
                case 500:
                  console.log(`${codigo}: Refrigerante, Quant: ${quant}, Valor Total: R$${(quant * 3.50).toFixed(2).replace(".",",")}`)
                  break;
                  case 600:
                    console.log(`${codigo}: Suco, Quant: ${quant}, Valor Total: R$${(quant * 2.80).toFixed(2).replace(".",",")}`)
                    break;
        default:
          console.log("Produto não existente.")
          break
      }
  }
}

const cardapio = new Cardapio(200, 2)
cardapio.calcular()
