import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import loadingSlice from "../features/loadingSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    loading: loadingSlice,
  },
});
