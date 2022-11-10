import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import messgaeSlice from "../features/messages";
import loadingSlice from "../features/loadingSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    message: messgaeSlice,
    loading: loadingSlice,
  },
});
