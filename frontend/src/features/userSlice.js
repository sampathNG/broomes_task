import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  token: "",
};
const authSlice = createSlice({
  name: "tokenSlice",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload.text;
    },
  },
});
export const { addToken } = authSlice.actions;
export default authSlice;
