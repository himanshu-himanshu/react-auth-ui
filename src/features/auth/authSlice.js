import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../constants/url";
import { REGISTER_ENDPOINT } from "../../constants/endpoints";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user ? user : null,
  showLoading: false,
  error: false,
  success: false,
};

export const register = createAsyncThunk("auth/register", (user, thunkAPI) => {
  axios
    .post(`${API_URL}${REGISTER_ENDPOINT}`, user)
    .then((e) => {
      console.log("Inside authSlice", e.data);
    })
    .catch((err) => {
      const message = err.response || err.toString();
      return thunkAPI.rejectWithValue(message);
    });
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.showLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.showLoading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.showLoading = false;
      state.error = action.payload.message;
      state.success = false;
    });
  },
});

export const { resetState, addUser } = authSlice.actions;

export default authSlice.reducer;
