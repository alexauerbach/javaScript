const escola = "Colar"

// charAt(x) retorna o caracter solicitado, onde começa em 0. Exemplo(x = 4)
console.log(escola.charAt(4))
//se pedir um valor alem do numero de caracteres da palavra, retorna null ou vazio
console.log(escola.charAt(5))
//retorna o valor unicode do caracter na casa selecionada
console.log(escola.charCodeAt(3))
//retorna onde x esta dentro da string. Exemplo(x = 'C')
console.log(escola.indexOf('C'))
//conta apartir do valor x. Exemplo (x = 1)
console.log(escola.substring(1))
//vai do valor x até uma casa antes de y. Exemplo (x = 0, y = 2)
console.log(escola.substring(0, 2))
// para concatenar valores em uma frase
console.log('Escola ' .concat(escola).concat("!"))
// concatenar de forma mais resumida
console.log('Escola', escola)
//troca o valor x, pelo valor y. Exemplo (x = 'a', y = '4')
console.log(escola.replace('a', '4'))
//deixa todas letras em maisculas
console.log(escola.toUpperCase())
//deixa todas letras minusculas
console.log(escola.toLowerCase())
//gerar array list com um delitador x. Exemplo(x = ',')
console.log('Ana,Maria,Pedro'.split(','))
