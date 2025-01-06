import { Menu } from "../../componentes/Menu"
import { Caixa, Topo, Lugares } from "./estilo"

function Mapa(){

    return(
        <Caixa>
            <Topo>
                <h1>Mapa</h1>
                <Menu/>
            </Topo>
            <Lugares>
                <div>
                    <p>Cantinho da Dona Maria</p>
                    <li>Rua das Acácias, Qd 15, perto da praça São Vicente.</li>
                </div>
                
            </Lugares>
        </Caixa>
    )
}

export{
    Mapa
}