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
            // estado.Itens.map((item)=>{ console.log(item)})
            console.log(estado.itens)
        }
    }
})

export const{listagem} = inventarioSlice.actions
export default inventarioSlice.reducer