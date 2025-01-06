import { Route, Switch } from 'wouter'

import { JogadorFicha } from './cenas/Jogador'
import { Mapa } from './cenas/Mapa'
import { Anotacao } from './cenas/Anotacoes'
import { EventoLocal } from './cenas/EventoLocal'

import {Ficha} from './componentes/Ficha'

function App() {
  return (
    <Switch>
      <Route path={'/'} component={Ficha}/>
      <Route path={'/mapa'} component={Mapa}/>
      <Route path={'/anotacao'} component={Anotacao}/>
      <Route path={'/eventolocal'} component={EventoLocal}/>
    </Switch>
  )
}


export{
  App
}
 