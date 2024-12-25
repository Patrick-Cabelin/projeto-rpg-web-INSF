function Teste(nivel: number, sucessoMinimo: number): { mecanica: () => boolean[]; sabedoria: () => boolean; energia: () => boolean } {
    let valoresDados:number[]= []
    
    function rolagem(quantidadeDeDados: number): number[] {
      valoresDados = []
      const mediaAtributos= ((personagemFicha?.atributos.mecanica + personagemFicha?.atributos.sabedoria + personagemFicha?.atributos.energia)/3) * 0.05
      for (let i = 0; i < quantidadeDeDados; i++) {
        const valorDoDado = Math.floor(Math.random()**Math.cos(Math.random()*mediaAtributos)**1* 10) + 1
        console.log(valorDoDado, Math.floor(Math.random()**Math.cos(Math.random()*mediaAtributos)*10 ) )
        valoresDados.push(valorDoDado)
      }
      return valoresDados
    }

    function sucessoOuFalha(){
      const sucesso = valoresDados.filter(dado => dado >= nivel)
      if (sucesso.length >= sucessoMinimo){
        return true
      }
      return false
    }

    function mecanica(){  
      rolagem(personagemFicha?.atributos.mecanica ?? 0)
      let resultado= [sucessoOuFalha(), valoresDados]
      return resultado
    }

    function sabedoria(){
       rolagem(personagemFicha?.atributos.sabedoria ?? 0)
      let resultado= [sucessoOuFalha(), valoresDados]
      return resultado
    }

    function energia(){
      rolagem(personagemFicha?.atributos.energia ?? 0)
      let resultado= [sucessoOuFalha(), valoresDados]
      return resultado
    }

    return{
      mecanica,
      sabedoria,
      energia
    }
  }


  export {
    Teste
  }