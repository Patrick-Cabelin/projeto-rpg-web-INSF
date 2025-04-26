import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Inimigo, FichaBasica} from "../../interfaces/interfaces";  


const dificuldade = 6

const estadoInicial: Inimigo={
    nome: '',
    vida: 0,
    presente:true,
    atributos:{
        vigor: 8,
        agilidade: 3,
        forca: 4,
    },
    fichaInimigo: <FichaBasica>{}
}

const InimigoSlice=createSlice({
    name:  'Inimigo',
    initialState: estadoInicial,
    reducers:{
        criarInimigo(
            estado,
            acao: PayloadAction<Inimigo>
        ){
            localStorage.setItem('@inimigo', JSON.stringify(acao.payload))
        },

        pesquisarFichaInimigo(
            estado,
            
        ){
            const fichaInimigo= localStorage.getItem('@inimigo')
            if(!fichaInimigo) {
                estado.fichaInimigo = estadoInicial
            }else{
                estado.fichaInimigo= JSON.parse(fichaInimigo)
            }
        },

        modificarFichaInimigo(estado, acao: PayloadAction<{ tipo: 'dano' | 'cura'; valor: number }>) {
            const { tipo, valor } = acao.payload;
            
            switch(tipo){
                case 'dano':
                    console.log(tipo,valor)
                    if(estado.fichaInimigo) {
                        estado.fichaInimigo.vida = Math.max(0, estado.fichaInimigo.vida - valor);
                    } 
                    if (estado.fichaInimigo!.vida <0) return
                break
            }
            
            // if (tipo === 'dano') {
            // inimigo.vida = Math.max(0, inimigo.vida - valor);
            // } else if (tipo === 'cura') {
            // const vidaMaxima = inimigo.vidaMaxima; // Usando vidaMaxima do inimigo
            // inimigo.vida = Math.min(vidaMaxima, inimigo.vida + valor);
            // }

            // // Atualiza o localStorage também
            localStorage.setItem('@inimigo', JSON.stringify(estado.fichaInimigo));
        },
    },
})
      
export default InimigoSlice.reducer
export const { pesquisarFichaInimigo, criarInimigo, modificarFichaInimigo} = InimigoSlice.actions