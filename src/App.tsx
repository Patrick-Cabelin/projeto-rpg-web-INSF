import { Route, Switch } from 'wouter'

import { JogadorFicha } from './cenas/Jogador'
import { Combate } from './cenas/Combate'
import { Mapa } from './cenas/Mapa'
import { Anotacao } from './cenas/Anotacoes'
import { EventoLocal } from './cenas/EventoLocal'
import {Ficha} from './componentes/Ficha'

import { useEffect } from 'react'
import { pesquisarFicha } from './sistema/gerenciamento/mecanicas/personagem'
import {  } from './sistema/gerenciamento/mecanicas/mundo'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './sistema/gerenciamento/memoria'


function App() {
  const dispatch = useDispatch()
  const existeFicha= useSelector((estado:RootState)=> estado.personagem.haFicha)


  
  useEffect(()=>{
    dispatch(pesquisarFicha())
  },[dispatch])
  return (
    <Switch>
      {
        existeFicha?<Route path={'/'} component={JogadorFicha}/>:<Route path={'/'} component={Ficha}/>
      }
      <Route path={'/mapa'} component={Mapa}/>
      <Route path={'/anotacao'} component={Anotacao}/>
      <Route path={'/eventolocal'} component={EventoLocal}/>
      <Route path={'/combate'} component={Combate}/>
      

    </Switch>
  )
}


export{
  App
}
 