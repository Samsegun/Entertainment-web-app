import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: sessionStorage.getItem("user")
        ? JSON.parse(sessionStorage.getItem("user"))
        : null,
    // user: null,
};

const userSlice = createSlice({
    name: "user slice",
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
        updateUserProfilePix(state, action) {
            state.user.profilePix = action.payload;
        },
    },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
