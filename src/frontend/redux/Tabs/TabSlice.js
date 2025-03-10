import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
}

export const Tabslice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});