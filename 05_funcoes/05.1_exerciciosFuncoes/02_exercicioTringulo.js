function Triangulo(a, b, c){
  this.a = a
  this.b = b
  this.c = c

  this.tipo = function(){
    if(this.a == this.b && this.a == this.c){
      console.log("Equilátero, 3 lados iguais")
    }else if((a == b && a != c) || (b == c && b != a) || (c == a && c != b)){
      console.log("Isósceles, 2 lados iguais")
    }else{
      console.log("Escaleno, nenhum lado igal")
    }
  }
}

const tri = new Triangulo(2,1,3)
tri.tipo()
