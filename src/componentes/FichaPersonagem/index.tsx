import {Caixa} from './estilo'
import {useState, useEffect} from 'react'
import { Personagem } from '../../sistema/interfaces/interfaces'
import { useSistema } from '../../sistema/mundo'

function FichaDePersonagem(){
    const {personagemFicha,Teste}= useSistema()
    const [fichaPersonagem,setFichaPersonagem]= useState<Personagem | null>(null)
    const [nome,setNome]=useState<string>('')
    const [mestre,setMestre]=useState<string>('')
    const [mecanica,setMecanica]=useState<number>(0)
    const [sabedoria,setSabedoria]=useState<number>(0)
    const [energia,setEnergia]=useState<number>(0)



    function fazerTeste(atributo:string){
      let resultado : boolean  
      switch (typeof atributo == typeof '' ){
            case atributo == 'mecanica':
                resultado= Teste?.(3,6).mecanica()

                console.log(resultado)                
                break
            case atributo == 'sabedoria':
                resultado= Teste?.(6,5).sabedoria()
                console.log(resultado)
                break
            case atributo =='energia':
                resultado= Teste?.(5,4).energia()
                console.log(resultado)
                
                break
            default:
                console.log(atributo) 
        }
    }
    console.log(fichaPersonagem,'console')
    useEffect(()=>{
      setFichaPersonagem(personagemFicha)
        if (fichaPersonagem){
            setNome(fichaPersonagem.nome)
            setMestre(fichaPersonagem.mestre)
            setMecanica(fichaPersonagem.atributos.mecanica)
            setSabedoria(fichaPersonagem.atributos.sabedoria)
            setEnergia(fichaPersonagem.atributos.energia)
        }
    },[])
    return (
      <Caixa>
        <h1>{nome}</h1>
        <p>mestre: <strong>{mestre}</strong></p>
        <p>Mecânica: <strong>{mecanica}</strong></p>
        <button onClick={()=>fazerTeste('mecanica')}>TESTE MECANICA</button>
        <p>Sabedoria: <strong>{sabedoria}</strong></p>
        <button onClick={()=>fazerTeste('sabedoria')}>TESTE SABEDORIA</button>
        <p>Energia: <strong>{energia}</strong></p>
        <button onClick={()=>fazerTeste('energia')}>TESTE ENERGIA</button>
      </Caixa>
    )
  } 

export {
  FichaDePersonagem
}