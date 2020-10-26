let marido = {
  nome: "MARIDO",
  chegouMesmo: false,
  chegar: function(chegou){
    if(chegou == true){
      marido.chegouMesmo = true
      console.log(`${marido.nome}: Chegando do trabalho.`)
      porteiro.receber(true)
    }else{
      console.log(`${marido.nome}: Marido ainda esta no trabalho.`)
      porteiro.receber(false)
    }
  },
  surpreso: function(surpreendeu){
    if(surpreendeu == true){
      console.log(`${marido.nome}: Ohhh, nossa!!!`)
    }
  },
  cumprimentar: function(cumprimentou){
    if(cumprimentou == true){
      console.log(`${marido.nome}: Boa noite Outro Fulano.`)
    }
  }
}

let porteiro = {
  nome: "PORTEIRO",
  receber: function(recebeu){
    if(recebeu == true){
      console.log(`${porteiro.nome}: Boa noite Fulano.`)
      marido.cumprimentar(true)
      porteiro.avisar(true)
    }else{
      console.log(`${porteiro.nome}: Acho que ali é o Fulano chegando, melhor eu ja ir ligando para a Dona Fulana.`)
      porteiro.avisar(false)
    }
  },
  avisar: function(avisando){
    if(avisando == true){
      console.log(`${porteiro.nome}: Vou esperar ele sair.`)
      console.log(`${porteiro.nome}: Dona Fulana, seu marido chegou.`)
      esposa.atender(true)
    }else{
      console.log(`${porteiro.nome}: Dona Fulana, seu marido esta chegando.`)
      esposa.atender(true)
      porteiro.retornarAviso(true)
    }
  },
  retornarAviso: function(retornando){
    console.log(`${porteiro.nome}: Dona Fulana, foi alarme falso, me desculpe.`)
    esposa.atenderNovamente(true)
  }
}

let esposa = {
  nome: "ESPOSA",
  atender: function(atendeu){
    if(atendeu == true){
      console.log(`${esposa.nome}: Obrigado por me avisar.`)
      esposa.preparar(true)
    }
  },
  preparar: function(preparando){
    if(preparando == true){
      console.log(`${esposa.nome}: Todos se preparem, ele esta chegando!`)
      if(marido.chegouMesmo == true){
        console.log(`${esposa.nome}: SURPRESA!!!.`)
        marido.surpreso(true)
      }
    }
  },
  atenderNovamente: function(novamente){
    if(novamente == true)
    console.log(`${esposa.nome}: Tudo bem Outro Fulano, mas fique de olho se ele chegar.`)
    console.log(`${esposa.nome}: Alarme falso!`)
  }
}


//se o marido ja esta chegando em casa (true),
//caso ainda não esteja chegando em casa(false)
marido.chegar(true)
