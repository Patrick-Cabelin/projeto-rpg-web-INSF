import {Criacao, Atributos} from './estilo'

import { useSelector, useDispatch } from 'react-redux';
import {  modificarAtributo, criarFichaPersonagem } from '../../sistema/gerenciamento/mecanicas/personagem';
import { RootState } from '../../sistema/gerenciamento/memoria';
import { useEffect, useState } from 'react';
import { Personagem } from '../../sistema/interfaces/interfaces';


function Ficha(){
  const dispatch = useDispatch()
  const personagem = useSelector((state:RootState)=>state.personagem)
  const [ficha,setFicha] = useState<Personagem>()
  const [nome , setNome]= useState('')


  function criandoFicha(){
    const vida = personagem.atributos.forca + personagem.atributos.agilidade + personagem.atributos.vigor
    setFicha({
      nome,
      vida,
      atributos:{
        forca: personagem.atributos.forca,
        agilidade: personagem.atributos.agilidade,
        vigor: personagem.atributos.vigor
      }
    })
    
    
  }

  useEffect(()=>{
    if (ficha) dispatch(criarFichaPersonagem(ficha))
  },[ficha])
  return (
    <Criacao>
          <div>
            <h1><input
            type="text"  
            placeholder='sobrevivente'
            onChange={(e) => {setNome(e.target.value)} }/></h1>
          </div>

        <Atributos>
          <div> 
              <p>Pontos para gastar: <span>{personagem.pontosIniciais}</span></p>

              {['forca', 'agilidade', 'vigor'].map((atributo) => (
                <div key={atributo}>
                  <label>{atributo.toUpperCase()}: </label>

                  <div>
                    <button
                      type="button"
                      onClick={() => dispatch(modificarAtributo({ atributos: atributo as 'forca' | 'agilidade' | 'vigor', operacao: 'incrementar' }))}
                    >
                      +
                    </button>
                    <span>{personagem.atributos[atributo as keyof typeof personagem.atributos]}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(modificarAtributo({ atributos: atributo as 'forca' | 'agilidade' | 'vigor', operacao: 'decrementar' }))}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            </Atributos>
            
        <div>
          <button
            onClick={()=>{
                criandoFicha()
              }
            }><p>CRIAR FICHA</p></button>
        </div>
    </Criacao>
  )

}

export {
  Ficha
}
