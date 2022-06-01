import { createSlice } from "@reduxjs/toolkit";
import appData from "starter-code/adjustedData.json";

const initialStoreData = {
    items: appData,
};

const storeDataSlice = createSlice({
    name: "storeData",
    initialState: initialStoreData,
    reducers: {
        bookMarked(state, action) {
            state.items.find(
                item => item.title === action.payload
            ).isBookmarked = true;
        },
    },
});

export const storeDataActions = storeDataSlice.actions;

export default storeDataSlice.reducer;
