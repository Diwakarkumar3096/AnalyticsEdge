import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // Use `.reducer` instead of `.actions`
  },
});

export default store;
