import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navbar";
import storeDataReducer from "./storeData";
import validateFormReducer from "./formValidation";
import userSliceReducer from "./userSlice";

const store = configureStore({
    reducer: {
        navBar: navBarReducer,
        storeData: storeDataReducer,
        validateForm: validateFormReducer,
        userSlice: userSliceReducer,
    },
});

export default store;
