import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice";
import UserSlice from "./Slice/UserSlice";
export const store = configureStore({
  reducer: {
    login: LoginSlice,
    User: UserSlice,
  },
});
