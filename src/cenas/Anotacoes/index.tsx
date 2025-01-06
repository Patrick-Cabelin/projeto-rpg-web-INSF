import { Caixa, Topo, Missoes } from "./estilo"

import { Menu } from "../../componentes/Menu"


function Anotacao(){

    return(
        <Caixa>
            <Topo>
                <span>{29}/{8}</span>
                <h1>Anotações</h1>
                <Menu/>
            </Topo>
            <Missoes>
                <div>
                    <div></div>
                    <p>Ir ate a igreja</p>
                    <span></span>
                </div>
                <div className='feito'>
                    <div></div>
                    <p>Chave inglesa- Rua das Laranjeiras, Oficina do Zeca</p>
                    <span>{29}/{8}</span>
                </div>
            </Missoes>
        </Caixa>
    )
}

export {
    Anotacao
}