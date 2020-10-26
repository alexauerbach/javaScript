function tratarErroELancar(erro){
//  throw 'erro'
  throw new Error('...')
}

function impNomeGrit(obj){
  try{
    console.log(obj.naoe.toUpperCase() + '!!!')
  } catch(e){
    tratarErroELancar(e)
  }
}

const obj = {name: 'Roberto'}
impNomeGrit(obj)
