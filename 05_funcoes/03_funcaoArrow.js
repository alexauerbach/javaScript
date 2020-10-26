//variavel recebendo uma função
let dobro = function (a) {
  return 2 * a;
}

//function substituido por arrow (=>).
dobro = (a) => {
  return 2 * a;
}

//função arrow
dobro = a => 2 * a;

console.log(dobro(4))

//criando uma variavel que recebe uma função arrow
let calc = a => 2 + a;
console.log(calc(1))
