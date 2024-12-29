import {Caixa, InformacaoPersonagem, Inventario} from './estilo'

import {useState, useEffect} from 'react'
import { useSistema } from '../../sistema/mundo'
import { Icons } from '../../estilos/assests/Icons'

function JogadorFicha({estado}: {estado?: string}){
  const {Vida, Voltar,Anotacao}= Icons()

    return (
      <Caixa className='FichaPersonagem'>
        <InformacaoPersonagem>
          <div>
            <h1>Avalone Carvalho</h1>
            <div className='vidaPersonagem'>
              <span>10/10</span>
              <span></span>
            </div>
          </div>
        </InformacaoPersonagem>
        <Inventario>
          <div>
            <p>Força: <span>8</span></p>
            <p>Agilidade: <span>5</span></p>
            <p>Vigor: <span>3</span></p>
          </div>
          <div>
            <Anotacao tamanho={90}/>
          </div>
        </Inventario>
      </Caixa>
    )
  } 

export {
  JogadorFicha
}