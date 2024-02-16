import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "features/apis/user";
import  userAuthSlice  from "features/signup/userAuth";

export const store = configureStore({
  reducer: {
    user: userAuthSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (middle) => [...middle(), userApi.middleware],
});
