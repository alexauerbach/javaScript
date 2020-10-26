const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
    //this chama a variavel do local q se encontra
      console.log(this.saudacao)
    }
}
pessoa.falar()

//Entra em conflito, pois o this se refere a pessoa naquele contexto.
const falar = pessoa.falar
//falar()

//bind responde para o contexto original (amarrando esse contexto inicial),
//diferente do this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


function Pessoa(){
  this.idade = 0

  //variavel contexto serve para facilitar o acesso ao this
  //mas optei por usar o .bind na linha 30
  //const contexto = this;
  setInterval(function(){
    this.idade++
    console.log(this.idade)
    //1000 milissegundos = 1 segundo
  }.bind(this), 1000)
}

new Pessoa
