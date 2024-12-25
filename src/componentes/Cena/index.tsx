import { InterfaceApp, SpawnDasCriaturas } from './estilo'

import { Ficha } from '../Ficha'
import { JogadorFicha } from '../Jogador'
import { InimigoFicha } from '../Inimigo'

import { useSistema } from '../../sistema/mundo'
import { useEffect } from 'react'

function CenaCombate(){
    const {personagemFicha} = useSistema() 

    useEffect(()=>{
        console.log(document.getElementsByClassName('Inimigos').item(0))
    },[])
return (
    <InterfaceApp onClick={(evento)=>(evento)}>
        <SpawnDasCriaturas>
        <div className='Jogador'>
           { personagemFicha? <JogadorFicha  /> :<Ficha/> }
        </div>

        <div className='Inimigos'>
            <InimigoFicha/> 
        </div>
        </SpawnDasCriaturas>
    </InterfaceApp>
    )
   }
export{
    CenaCombate
}