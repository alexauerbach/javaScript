
//var i = 0 (variável), i < 10 (condição), i++(incremento)
for(var i = 0; i < 10; i++){
  console.log(i);
}


const funcs = [];
for(let i = 0; i < 10; i++){
  //empurra o valor para dentro da variavel const
  funcs.push(function(){
    console.log(i);
  })
}

funcs[2]();
funcs[8]();
