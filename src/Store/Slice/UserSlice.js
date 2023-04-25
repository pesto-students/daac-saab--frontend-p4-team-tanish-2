import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getUser: (state) => {
      state = { ...state.value };
    },
  },
});
export const { getUser } = userSlice.actions;

export default userSlice.reducer;
