import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user slice",
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
            console.log(state.user);
        },
        logout(state) {
            state.user = null;
        },
    },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
