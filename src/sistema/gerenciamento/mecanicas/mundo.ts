import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Inimigo } from '../../interfaces/interfaces'


interface Mundo{
    porcentagemInimigos: number,
    emBatalha: boolean
}

const estadoInialGlobal: Mundo={
    porcentagemInimigos: 1,
    emBatalha: false
}

const MundoSlice=createSlice({
    name:'Mundo',
    initialState: estadoInialGlobal,
    reducers:{
        IniciarCombate(
            estado,
            acao:PayloadAction<string>
        ){
        
            let Porcentagem = Math.round(estado.porcentagemInimigos*Math.random()*100)
            const {sorte}= JSON.parse(localStorage.getItem('@FichaJogador')!).atributos
           
            if (Porcentagem > sorte ) estado.emBatalha = true
            console.log(estado.emBatalha)
        }
    }

})


export const {IniciarCombate} = MundoSlice.actions
export default MundoSlice.reducer