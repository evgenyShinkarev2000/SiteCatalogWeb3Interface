import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { web3Slice } from './web3Slice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    web3Slice: web3Slice.reducer,
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;