import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user slice",
    initialState,
    reducers: {
        login(state, action) {
            console.log(action.payload);
            state.user = action.payload;
            // state.displayName =
        },
        logout(state) {
            state.user = null;
        },
    },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
