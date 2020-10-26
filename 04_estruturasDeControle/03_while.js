
//função para gerar um número aleatorio
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//console.log(getInteiroAleatorioEntre(10, 1))

let opcao = 0
while (opcao != 1){
  opcao = getInteiroAleatorioEntre(1,10)
  console.log(opcao)
}
