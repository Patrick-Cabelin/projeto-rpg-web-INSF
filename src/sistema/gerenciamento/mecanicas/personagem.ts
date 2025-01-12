import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Personagem } from '../../interfaces/interfaces'


const estadoInicial: Personagem = {
    pontosIniciais: 15,
    nome:'',
    vida: 0,
    atributos:{
        forca:0,
        agilidade:0,
        vigor:0
    },
    inventario:[],
}

const personagemSlice= createSlice({
    name:'sobrevivente',
    initialState: estadoInicial,
    reducers:{
        nomeSobrevivente(estado, acao:PayloadAction<string> ){
            estado.nome= acao.payload
        },
        modificarAtributo(
            estado,
            acao: PayloadAction<{atributos: 'forca' | 'agilidade' | 'vigor'; operacao: 'incrementar' | 'decrementar' }>
        ){
            const {atributos, operacao} = acao.payload
            
            if(estado.pontosIniciais>=0){
                switch(operacao){
                    case 'incrementar':
                        if(estado.pontosIniciais == 0) return
                        estado.atributos[atributos]++
                        estado.pontosIniciais--
                        break
                    case 'decrementar':
                        if(estado.atributos[atributos]<=0) return
                        estado.atributos[atributos]--
                        estado.pontosIniciais++
                        break
                }
            }
            
        },
        
        criarFichaPersonagem(
            estado,
            acao: PayloadAction<{ 
                nome: string; 
                vida: number;
                atributos: 
                { 
                    forca: number; 
                    agilidade: number;
                    vigor: number
                }
            }>
        ){
           localStorage.setItem('@FichaJogador', JSON.stringify(acao.payload))
        },
        calcularVida(
            estado,
            acao: PayloadAction<{atributos: 'forca' | 'agilidade' | 'vigor'; operacao: 'cura'| 'dano' }>
        ){
            const { atributos }= acao.payload
            // if
        },
        pesquisarFicha(
            estado,
            acao: PayloadAction<void>
        ){
            const haFicha= localStorage.getItem('@FichaJogador')

            if(!haFicha) {
                estado.haFicha = null
            }else{
                estado.haFicha= JSON.parse(haFicha)
            }
        }
    }
})



export const { nomeSobrevivente, modificarAtributo, criarFichaPersonagem, calcularVida ,pesquisarFicha}= personagemSlice.actions
export default personagemSlice.reducer