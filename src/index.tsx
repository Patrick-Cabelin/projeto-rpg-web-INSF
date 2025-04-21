import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {memoria} from './sistema/gerenciamento/memoria'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './estilos/global'
import {ThemeProvider} from 'styled-components'
import tema from './estilos/tema'
import {App} from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <Provider store={memoria}>
      <ThemeProvider theme={tema}>
        <GlobalStyles/>
          <BrowserRouter>
            <App/>
          </BrowserRouter>         
      </ThemeProvider>
    </Provider>

)