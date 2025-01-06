import { configureStore } from '@reduxjs/toolkit';
import personagemReducer from './mecanicas/personagem'
const memoria = configureStore({
  reducer: {
    personagem: personagemReducer
  }
});

export type RootState = ReturnType<typeof memoria.getState>;
export type AppDispatch = typeof memoria.dispatch;

export {
  memoria
}