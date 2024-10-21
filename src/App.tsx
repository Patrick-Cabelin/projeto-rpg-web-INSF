
import { Ficha } from './componentes/Ficha'
import { FichaDePersonagem } from './componentes/FichaPersonagem'
import { InimigoFicha } from './componentes/Inimigo'
import { InterfaceApp } from './estilos/appEstilo'

import { useSistema } from './sistema/mundo'

import { useState, useEffect } from 'react' 

function App() {
  const [estadoAtual, setEstadoAtual] = useState('')
  const [presencaNpc, setPresencaNpc] = useState(false)
  const [verificar, SetVerificar]= useState()
  const {Verificacao}= useSistema()
  const PersonagemFicha = localStorage.getItem('@personagemFicha')

  function verificadora(evento: React.MouseEvent<HTMLDivElement, MouseEvent>){
    const divElement = evento.currentTarget
    const SpawnNpcs = divElement.children[1]
    if (SpawnNpcs && SpawnNpcs.children.length > 0) {
      const primeiroNpc = SpawnNpcs.children[0].classList[2]
      if(primeiroNpc === 'inimigo') setPresencaNpc(true)
      }else {
      setPresencaNpc(false)
    }
    
    if(presencaNpc){
      combate()
    }else{
      console.log(estadoAtual,999)
      setEstadoAtual('exploração')
    }
  }

  function combate(){
    setEstadoAtual('Combate')
    Verificacao(estadoAtual)
    return estadoAtual
  }

  useEffect(()=>{
    
  }, [estadoAtual])
  return (
     <InterfaceApp onClick={(evento)=>verificadora(evento)}>
       {
        PersonagemFicha? <FichaDePersonagem estado={estadoAtual} /> :<Ficha/> 
       }

       <div >
        {
          <InimigoFicha/>
        }
       </div>
     </InterfaceApp>
  )
}


export{
  App
}
