import { Ficha } from './componentes/Ficha'
import { FichaDePersonagem } from './componentes/FichaPersonagem'


function App() {
  const PersonagemFicha = localStorage.getItem('@personagemFicha')
  
  return (
     <main>
       {
        PersonagemFicha? <FichaDePersonagem/> :<Ficha/> 
       }
     </main>
  )
}


export{
  App
}
