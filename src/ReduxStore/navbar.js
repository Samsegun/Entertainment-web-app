import { createSlice } from "@reduxjs/toolkit";

const initialNav = {
    homeActive: false,
    moviesActive: false,
    tvseriesActive: false,
    bookmarkActive: false,
    showSignInOptions: false,
    backdrop: false,
};

const navBarSlice = createSlice({
    name: "navhover",
    initialState: initialNav,
    reducers: {
        homeIsActive(state) {
            state.homeActive = true;
            state.moviesActive = false;
            state.tvseriesActive = false;
            state.bookmarkActive = false;
        },
        movieIsActive(state) {
            state.moviesActive = true;
            state.homeActive = false;
            state.tvseriesActive = false;
            state.bookmarkActive = false;
        },
        tvseriesIsActive(state) {
            state.tvseriesActive = true;
            state.homeActive = false;
            state.moviesActive = false;
            state.bookmarkActive = false;
        },
        bookmarkIsActive(state) {
            state.bookmarkActive = true;
            state.homeActive = false;
            state.moviesActive = false;
            state.tvseriesActive = false;
        },
        setShowSignInOptions(state, action) {
            state.showSignInOptions = action.payload;
        },
        setBackDrop(state, action) {
            state.backdrop = action.payload;
        },
    },
});

export const navBarActions = navBarSlice.actions;

export default navBarSlice.reducer;
