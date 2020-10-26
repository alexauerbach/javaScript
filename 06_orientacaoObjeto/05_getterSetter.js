
const sequencia = {
  _valor: 1, // conveção
  get valor(){ return this._valor++},
  set valor(valor) {
    if(valor > this.valor){
      this._valor = valor
    }
  }
}


//o JS não permite acessar um valor quando ele ja recebeu..
//um metodo get, mas como nesse exempo,
//o JS entende que é para chamar o metodo get
console.log(sequencia.valor, sequencia.valor)

//igual o get, o set é automaticamente chamado em JS,
//quando é alterado um valor.
sequencia.valor = 1000
sequencia.valor = 900
console.log(sequencia.valor)
