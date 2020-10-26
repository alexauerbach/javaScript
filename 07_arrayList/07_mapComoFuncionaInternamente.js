
//como é feito a função map
Array.prototype.map2 = function(callback){
  const newArray = []
  for(let i  = 0; i < this.length; i++){
    newArray.push(callback(this.[i], i, this))
  }
  return newArray
}
