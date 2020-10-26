//for in devolve o

const notas = [5,2,3,4,5,6]

//estrutura comum for percorrendo a lista
for(let i = 0; i < notas.length; i++){
  console.log(`nota = ${notas[i]}`)
}

//estrutura for in percorrendo um array
for (let i in notas){
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29
}

//estrutura for in percorrendo um objeto
for(let i in pessoa){
  console.log(`${i} = ${pessoa[i]}`)
}

for(let i in pessoa){
  console.log(i,' = ', pessoa[i])
}
