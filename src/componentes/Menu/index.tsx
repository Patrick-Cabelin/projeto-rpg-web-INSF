import { Navegar } from './estilo'
import { Icons } from '../../estilos/assests/Icons'
import tema from '../../estilos/tema'

import { useLocation } from 'wouter'
import { useRef } from 'react'


function Menu(){
    const {Anotacao, Mapa, PersongemInfo} = Icons()
    const ref = useRef<HTMLDivElement | null>(null)

    const [link , setLink] = useLocation()


    function navegacao(evento: React.MouseEvent) {
        const iconeClicado = (evento.currentTarget.className)
        
        switch(iconeClicado){
            case 'fichaInfo':
                setLink('/')
                break

            case 'mapa':
                setLink('/mapa')
                break
            case 'anotacao':
                setLink('/anotacao')
                break

            default:
                break
        }
    }
    
    return (
        <Navegar>
            <PersongemInfo tamanho={46} cor={tema.CORES.GRAFITE} onClick={(evento)=>{ navegacao(evento)}} classe='fichaInfo' />
            <Mapa tamanho={46} cor={tema.CORES.GRAFITE} onClick={(evento)=>{ navegacao(evento)}} classe='mapa' />
            <Anotacao tamanho={46} cor={tema.CORES.GRAFITE} onClick={(evento)=>{ navegacao(evento)}} classe='anotacao'/>
        </Navegar>
    )
}

export {
    Menu
}