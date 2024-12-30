import {Caixa, InformacaoPersonagem, Atributos, Inventario} from './estilo'

import {useState, useEffect} from 'react'
import { useSistema } from '../../sistema/mundo'
import { Icons } from '../../estilos/assests/Icons'
import { Menu } from '../Menu'
import tema from '../../estilos/tema'

function JogadorFicha({estado}: {estado?: string}){
  const {Vida, Voltar,Anotacao}= Icons()

    return (
      <Caixa className='FichaPersonagem'>
        <InformacaoPersonagem>
          <div>
            <h1>Avalone Carvalho</h1>
            <div className='vidaPersonagem'>
              <span>10/10</span>
              <Vida tamanho={40} cor={tema.CORES.VERMELHO }/>
            </div>
          </div>
        </InformacaoPersonagem>
        <Atributos>
          <div>
            <p>Força: <span>8</span></p>
            <p>Agilidade: <span>5</span></p>
            <p>Vigor: <span>3</span></p>
          </div>
          <Menu/>
        </Atributos>

        <Inventario>
          <h2>Minhas coisas</h2>
          <ul>
            <li><span>{1}</span> faca</li>
            <li><span>{3}</span> lata de comida</li>
            <li><span>{4}</span> balas</li>
          </ul>
        </Inventario>
      </Caixa>
    )
  } 

export {
  JogadorFicha
}