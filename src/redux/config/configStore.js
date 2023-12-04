import { createStore, combineReducers } from "redux";
import letters from "redux/modules/letters";
import member from "redux/modules/member";
import authReducer from "redux/modules/authSlice"
import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer: {
        letters,
        member,
        auth: authReducer,
    },
});

export default store;
