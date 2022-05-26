import { createSlice } from "@reduxjs/toolkit";
import appData from "starter-code/adjustedData.json";

const initialStoreData = [...appData];

const storeDataSlice = createSlice({
    name: "storeData",
    initialState: initialStoreData,
    reducers: {
        bookMarked(state) {
            console.log(state);
        },
    },
});

export const storeDataActions = storeDataSlice.actions;

export default storeDataSlice.reducer;
