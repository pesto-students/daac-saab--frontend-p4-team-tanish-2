import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});
