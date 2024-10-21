import { Caixa } from "../FichaPersonagem/estilo"
import { Inimigo, InimigoProps } from "../../sistema/interfaces/interfaces"
import { useSistema } from "../../sistema/mundo"

import { useState, useEffect } from "react"

function InimigoFicha(){
    const {Teste}= useSistema()
    const [nome,setNome]=useState<string>('criatura')
    const [mestre,setMestre]=useState<string>('do mal')
    const [mecanica,setMecanica]=useState<number>(5)
    const [sabedoria,setSabedoria]=useState<number>(4)
    const [energia,setEnergia]=useState<number>(3)
    const [vida,setVida]=useState<number>(0)

    const vidaCalculada = mecanica + sabedoria + energia


    useEffect(()=>{
        setVida(vidaCalculada)
    },[])
    return(
        <Caixa className='inimigo'>
        <h2>{nome}</h2>
        <p>mestre: <strong>{mestre}</strong></p>
        <p>vida:{vida} </p>
        <p>Mecânica: <strong>{mecanica}</strong></p>
        <p>sabedoria: <strong>{sabedoria}</strong></p>
        <p>energia: <strong>{energia}</strong></p>
      </Caixa>
    )
  } 


export {
    InimigoFicha
}