import {Caixa, Inventario} from './estilo'

import {useState, useEffect} from 'react'

import { Icons } from '../../estilos/assests/Icons'
import tema from '../../estilos/tema'

import { useDispatch, useSelector } from 'react-redux'
import { pesquisarFicha} from '../../sistema/gerenciamento/mecanicas/personagem'
import { RootState } from '../../sistema/gerenciamento/memoria'
import { listagem } from '../../sistema/gerenciamento/mecanicas/inventario'
import { criarInimigo, modificarFicha, pesquisarFichaInimigo, testeVigor } from '../../sistema/gerenciamento/mecanicas/inimigos'

function Combate(){
  const {Vida}= Icons()
  const [vidaAtual, setVidaAtual] = useState<number>(0)
  const [vidaAtualInimigo, setVidaAtualInimigo] = useState<number>(0)

  const dispatch = useDispatch()
  const Ficha= useSelector((estado:RootState)=> estado.personagem.haFicha!)
  let Itens= useSelector((estado: RootState)=> estado.inventario.itens)
  let Mundo= useSelector((estado: RootState)=> estado.mundo.dificuldade)
  let inimigo= useSelector((estado: RootState)=> estado.inimigo.fichaInimigo)

  const Inimigo = {
    nome: "Androide Corrompido",
    vida: 65,
    atributos: {
      forca: 7,
      agilidade: 5,
      vigor: 6
    },
    inventario: [
      {
        id: 5,
        nome: "Bateria Instável",
        quantidade: 1,
        tipo: "cura",
        valor: 25,
        eConsumivel: true
      }
    ]
  }
  
  function CriandoInimigo(){
    dispatch(criarInimigo(Inimigo))
    dispatch(pesquisarFichaInimigo())
    
  }
  
  function TesteAtaque(){
    const i = Ficha.atributos.forca
    let dadosJogados= []
    for (let index = i; index > 0; index--) {
      let dadoLancado= Math.ceil(Math.random()*10)
      let resultado = dadoLancado>Mundo? dadosJogados.push(dadoLancado):0
    }
    return dadosJogados.length
  }

  function TesteDefesa(){
    const i = Ficha.atributos.agilidade
    let dadosJogados= []
    for (let index = i; index > 0; index--) {
      let dadoLancado= Math.ceil(Math.random()*10)
      let resultado = dadoLancado>Mundo? dadosJogados.push(dadoLancado):0
    }
    return dadosJogados.length
  }

  function Atacando(){
    let resultado = TesteAtaque()
    let testeInimigo= TesteDefesa()
    if(resultado > testeInimigo){
     let resultadoVigor=  dispatch(testeVigor(resultado)).payload
      setVidaAtualInimigo(Math.abs(resultadoVigor - inimigo.vida))
      dispatch(modificarFicha({tipo: 'dano', valor: 3}))
    }

  }

  function INVENTARIO (acao: string){
    const tipoDaAcao= acao
    switch (tipoDaAcao){
      case "busca":
        dispatch(listagem())
        break
        case "dano":
          Atacando()
          dispatch(pesquisarFichaInimigo())
          break
          case "cura":
        break
      default:
        break
      }
  }
  
  let itensListados =  ()=>{
      return (Itens?.map(item=>{
        return(
          <li onClick={()=>{INVENTARIO(String(item.tipo))}}>
            <strong>{item.quantidade}</strong> <span>{item.nome}</span>
          </li>
        )
      })
    )
  }

  let itensInimigo =  ()=>{
      return (Inimigo.inventario?.map(item=>{
        return(
          <li onClick={()=>{INVENTARIO(item.tipo)}}>
            <strong>{item.quantidade}</strong> <span>{item.nome}</span>
          </li>
        )
      })
    )
  }

  useEffect(()=>{
    INVENTARIO('busca')
    CriandoInimigo()
    dispatch(pesquisarFicha())
    setVidaAtualInimigo(inimigo.vida)
  },[dispatch])

  useEffect(()=>{
    
  },[vidaAtualInimigo])
  
    return (
      <Caixa className='quadroDeCombate'>
       <div className="quadroPersonagemPJ">
        <div className='info'>
                <div>
                        <p>{Ficha?.nome}</p>
                    <div className='vidaPersonagem'>
                        <span><strong>{Ficha?.vida}</strong>/{Ficha?.vida}</span>
                        <Vida tamanho={50} cor={tema.CORES.VERMELHO }/>
                    </div>
                </div>
                <div>
                <div>
                    <p>Força <span>{Ficha?.atributos.forca}</span></p>
                    <p>Agilidade <span>{Ficha?.atributos.agilidade}</span></p>
                    <p>Vigor <span>{Ficha?.atributos.vigor}</span></p>
                </div>
                <Inventario>
                    <h2>inventario</h2>
                    {itensListados()}
                </Inventario>
            </div>
        </div>
       </div>
       <div className="quadroPersonagemNPC">
        {inimigo && 
       <div className='info'>
          <div>
          <p>{Inimigo?.nome}</p>
          <div className='vidaPersonagem'>
              <span><strong>{vidaAtualInimigo}</strong>/{inimigo?.vida}</span>
              <Vida tamanho={50} cor={tema.CORES.VERMELHO }/>
          </div>
          </div>
          <div>
          <div>
            <p>Força <span>{inimigo?.atributos?.forca ?? '-'}</span></p>
            <p>Agilidade <span>{inimigo?.atributos?.agilidade ?? '-'}</span></p>
            <p>Vigor <span>{inimigo?.atributos?.vigor ?? '-'}</span></p>
          </div>
          

            <Inventario>
                <h2>inventario</h2>
                {itensInimigo()}
            </Inventario>

        </div>
      </div>
        }
      </div>
      </Caixa>
    )
  } 

export {
  Combate
}

