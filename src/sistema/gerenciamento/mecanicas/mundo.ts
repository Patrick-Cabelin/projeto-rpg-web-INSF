import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Inimigo } from '../../interfaces/interfaces'


type Mundo= {
    PorcentagemInimigos: number
}
const estadoInialGlobal: Mundo={
    PorcentagemInimigos: 1
}

const MundoSlice=createSlice({
    name:'Mundo',
    initialState: estadoInialGlobal,
    reducers:{
        IniciarCombate(
            estado,
            acao:PayloadAction<string>
        ){
        
            let Porcentagem = Math.round(estado.PorcentagemInimigos*Math.random()*100)
            const {sorte}= JSON.parse(localStorage.getItem('@FichaJogador')).atributos
           
            if (Porcentagem > sorte ){
                console.log(Porcentagem)
            }
        }
    }

})


export const {IniciarCombate} = MundoSlice.actions
export default MundoSlice.reducer