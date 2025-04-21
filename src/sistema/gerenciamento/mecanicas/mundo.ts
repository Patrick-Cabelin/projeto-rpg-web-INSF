import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Inimigo } from '../../interfaces/interfaces'


interface Mundo{
    porcentagemInimigos: number,
    emBatalha: boolean
    dificuldade: number
}

const estadoInialGlobal: Mundo={
    porcentagemInimigos: 1,
    emBatalha: false,
    dificuldade: 6
}

const MundoSlice=createSlice({
    name:'Mundo',
    initialState: estadoInialGlobal,
    reducers:{
        emCombate(
            estado
        ){
            console.log('combate')
            estado.emBatalha= true
        },
        foraDeCombate(
            estado
        ){
            console.log('fora')
            estado.emBatalha= false
        }
    }

})


export const {emCombate,foraDeCombate} = MundoSlice.actions
export default MundoSlice.reducer