import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Personagem } from '../../interfaces/interfaces'


const estadoInicial: Personagem = {
    nome:'',
    vida: 10,
    atributos:{
        forca:0,
        agilidade:0,
        vigor:0
    }

}

const personagemSlice= createSlice({
    name:'personagem',
    initialState: estadoInicial,
    reducers:{
        teste(){
            console.log('teste de usar o reducer como função fora, e mencionar la dentro do bloco')
        },

    }
})



export const { teste}= personagemSlice.actions
export default personagemSlice.reducer