import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../interfaces/interfaces'


interface inventario{
    itens: Item[]
}

const estadoInicial: inventario= {
    itens: []
}

const inventarioSlice=createSlice({
    name: 'Inventario',
    initialState: estadoInicial,
    reducers:{
        listagem(
            estado,
            
        ){
            const itensListados = JSON.parse(localStorage.getItem('@FichaJogador')||'').inventario || []
            estado.itens = itensListados
           
        }
    }
})

export const{listagem} = inventarioSlice.actions
export default inventarioSlice.reducer