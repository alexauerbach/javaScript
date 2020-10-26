let aprovados = new Array('Bia','Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)
console.log(aprovados[8] === undefined)

//Splice, primeiro indice (1) é apartir de qual indice fazer algo...
//segundo indice (2) quantos valores devem ser excluidos apartir desse indice...
//terceiro indice ('Carol') são os valores a serem adicionados apartir do indice 1.
aprovados.splice(1, 2, 'Carol')
