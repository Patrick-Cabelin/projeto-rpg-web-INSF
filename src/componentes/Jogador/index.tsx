import {Caixa} from './estilo'
import {useState, useEffect} from 'react'

import { useSistema } from '../../sistema/mundo'

function JogadorFicha({estado}: {estado?: string}){
    const {personagemFicha,Teste}= useSistema()
    const [nome,setNome]=useState<string>('')
    const [mestre,setMestre]=useState<string>('')
    const [mecanica,setMecanica]=useState<number>(0)
    const [sabedoria,setSabedoria]=useState<number>(0)
    const [energia,setEnergia]=useState<number>(0)
    const [vida, setVida] = useState<number>(0)
    const [resultado, setResultado] = useState<[boolean, number[]] | null>(null);
    const estadoAtual= estado

    

    function fazerTeste(atributo:string){
     
    }

    useEffect(() => {
      if (personagemFicha) {
        setNome(personagemFicha.nome);
        setMestre(personagemFicha.mestre);
        setMecanica(personagemFicha.atributos.mecanica);
        setSabedoria(personagemFicha.atributos.sabedoria);
        setEnergia(personagemFicha.atributos.energia);
        setVida(personagemFicha.vida);
      }
    }, [personagemFicha])
    return (
      <Caixa className='FichaPersonagem'>
        <h1>{nome}</h1>
        <p>mestre: <strong>{mestre}</strong></p>
        <p>vida:<strong>{vida}</strong> </p>
        <p>Mecânica: <strong>{mecanica}</strong></p>
        <button onClick={()=>fazerTeste('mecanica')}>TESTE MECANICA</button>
        <p>Sabedoria: <strong>{sabedoria}</strong></p>
        <button onClick={()=>fazerTeste('sabedoria')}>TESTE SABEDORIA</button>
        <p>Energia: <strong>{energia}</strong></p>
        <button onClick={()=>fazerTeste('energia')}>TESTE ENERGIA</button>
        {resultado && (
        <>
          <p>Resultado do teste: {resultado[0] ? 'Sucesso' : 'Falha'}</p>
          <p>Valores dos dados: {resultado[1].join(', ')}</p>
        </>
      )}
      </Caixa>
    )
  } 

export {
  JogadorFicha
}