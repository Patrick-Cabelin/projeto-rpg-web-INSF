import { Navegar } from './estilo'
import { Icons } from '../../estilos/assests/Icons'
import tema from '../../estilos/tema'
function Menu(){
    const {Anotacao, Mapa, PersongemInfo} = Icons()
    return (
        <Navegar>
            <PersongemInfo tamanho={46} cor={tema.CORES.GRAFITE}/>
            <Mapa tamanho={46} cor={tema.CORES.GRAFITE}/>
            <Anotacao tamanho={46} cor={tema.CORES.GRAFITE}/>
        </Navegar>
    )
}

export {
    Menu
}