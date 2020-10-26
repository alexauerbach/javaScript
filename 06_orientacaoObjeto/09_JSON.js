const obj = { a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

//formatos invalidos para transformar JSON em Objeto.
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

//objeto gerado apartir de um JSON (texto)
//atributo tem que estar entre aspas duplas,
//o texto todo deve estar entre aspas simples.
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

//exemplos de como devem ser chamadas os diferentes tipos de...
//variaveis em JSON.
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))
