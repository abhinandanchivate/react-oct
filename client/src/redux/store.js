import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/rtk/auth.slice";
// react-redux : integration b/w react and redux
// in react everything is component based.
// to use redux in react then we have to use react-redux library which provides integration b/w react and redux via provider component.
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
