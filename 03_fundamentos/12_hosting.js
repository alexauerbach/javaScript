
//hosting é quando a variável sofre um inçamento de uma variável
//ainda não declarada.
//Nesta primeira linha ele procura a variável e reconhece que ela existe,
//porém ainda não foi definida
console.log('a = ', a);
//Na segunda linha a variável recebe um valor (2).
var a = 2;
//Na terceira linha a variável apresenta o valor (2).
console.log('a = ', a);

//Segue o mesmo exemplo sem criar a variável na linha abaixo.
console.log('b = ', b);
//var b = 2;
//console.log('b = ', b);

//exemplo utilizando let e const
console.log('c = ', c, ', d = ', d);
const c = 1
let d = 2
console.log('c = ', c, ', d = ', d);
