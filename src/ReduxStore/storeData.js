import { createSlice } from "@reduxjs/toolkit";
import appData from "starter-code/adjustedData.json";

const initialStoreData = {
    items: appData,
    numberOfNewBookmarks: 0,
    notification: false,
};

const storeDataSlice = createSlice({
    name: "storeData",
    initialState: initialStoreData,
    reducers: {
        bookMarked(state, action) {
            // find item that matches payload dispatched from components
            const existingBookmark = state.items.find(
                item => item.title === action.payload
            );

            if (existingBookmark.isBookmarked) {
                /* if matched item's "isBookmarked" 
                property is true, set it to false */
                existingBookmark.isBookmarked = false;

                /* if number of bookmarks is 0, set notification
                to false, else decrement it by 1. Also if number
                of bookmarks is not 0, set notification
                to true else set to false
                */
                if (state.numberOfNewBookmarks === 0) {
                    state.notification = false;
                } else {
                    state.numberOfNewBookmarks--;
                    state.numberOfNewBookmarks
                        ? (state.notification = true)
                        : (state.notification = false);
                }
            } else {
                /* if matched item's "isBookmarked" 
                property is false, set it to true,
                increment number of bookmarks by 1 and set
                notification to true */
                existingBookmark.isBookmarked = true;
                state.numberOfNewBookmarks++;
                state.notification = true;
            }
        },
        hideNotification(state) {
            if (state.notification) {
                state.notification = false;
                state.numberOfNewBookmarks = 0;
            } else {
                return;
            }
        },
    },
});

export const storeDataActions = storeDataSlice.actions;

export default storeDataSlice.reducer;
