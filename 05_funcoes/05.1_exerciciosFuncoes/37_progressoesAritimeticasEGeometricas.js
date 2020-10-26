function Progressao(n, a1, r){
  this.n = n
  this.a1 = a1
  this.r = r
  this.aritimetica = function(){
    let an = []
    an[0] = a1
    for(let i = 1; i < n; i++){
      an[i] = an[i - 1] + r
    }
    console.log(an)
  }
  this.geometrica = function(){
    let an = []
    an[0] = a1
    for(let i = 1; i < n; i++){
      an[i] = an[i - 1] * r
    }
    console.log(an)
  }
}

const progressao = new Progressao(4, 1, 2)
progressao.aritimetica()
progressao.geometrica()
