import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Inimigo } from "../../interfaces/interfaces";  

const dificuldade = 6
interface Inimigos{
    inimigo: Inimigo[]
}

const estadoInicial: Inimigo={
    nome: '',
    vida: 0,
    presente:true,
    atributos:{
        vigor: 8,
        agilidade: 3,
        forca: 4,
    },
    fichaInimigo:{}
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
                estado.fichaInimigo = null
            }else{
                estado.fichaInimigo= JSON.parse(fichaInimigo)
            }
        },

        testeAtaque(){
            const i = estadoInicial.atributos.forca
            let dadosJogados= []
            for (let index = i; index > 0; index--) {
              let dadoLancado= Math.ceil(Math.random()*10)
              let resultado = dadoLancado>dificuldade ? dadosJogados.push(dadoLancado):0
            }
             dadosJogados.length
        },

        testeDefesa(){
            const i = estadoInicial.atributos.agilidade
            let dadosJogados= []
            for (let index = i; index > 0; index--) {
              let dadoLancado= Math.ceil(Math.random()*10)
              let resultado = dadoLancado>dificuldade ? dadosJogados.push(dadoLancado):0
            }
             dadosJogados.length
        },  

        testeVigor(estado, 
        acao:PayloadAction<number>){
            const dados = Array.from({ length: estado.atributos.vigor }, () =>
                Math.ceil(Math.random() * 10)
                );
                const sucessos = dados.filter(dado => dado > dificuldade).length;
                const reducao = sucessos % 3;
                const dano = Math.max(0, acao.payload - reducao);
                if (estado.vida <0)return
                estado.vida -= dano;
            },

        modificarFicha(estado, acao: PayloadAction<{ tipo: 'dano' | 'cura'; valor: number }>) {
            console.log(acao.payload, estado)
            const { tipo, valor } = acao.payload;
            

            switch(tipo){
                case 'dano':
                    if(estado.fichaInimigo) {
                        estado.fichaInimigo.vida = Math.max(0, estado.fichaInimigo.vida - valor);
                    }
                    if (estado.fichaInimigo.vida <0) return
                    localStorage.setItem('@inimigo', JSON.stringify(estado.fichaInimigo))
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
export const {testeAtaque,testeDefesa, testeVigor, pesquisarFichaInimigo, criarInimigo, modificarFicha} = InimigoSlice.actions