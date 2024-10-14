import {useState, useEffect} from 'react'
import { Personagem } from '../../sistema/interfaces/interfaces'
import {useSistema} from '../../sistema/mundo'
import {Form} from './estilo'

function Ficha(){
  const {encontrarFicha} = useSistema()
  const pontosIniciais = 20
  const [pontos, setPontos]= useState(pontosIniciais)
  const [mecanica,setMecanica]= useState(0)
  const [sabedoria,setSabedoria]= useState(0)
  const [energia,setEnergia]= useState(0)
  const [nome,setNome]= useState('')

  function informacaoDaFicha(evento:React.FormEvent){
    evento.preventDefault()
    if (pontos <= 0){
      montarFicha()
    }
    function montarFicha(){
      const informacaoDoPersonagem:Personagem= {
        nome:nome,
        mestre: '',
        atributos:{
          mecanica,
          sabedoria,
          energia
        }
      }

      encontrarFicha({ficha: informacaoDoPersonagem})      
    }
    
    
  }


  return (
    <Form onSubmit={informacaoDaFicha} >
      <div>
        <div>
          <label>Nome do Personagem: </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label>Mecânica ({mecanica}): </label>
          <button
            type="button"
            onClick={() => {
              if (pontos > 0) {
                setMecanica(mecanica + 1)
                setPontos(pontos - 1)
              }
            }}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              if (mecanica > 0) {
                setMecanica(mecanica - 1)
                setPontos(pontos + 1)
              }
            }}
          >
            -
          </button>
        </div>
        <div>
          <label>Sabedoria ({sabedoria}): </label>
          <button
            type="button"
            onClick={() => {
              if (pontos > 0) {
                setSabedoria(sabedoria + 1)
                setPontos(pontos - 1)
              }
            }}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              if (sabedoria > 0) {
                setSabedoria(sabedoria - 1)
                setPontos(pontos + 1)
              }
            }}
          >
            -
          </button>
        </div>
        <div>
          <label>Energia ({energia}): </label>
          <button
            type="button"
            onClick={() => {
              if (pontos > 0) {
                setEnergia(energia + 1)
                setPontos(pontos - 1)
              }
            }}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              if (energia > 0) {
                setEnergia(energia - 1)
                setPontos(pontos + 1)
              }
            }}
          >
            -
          </button>
        </div>
        <div>
          <p>Pontos restantes: {pontos}</p>
        </div>
        <button type="submit">Criar Ficha</button>
      </div>
    </Form>
  )
}

export {
  Ficha
}