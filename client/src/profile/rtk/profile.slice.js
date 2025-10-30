import { createSlice } from "@reduxjs/toolkit";
import {
  createProfileAction,
  getCurrentProfileAciton,
} from "../action/profile.action";
const initialState = {
  profile: null, // to hold current profile
  profiles: [], // to hold all profiles
  loading: true,
  error: {},
};
const profileSlice = createSlice({
  name: "profile",
  initialState, // initialState(key) : initialState(value)
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(createProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCurrentProfileAciton.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentProfileAciton.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(getCurrentProfileAciton.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
        state.profile = null;
      });
  },
});

export default profileSlice.reducer;
