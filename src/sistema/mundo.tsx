import React, {useState, useEffect, useContext, createContext, ReactNode} from 'react'
import {PersonagemProps,Personagem} from './interfaces/interfaces'


const sistemaContexto: React.Context<{}> = createContext({})

function Sistema({ children }: { children: ReactNode }){
  const [ personagemFicha , setPersonagemFicha ] = useState<Personagem | null>(null)

  function encontrarFicha({ficha}:{ficha:Personagem}){
    localStorage.setItem('@personagemFicha',JSON.stringify(ficha))
  }
  
  function Teste(nivel:number, sucessoMinimo:number){
    let paradaDeDados:number
    let valoresDados:number[]= []
    
    function rolagem(quantidadeDeDados:number){
      paradaDeDados = quantidadeDeDados
      let valorDoDado:number

      do{
        valorDoDado = Math.floor(Math.random()*10)+1
        valoresDados.push(valorDoDado)
        paradaDeDados--
      }
      while(paradaDeDados !=0)
      
     
    }

    function sucessoOuFalha(){
      const sucesso = valoresDados.filter(dado => dado >= nivel)
      console.log(sucesso, 'quantos foi? de:', valoresDados)
      if (sucesso.length >= sucessoMinimo){
        return true
      }
      return false
    }

    function mecanica(){  
      rolagem(personagemFicha.atributos.mecanica)
      const sucesso_ou_Falha = sucessoOuFalha()      
      return sucesso_ou_Falha
    }

    function sabedoria(){
      rolagem(personagemFicha.atributos.sabedoria)
      const sucesso_ou_Falha = sucessoOuFalha()      
      return sucesso_ou_Falha
    }

    function energia(){
      rolagem(personagemFicha.atributos.energia)
      const sucesso_ou_Falha = sucessoOuFalha()      
      return sucesso_ou_Falha
    }

    return{
      mecanica,
      sabedoria,
      energia
    }
  }

  useEffect(()=>{
    const personagemFicha = localStorage.getItem('@personagemFicha')
    if(personagemFicha){
      setPersonagemFicha(JSON.parse(personagemFicha))
    }
  },[])
  return(
    <sistemaContexto.Provider value={{
      encontrarFicha,
      personagemFicha,
      Teste,
    }}>
      {children}
    </sistemaContexto.Provider>
  )
}



function useSistema(){
  const contexto= useContext(sistemaContexto)
  return contexto
}

export { useSistema, Sistema }
