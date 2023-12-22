import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardProps } from "src/components/Card";

export interface Web3Slice{
  sites?: CardProps[],
  isSitesActual: boolean,

}

const initialState: Web3Slice = {
  isSitesActual: false,
}

export const web3Slice = createSlice({
  name: "web3Slice",
  initialState,
  reducers: {
    setSites(state, action: PayloadAction<CardProps[]>){
      state.sites = action.payload;
    },
    setIsSitesActual(state, actions: PayloadAction<boolean>){
      state.isSitesActual = actions.payload;
    }
  }
})

export const web3SliceActions = web3Slice.actions;