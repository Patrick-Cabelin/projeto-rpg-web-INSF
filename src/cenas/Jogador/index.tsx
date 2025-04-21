import {Caixa, InformacaoPersonagem, Atributos, Inventario} from './estilo'

import {useState, useEffect} from 'react'

import { Icons } from '../../estilos/assests/Icons'
import { Menu } from '../../componentes/Menu'
import tema from '../../estilos/tema'

import { useDispatch, useSelector } from 'react-redux'
import { pesquisarFicha} from '../../sistema/gerenciamento/mecanicas/personagem'
import { RootState } from '../../sistema/gerenciamento/memoria'
import { listagem } from '../../sistema/gerenciamento/mecanicas/inventario'

function JogadorFicha(){
  const {Vida}= Icons()
  const [nome, setNome] = useState<string>('')
  const [forca, setForca] = useState<number>(0)
  const [agilidade, setAgilidade] = useState<number>(0)
  const [vigor, setVigor] = useState<number>(0)
  const [vidaInicial, setVidaInicial] = useState<number>(0)
  const [vidaAtual, setVidaAtual] = useState<number>(0)

  const dispatch = useDispatch()
  const Ficha= useSelector((estado:RootState)=> estado.personagem.haFicha!)
  let Itens= useSelector((estado: RootState)=> estado.inventario.itens)

  
  function INVENTARIO (acao){
    switch (acao){
      case "BUSCA":
        dispatch(listagem())
        
      default:
        break
      }
  }
  
  let itensListados =  ()=>{
      return (Itens?.map(item=>{
        return(
          <li>
            <strong>{item.quantidade}</strong> <span>{item.nome}</span>
          </li>
        )
      })
    )
  }

  useEffect(()=>{
    dispatch(pesquisarFicha())
    setNome(Ficha.nome)
    setForca(Ficha.atributos.forca)
    setAgilidade(Ficha.atributos.agilidade)
    setVigor(Ficha.atributos.vigor)
    setVidaInicial(Ficha.vida)
    INVENTARIO('BUSCA')
  },[dispatch])

  useEffect(()=>{
    setVidaAtual(Ficha.vida)
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

        <Inventario onClick={(evento)=>{ INVENTARIO}}>
          <h2>Minhas coisas</h2>
          <ul>
            {itensListados()}
          </ul>
        </Inventario>
      </Caixa>
    )
  } 

export {
  JogadorFicha
}