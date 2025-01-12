import {Caixa, InformacaoPersonagem, Atributos, Inventario} from './estilo'

import {useState, useEffect} from 'react'

import { Icons } from '../../estilos/assests/Icons'
import { Menu } from '../../componentes/Menu'
import tema from '../../estilos/tema'

import { useDispatch, useSelector } from 'react-redux'
import {pesquisarFicha} from '../../sistema/gerenciamento/mecanicas/personagem'
import { RootState } from '../../sistema/gerenciamento/memoria'

function JogadorFicha(){
  const {Vida}= Icons()
  const [nome, setNome] = useState<string>('')
  const [forca, setForca] = useState<number>(0)
  const [agilidade, setAgilidade] = useState<number>(0)
  const [vigor, setVigor] = useState<number>(0)
  const [vidaInicial, setVidaInicial] = useState<number>(0)
  const [vidaAtual, setVidaAtual] = useState<number>(0)

  const dispatch = useDispatch()
  const Ficha= useSelector((estado:RootState)=> estado.personagem.haFicha)

  
  useEffect(()=>{
    dispatch(pesquisarFicha())
    setNome(Ficha.nome)
    setForca(Ficha.atributos.forca)
    setAgilidade(Ficha.atributos.agilidade)
    setVigor(Ficha.atributos.vigor)
    setVidaInicial(Ficha.vida)
  },[])

  useEffect(()=>{
    setVidaAtual(Ficha.vida-1)
  },[vidaAtual])
    return (
      <Caixa className='FichaPersonagem'>
        <InformacaoPersonagem>
          <div>
            <h1>{nome}</h1>
            <div className='vidaPersonagem'>
              <span>{vidaAtual}/{vidaInicial}</span>
              <Vida tamanho={40} cor={tema.CORES.VERMELHO }/>
            </div>
          </div>
        </InformacaoPersonagem>
        <Atributos>
          <div>
            <p>Força: <span>{forca}</span></p>
            <p>Agilidade: <span>{agilidade}</span></p>
            <p>Vigor: <span>{vigor}</span></p>
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