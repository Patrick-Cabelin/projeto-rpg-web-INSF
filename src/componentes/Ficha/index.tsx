import {Criacao, Atributos} from './estilo'
import { Personagem } from '../../sistema/interfaces/interfaces'


import {useState, useEffect} from 'react'

function Ficha(){

  const pontosIniciais = 10
  const [pontos, setPontos]= useState(pontosIniciais)
  const [forca,setForca]= useState(0)
  const [agilidade,setAgilidade]= useState(0)
  const [vigor,setVigor]= useState(0)
  const [nome,setNome]= useState('')
  const [vida, setVida]= useState(0)





  function informacaoDaFicha(evento:React.FormEvent){
    evento.preventDefault()

    const vidaCalculada = forca + agilidade + vigor;
    setVida(vidaCalculada)
    
    if (pontos <= 0){
      const informacaoDoPersonagem:Personagem= {
        nome:nome,
        vida: vidaCalculada,
        atributos:{
          forca,
          agilidade,
          vigor
        }
      }
    
    }

    console.log(pontos,
      forca,
      agilidade,
      vigor,
      nome,
      vida)
  }

  function modificarFicha(atributo:string){
    
    if (pontos > 0 ){
      switch (atributo){
        case 'forca' :
          setForca(forca+1)
          console.log(pontos,'atribu')
          break
        case 'agilidade':
          setAgilidade(agilidade+1)
          break
        case 'vigor':
          setVigor(vigor+1)
          break
      }

    }
    
  }
  
  return (
    <Criacao onSubmit={informacaoDaFicha}>
          <div>
            <h1><input type="text" placeholder='Sobrevivente' onChange={(e)=>{setNome(e.target.value)}}/></h1>
            <span></span>
          </div>

        <Atributos>
          <div>
            <p>pontos para gastar: <span>{pontos}</span></p>

            <div>
              <label>Força: </label>
              <div>
                <button
                  type="button"
                  onClick={() => modificarFicha('forca')}
                >
                  +
                </button>
                <span>{forca}</span>
                <button
                  type="button"
                  onClick={() => {
                    if (forca > 0) {
                     console.log('-')
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>

            <div>
                <label>Agilidade: </label>
              <div>
                <button
                  type="button"
                  onClick={() => modificarFicha('agilidade')}
                >
                  +
                </button>
                <span>{agilidade}</span>
                <button
                  type="button"
                  onClick={() => {
                    if (agilidade > 0) {
                      setForca(agilidade - 1)
                      setPontos(pontos + 1)
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>

            <div>
                <label>Vigor: </label>
              <div>
                <button
                  type="button"
                  onClick={() => modificarFicha('vigor')}
                >
                  +
                </button>
                <span>{vigor}</span>
                <button
                  type="button"
                  onClick={() => {
                    if (forca > 0) {
                      setForca(forca - 1)
                      setPontos(pontos + 1)
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>

          </div>
        </Atributos>
        
        <div>
          <button><p>CRIAR FICHA</p></button>
        </div>
    </Criacao>
  )

}

export {
  Ficha
}
