// slice
// state : data declaration.==> store.

import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction } from "./auth.action";

const authState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  token: localStorage.getItem("token"),
  error: null,
  status: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  // Rest call / common BL stuff
  // reducers: synchronous stuff ==> Common BL stuff
  // extraReducers: asynchronous stuff ==> rest call stuff
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      console.log("inside the slice");
      return {
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null, // ensure null, not value from localStorage
        error: null,
        status: "logged_out",
      };
    },
  }, // it will hold only synchronous stuff
  extraReducers: (builder) => {
    builder // register : one of the case.

      .addCase(registerUserAction.pending, (state) => {
        state.loading = true;
      }) // pending
      .addCase(registerUserAction.fulfilled, (state, action) => {
        // action : payload : will hold the response data from action.
        // action : async call ka result
        // state : slice contnet i.e. authState content
        // using state we can make the changes to the slice content i.e. store part.

        // registerUserAction : thunk action ==> perform the rest call ==> will return the response data.
        state.loading = false;
        state.isAuthenticated = true;
        console.log(action.payload.data.token);
        localStorage.setItem("token", action.payload.data.token);
        state.token = action.payload.data.token;
        state.status = "success";
        // we need to access the payload ==> contains the jwt.
      }) // success

      .addCase(registerUserAction.rejected, (state, action) => {
        state.error = Array.isArray(action.payload)
          ? action.payload.reduce((acc, error) => {
              acc[error.param] = error.msg;
              return acc;
            }, {})
          : { error: action.payload || action.error.message };
        // state.error = action.payload; // array of errors from the server
        state.loading = false;
        state.isAuthenticated = false;
        state.token = null;
        state.status = "failure";
      }); // failure
  },
  //   extraReducers: {
  //     // we will include register
  //   }, // it will hold async stuff like thunk actions rest calls. // register
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
// createSlice:
// name, initialState, reducers
// why slice : to create action and reducer at one place
// 1. simplifies the redux setup: less boilerplate code(no separte action types, reducer + constants)
// 2. auto generates actions : no need to manually create the action creators.
// 3. keeps features isolated : each slice manages its own state and logic.
