const [a,b,c,d] = [3,5,1,15];

//operador binario, pois calcula de dois em dois
const soma = a+b+c+d;

//modulo é o resto de divisão
//se a resposta for 0 o número é par
//se a resposta for 1 o número é impar
const modulo = a % 2;

console.log(soma, a);

//operador unario
let un = 1;
un++
console.log(un)


//operador ternario
const resultado = nota  => nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado(1));

//exponenciação normal
let exp = Math.pow(2, 3);
console.log(exp)

//exponenciação nova para o js
let exp2 = 2 ** 3;
console.log(exp2)
