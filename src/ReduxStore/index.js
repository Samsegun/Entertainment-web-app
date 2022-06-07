import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navbar";
import storeDataReducer from "./storeData";
import validateFormReducer from "./formValidation";

const store = configureStore({
    reducer: {
        navBar: navBarReducer,
        storeData: storeDataReducer,
        validateForm: validateFormReducer,
    },
});

export default store;
