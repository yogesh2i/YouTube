import { createSlice } from "@reduxjs/toolkit";

type buttonState = {
    activeMenu: boolean,
    inputDisplay: string,
}
const initialState = {
    activeMenu: false,
    inputDisplay: 'none'
} as buttonState

export const buttonReducer = createSlice({
    name: 'buttonReducer',
    initialState,
    reducers: {
        menuButton: (state, action) => {
            state.activeMenu = action.payload;
        },
        inputDisplayButton: (state, action) => {
            state.inputDisplay = action.payload;
        },
    }
})

export const { menuButton, inputDisplayButton } = buttonReducer.actions;
export default buttonReducer.reducer;