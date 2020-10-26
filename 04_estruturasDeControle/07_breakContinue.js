//break ou continue agem em blocos como: for, while e switch.

const nums = [0,1,2,3,4,5,6,7,8,9,10];

//break interrompe ao chegar no indicado.
for (let x in nums){
  if (x == 5){
    break;
  }
  console.log(`${x} = ${nums[x]}`);
}

//continue interrompe somente o indice desejado.
for (let y in nums){
  if (y == 5){
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
}
