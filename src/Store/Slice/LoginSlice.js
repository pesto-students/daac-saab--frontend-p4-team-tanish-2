import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    showModal: (state) => {
      state.value = !state.value;
    },
    closeModal: (state) => {
      state.value = false;
    },
  },
});
export const { showModal, closeModal } = loginSlice.actions;

export default loginSlice.reducer;
