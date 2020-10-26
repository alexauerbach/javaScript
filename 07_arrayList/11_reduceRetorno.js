const alunos = [
  {nome: 'João', nota: 7.3, bolsista: true},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true},
]

//função para saber se todos alunos sao bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//função para saber se algum aluno é bolsista
const todosBolsistas2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
