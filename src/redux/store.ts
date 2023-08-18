import { configureStore } from '@reduxjs/toolkit';
import  buttonReducer  from './slices/buttonSlice';
import  feedReducer  from './slices/feedSlice';
import  videoPlayerData  from './slices/videoPlayerSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    buttonReducer,
    feedReducer,
    videoPlayerData,
    
  },
})

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;