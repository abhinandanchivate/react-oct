// BL stuff + rest call consumptions.
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadUser, loginUser, registerUser } from "./auth.service";

export const registerUserAction = createAsyncThunk(
  // export :
  // const
  // registerUserAction : name of the action
  // createAsyncThunk : to create an async action
  // thunk is middleware to handle async actions in redux toolkit
  "auth/registerUser", // action name : should be unique across the application
  async (formData, { rejectWithValue, dispatch }) => {
    // async : to use await keyword inside the function
    // formData : data filled by the user in the register form we are demanding here.
    // { rejectWithValue } : to send custom error payload from here to the calling function catch block. ==> will come from redux toolkit ==> which is used to return the rejected /failure payload response.
    try {
      // success part
      const data = await registerUser(formData);
      // call loadUserAction
      dispatch(loadUserAction());
      return data;
    } catch (err) {
      // failure part
      return rejectWithValue(err.data);
    }
  }
); // rest call
// payload creator : the response data from the api call/ rest call.
// rest calls ==> async calls => javascript promises
// 1. pending, : warm up stage initial stage
// 2. fulfilled, : success stage
// 3. rejected : failure stage
// your action will create 3 different action types for each stage.
// action types : auth/registerUser/pending
// action types : auth/registerUser/fulfilled
// action types : auth/registerUser/rejected

// after successful registration redirect it to dashboard

// 1. we should use useeffect ==> inside the component.
// 2. we should use useNavigate ==> to redirect the user to the dashboard but decimsion should be taken inside the registerAction

export const loginUserAction = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const data = await loginUser(formData);
      // we have to call loadUserAction
      dispatch(loadUserAction());
      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

// load user action
export const loadUserAction = createAsyncThunk(
  "auth/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      // success
      // _ : no input parameter is required
      const data = await loadUser();
      return data;
    } catch (err) {
      // failure
      return rejectWithValue(err.data);
    }
  }
);
