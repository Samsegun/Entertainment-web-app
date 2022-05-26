import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navbar";
import storeDataReducer from "./storeData";

const store = configureStore({
    reducer: { navBar: navBarReducer, storeData: storeDataReducer },
});

export default store;
