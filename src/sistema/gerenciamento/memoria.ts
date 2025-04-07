import { configureStore } from '@reduxjs/toolkit';
import personagemReducer from './mecanicas/personagem'
import mundoReducer from './mecanicas/mundo'

const memoria = configureStore({
  reducer: {
    mundo: mundoReducer,
    personagem: personagemReducer,
  }
});

export type RootState = ReturnType<typeof memoria.getState>;
export type AppDispatch = typeof memoria.dispatch;

export {
  memoria
}