import { Caixa, Topo, Lugares } from "./estilo"


import { useState } from "react"
import { Menu } from "../../componentes/Menu"
import { LUGARES } from "../../sistema/utilidades/locais"

import {useDispatch, UseDispatch, useSelector, UseSelector} from 'react-redux'
import {IniciarCombate} from '../../sistema/gerenciamento/mecanicas/mundo'
import { RootState } from "../../sistema/gerenciamento/memoria"

function Mapa(){
    const [locais, setLocais] = useState<object>(LUGARES)
    const dispacho = useDispatch()
    const mundo = useSelector((state:RootState)=>state)
    function click(){
      dispacho(IniciarCombate())
    }
    return(
        <Caixa>
            <Topo>
                <h1>Mapa</h1>
                <Menu/>
            </Topo>
            <Lugares>
               
                
                {
                    locais.locais.map( 
                        (pontos)=>{
                            return(
                                <div>
                                    <p>{pontos.nome}</p>
                                    <li
                                    onClick={()=>{
                                        click()
                                    }}
                                    >{pontos.endereco}</li>
                                </div>
                            )
                        }
                    )
                }
                
            </Lugares>
        </Caixa>
    )
}

export{
    Mapa
}