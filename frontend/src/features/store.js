import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./userSlice";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
export default store;
