import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "features/apis/user";
const getUser = JSON.parse(localStorage.getItem('loungeUser'));
const initialState = {
  user: getUser ? getUser : [],
  isLoading: false,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.loginUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        userApi.endpoints.loginUser.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
        }
      )
      .addMatcher(
        userApi.endpoints.loginUser.matchRejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default userAuthSlice.reducer;
