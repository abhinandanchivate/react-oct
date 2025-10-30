// getCurrentProfileAciton
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProfile, getCurrentProfile } from "./profile.service";

export const createProfileAction = createAsyncThunk(
  "profile/createProfileAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await createProfile(formData);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to create or update profile" }
      );
    }
  }
);
export const getCurrentProfileAciton = createAsyncThunk(
  "profile/getCurrentProfileAciton",

  async (_, { rejectWithValue }) => {
    try {
      const response = await getCurrentProfile();
      console.log(response);
      if (response.status === 200) {
        return { status: 200, data: response.data };
      }
    } catch (err) {
      const status = err?.status || err?.response?.status;
      if (status === 400)
        return rejectWithValue({ notFound: true, status: 400 });

      return rejectWithValue(
        err?.data || { message: "Failed to load profile" }
      );
    }
  }
);
