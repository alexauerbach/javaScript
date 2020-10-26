const peso1 = 1;
const peso2 = Number('2.0');

console.log(peso1, peso2);
//isInteger, pergunta se o valor é inteiro
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.871;
const avaliacao2 = 6.777;
const media = avaliacao1 * avaliacao2 / 2;

//fixa o valor real em x casas após a virgula (nesse exemplo x = 2)
console.log(media.toFixed(2));
//converte para texto, caso x >= 2 a conversão sera para binarios (x = 2)
console.log(media.toString(2));

console.log(7/0)
var a = 1
var b = 0
var result = a/b
//nenhum número pode ser divido por 0, pois se tornaria infinito
console.log(result)
