import {Caixa, Inventario} from './estilo'

import {useState, useEffect} from 'react'

import { Icons } from '../../estilos/assests/Icons'
import tema from '../../estilos/tema'

import { useDispatch, useSelector } from 'react-redux'
import { modificarFicha, pesquisarFicha} from '../../sistema/gerenciamento/mecanicas/personagem'
import { RootState } from '../../sistema/gerenciamento/memoria'
import { listagem } from '../../sistema/gerenciamento/mecanicas/inventario'
import { criarInimigo, modificarFichaInimigo, pesquisarFichaInimigo } from '../../sistema/gerenciamento/mecanicas/inimigos'
import { FichaBasica } from '../../sistema/interfaces/interfaces'


function Combate(){
  const {Vida}= Icons()
  const [vidaPJ, setVidaPJ] = useState<number>(0)
  const [vidaAtualPJ, setVidaAtualPJ] = useState<number>(0)
  const [vidaAtualInimigo, setVidaAtualInimigo] = useState<number>(0)
  const [vidaInimigo, setVidaInimigo] = useState<number>(0)
  const [jogadaPJ, setJogadaPj] = useState<boolean>(false)
  const [resultadoVigorPJ,setResultadoVigorPJ]= useState<number>(0)
  const [resultadoVigorInimigo,setResultadoVigorInimigo]= useState<number>(0)
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

  let itensListados= ()=>{
    return (Itens?.map((item,index)=>{
    return(
      <li key={index} onClick={()=>{INVENTARIO(String(item.tipo))}}>
        <strong>{item.quantidade}</strong> <span>{item.nome}</span>
      </li>
    )
  })
    )
  }

  let itensInimigo= ()=>{
    return (Inimigo.inventario?.map((item, index)=>{
      return(
        <li key={index} onClick={()=>{INVENTARIO(item.tipo)}}>
          <strong>{item.quantidade}</strong> <span>{item.nome}</span>
        </li>
      )
    })
    )
  }

  function CriandoInimigo(){
    dispatch(criarInimigo(Inimigo))
    dispatch(pesquisarFichaInimigo())
    
  }

  function Atacando(){
    if(jogadaPJ) return
    let ficha
    let resultado = Testes(ficha=Ficha, 'forca')
    let testeInimigo= Testes(ficha=inimigo!, 'agilidade')
    if(resultado > testeInimigo){
       setResultadoVigorInimigo(Testes(ficha=inimigo!, 'vigor'))
      
     }
    setJogadaPj(true)
    setTimeout(()=>{
      dispatch(modificarFichaInimigo({tipo:'dano', valor:resultadoVigorInimigo}))
      AcaoInimigo()
    },1000)

    setTimeout(()=>{
      setJogadaPj(false)
    },2000)
  
  }

  function Testes(ficha: FichaBasica, atributo: 'forca' | 'agilidade' | 'vigor'): number {
    let dadosJogados: number[] = []
    let valor = ficha.atributos[atributo]
    for (let i = 0; i < valor; i++) {
      let dadoLancado = Math.ceil(Math.random() * 10)
      if (dadoLancado > Mundo) {
        dadosJogados.push(dadoLancado)
      }
    }   
    return dadosJogados.length;
  }

function AcaoInimigo(){
  if(jogadaPJ) return
    let ficha
    let resultado = Testes(ficha=inimigo!, 'forca')
    let testePJ= Testes(ficha=Ficha, 'agilidade')
    if(resultado > testePJ){
      setResultadoVigorPJ(Testes(ficha=Ficha, 'vigor'))
    }
    let a = dispatch(modificarFicha({tipo:'dano', valor:resultadoVigorPJ}))
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

  useEffect(()=>{
    dispatch(listagem())
    CriandoInimigo()
    dispatch(pesquisarFicha())
    setVidaInimigo(inimigo?.vida!)
    setVidaPJ(Ficha?.vida)
    setJogadaPj(false)
  },[])
  
  useEffect(()=>{
    if(inimigo)setVidaAtualInimigo(inimigo.vida)
    
      setVidaAtualPJ(Ficha?.vida)
  },[inimigo,Ficha])
  
    return (
      <Caixa className='quadroDeCombate'>
       <div className="quadroPersonagemPJ">
        <div className='info'>
                <div>
                        <p>{Ficha?.nome}</p>
                    <div className='vidaPersonagem'>
                        <span><strong>{vidaAtualPJ}</strong>/{vidaPJ}</span>
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
              <span><strong>{vidaAtualInimigo}</strong>/{ vidaInimigo}</span>
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

