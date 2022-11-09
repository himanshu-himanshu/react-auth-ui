import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user ? user : null,
  loading: false,
  error: false,
  message: "",
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = "";
      state.message = "";
      state.success = false;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { resetState, addUser } = authSlice.actions;

export default authSlice.reducer;
