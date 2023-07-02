import { createSlice } from "@reduxjs/toolkit";

const initialState ='';
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        inputFilter(state, action) {
            return  state = action.payload;                       
        },
    },
});

export const {inputFilter} = filterSlice.actions;