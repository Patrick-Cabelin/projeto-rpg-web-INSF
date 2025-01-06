import { Caixa, Topo, EventoDoLocal, Ruas } from './estilo'

import { Menu } from '../../componentes/Menu'
import { Icons } from '../../estilos/assests/Icons'
import tema from '../../estilos/tema'

function EventoLocal(){
    const {Fixar,Seguir} = Icons()

    return(
        <Caixa>
            <Topo>
                <span><Fixar tamanho={36} cor={tema.CORES.VERMELHO }/></span>
                <h1>{`Cantinho da dona maria`}</h1>
                <Menu/>
            </Topo>
            <EventoDoLocal>
                <h2>Evento Local</h2>
                <div>
                    <p>Ao entrar no Cantinho da Dona Maria, você encontra o lugar vazio e silencioso, com algumas cadeiras fora do lugar e a poeira começando a tomar conta do ambiente. O cheiro de café velho ainda paira no ar, lembrando os dias em que o lugar era movimentado. No canto, uma lata de ensopado ainda quente repousa sobre a mesa, como se alguém tivesse deixado apressadamente, talvez fugindo de algo. Em um momento de silêncio, você ouve um leve barulho vindo do fundo do salão – um vagante solitário, encapuzado, observa você das sombras, com os olhos fixos, mas sem dizer uma palavra.
                    </p>
                    <Seguir tamanho={25} cor={tema.CORES.PRETO}/>
                </div>
            </EventoDoLocal>
            <Ruas>
                <h2>Rua das Acácias</h2>
                <div>
                    <span>Esquina<Seguir tamanho={25} cor={tema.CORES.PRETO}/></span>
                    <span>Esquina<Seguir tamanho={25} cor={tema.CORES.PRETO}/></span>
                    <span>Esquina<Seguir tamanho={25} cor={tema.CORES.PRETO}/></span>
                    <span>Esquina<Seguir tamanho={25} cor={tema.CORES.PRETO}/></span>
                </div>
            </Ruas>
        </Caixa>
    )
}


export{
    EventoLocal
}