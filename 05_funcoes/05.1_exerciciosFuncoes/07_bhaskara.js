function Bhaskara(ax2, bx, c){
  this.ax2 = ax2
  this.bx = bx
  this.c = c

  this.delta = function(){
    let delta = Math.pow(bx, 2) - 4 * ax2 * c
    console.log(delta)
    if(delta >= 0){
      let vetor = [(- bx + Math.sqrt(delta)) / (2 * ax2),
        (- bx - Math.sqrt(delta)) / (2 * ax2)]
      console.log(vetor[0], vetor[1])
    }else{
      console.log("Delta é negativo.")
    }
  }
}

const bhas = new Bhaskara(3, -5, 12)
bhas.delta()
