import { configureStore } from '@reduxjs/toolkit';

const memoria = configureStore({
  reducer: {}
});

export type RootState = ReturnType<typeof memoria.getState>;
export type AppDispatch = typeof memoria.dispatch;

export {
  memoria
}