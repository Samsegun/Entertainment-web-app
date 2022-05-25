import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navbar";

const store = configureStore({
    reducer: { navBar: navBarReducer },
});

export default store;
