import React, {useState, useEffect, useContext, createContext, ReactNode} from 'react'
import {PersonagemProps,Personagem, SistemaContextoProps} from './interfaces/interfaces'


const sistemaContexto = createContext<SistemaContextoProps|undefined>(undefined)

function Sistema({ children }: { children: ReactNode }){
  const [ personagemFicha , setPersonagemFicha ] = useState<Personagem| null>(null)
  function encontrarFicha(ficha:Personagem){
    setPersonagemFicha(ficha)
    localStorage.setItem('@personagemFicha',JSON.stringify(ficha))

    }
  
  function Teste(nivel: number, sucessoMinimo: number): { mecanica: () => boolean; sabedoria: () => boolean; energia: () => boolean } {
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
      rolagem(personagemFicha?.atributos.mecanica ?? 0)
      return sucessoOuFalha()
    }

    function sabedoria(){
      rolagem(personagemFicha?.atributos.sabedoria ?? 0)
      return sucessoOuFalha()
    }

    function energia(){
      rolagem(personagemFicha?.atributos.energia ?? 0)
      return sucessoOuFalha()
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
      try {
        setPersonagemFicha(JSON.parse(personagemFicha) as Personagem)
      } catch (error) {
        console.log(error, 'erro no encontro')
      }
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
  if (!contexto) throw new Error('useSistema deve ser usado dentro de um <Sistema>')

  return contexto
}

export { useSistema, Sistema }
