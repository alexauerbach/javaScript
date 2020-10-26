function aleatorio(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 1
do{
  opcao = aleatorio(1,11)
  console.log(opcao)
}while (opcao != 1)
