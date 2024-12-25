import {useState, useEffect, useContext, createContext, ReactNode} from 'react'
import {Personagem, SistemaContextoProps} from './interfaces/interfaces' 


const sistemaContexto = createContext<SistemaContextoProps|undefined>(undefined)

function Sistema({ children }: { children: ReactNode }){
  const [ personagemFicha , setPersonagemFicha ] = useState<Personagem|null>(null)

  function encontrarFicha(ficha:Personagem){
    setPersonagemFicha(ficha)
    localStorage.setItem('@personagemFicha',JSON.stringify(ficha))
  }

  useEffect(()=>{
    const personagemFicha = localStorage.getItem('@personagemFicha')
    if(personagemFicha){
      try {
        const fichaConvertida = JSON.parse(personagemFicha)
        if (fichaConvertida?.atributos) return setPersonagemFicha(fichaConvertida)
      } catch (error) {
        console.warn(error, 'erro no encontro')
      }
    }
  },[])

  return(
    <sistemaContexto.Provider value={{
      encontrarFicha,
      personagemFicha,
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
