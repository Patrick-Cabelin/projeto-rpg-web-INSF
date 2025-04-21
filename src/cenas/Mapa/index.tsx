import { Caixa, Topo, Lugares } from "./estilo"


import { useState } from "react"
import {useNavigate} from  'react-router-dom'
import { Menu } from "../../componentes/Menu"
import { LUGARES } from "../../sistema/utilidades/locais"

import {useDispatch, UseDispatch, useSelector, UseSelector} from 'react-redux'
import {emCombate,foraDeCombate} from '../../sistema/gerenciamento/mecanicas/mundo'
import { RootState } from "../../sistema/gerenciamento/memoria"

function Mapa(){
    const [locais, setLocais] = useState<object>(LUGARES)
    const dispacho = useDispatch()
    const navigador= useNavigate()


    function explorarLocal(){
        let Porcentagem = Math.round(Math.random()*100)
        const {sorte}= JSON.parse(localStorage.getItem('@FichaJogador')!).atributos || 1

        console.log(Porcentagem, `sorte: ${sorte}`)
        if(Porcentagem> sorte) {
            dispacho(emCombate())
            navigador('/combate')
            
        }
            dispacho(foraDeCombate())

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
                        (pontos:object)=>{
                            return(
                                <div>
                                    <p>{pontos.nome}</p>
                                    <li
                                    onClick={()=>{
                                        explorarLocal()
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