
//função pode receber valores e podem retornar ou não algo.
function soma(){
  let soma = 0;
  for(let i in arguments){
    soma += arguments[i];
  }
  return soma;
}
console.log(soma(1,2));


// estrategia para gerar um valor padrao em funcão
function soma1(a,b,c){
  a = a || 1;
  b = b || 1;
  c = c || 1;
}

function soma2 (a,b,c){
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1
  //forma mais segura de definir valor padrão
  c = isNaN(c) ? 1 : c
}

//forma atual e mais segura
function soma3 (a = 1, b = 1, c = 1){
  return console.log(a,b,c);
}
