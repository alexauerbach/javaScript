/*
Operador E
v e v -> v
v e f -> f
f e f -> f
f e v -> f

Operador OU
v ou v -> v
v ou f -> v
f ou f -> v
f ou v -> f

Operador OU EXCLUSIVO
v xor v -> f
v xor f -> v
f xor f -> f
f xor v -> v

Operador NÃO
!v -> f
!f -> v
*/

function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32xor = !!(trabalho1 ^ trabalho2); //bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const saudavel = !comprarSorvete;

  return {comprarSorvete: comprarSorvete, comprarTv50,comprarTv32xor,comprarTv32,saudavel};
}

console.log(compras(true,true))
