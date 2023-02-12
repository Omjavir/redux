import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c: 0
};

export const customReducer = createReducer(initialState, {
    INCREMENT: (state) => {
        state.c += 1;
    },
    DECREMENT: (state) => {
        state.c -= 1;
    }
})