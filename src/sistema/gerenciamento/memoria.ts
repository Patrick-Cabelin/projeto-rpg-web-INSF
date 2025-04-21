import { configureStore } from '@reduxjs/toolkit';
import personagemReducer from './mecanicas/personagem'
import mundoReducer from './mecanicas/mundo'
import inventarioReducer from './mecanicas/inventario'
import inimigoReducer from './mecanicas/inimigos'

const memoria = configureStore({
  reducer: {
    mundo: mundoReducer,
    personagem: personagemReducer,
    inventario: inventarioReducer,
    inimigo: inimigoReducer,
  }
});

export type RootState = ReturnType<typeof memoria.getState>;
export type AppDispatch = typeof memoria.dispatch;

export {
  memoria
}