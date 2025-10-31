import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/rtk/auth.slice";
import { listnerMiddleware } from "./middlewareListner";
import profileReducer from "../profile/rtk/profile.slice";
// react-redux : integration b/w react and redux
// in react everything is component based.
// to use redux in react then we have to use react-redux library which provides integration b/w react and redux via provider component.
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([listnerMiddleware.middleware]), // we can add our custom middleware here.
});

export default store;
// we will start by 11:40
