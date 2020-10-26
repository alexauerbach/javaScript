const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//metodo pop remove o ultimo elemento da lista
pilotos.pop()

//metodo push adiciona um elemento na ultima posição
pilotos.push('Verstappen')
console.log(pilotos)

//metodo shift remove o elemento da primeira posição
pilotos.shift()
console.log(pilotos)

//metodo unshift adiciona um elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

//metodo splice no primeiro indice (2) indica apartir de qual...
//indice devem ser feitas alterações.
//segundo indice (0) quantos elementos devem ser removidos.
//terceiro indice ('Botas', 'Massa') elementos que serão adicionados.
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//slice copia os valores apartir do indice desejado
const algunsPilotos1 = pilotos.slice(2)
console.log(pilotos)
console.log(algunsPilotos1)

//slice tambem pode copiar valores apartir do primeiro indice (1),
//e ir até um valor menor que o segundo indice (4).
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
