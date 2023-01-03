import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getUser: (state, payload) => {
      // state = { ...state.value };
      payload = state;
    },
  },
});
export const { getUser } = userSlice.actions;

export default userSlice.reducer;
