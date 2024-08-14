import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "features/apis/user";
import { adminApi } from "features/apis/admin";
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
      ).addMatcher(
        userApi.endpoints.signUpUser.matchPending,(state) => {
          state.isLoading = true
        }
      ).addMatcher(
        userApi.endpoints.signUpUser.matchFulfilled,(state,action)=>{
          state.isLoading = false
          state.user = action.payload
        }
      ).addMatcher(
        userApi.endpoints.signUpUser.matchRejected, (state,action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ).addMatcher(adminApi.endpoints.adminVerify.matchPending, (state) => {
        state.isLoading = true
      }).addMatcher(adminApi.endpoints.adminVerify.matchFulfilled, (state,action) => {
        state.isLoading = false
        state.user = action.payload
      }).addMatcher(adminApi.endpoints.adminVerify.matchRejected, (state,action) => {
        state.isLoading = false
        state.error = action.payload
      }).addMatcher(userApi.endpoints.logoutUser.matchPending, (state) => {
        state.isLoading = true
      }).addMatcher(userApi.endpoints.logoutUser.matchFulfilled, (state,action) => {
          state.isLoading = false
          state.user = null
      }).addMatcher(userApi.endpoints.logoutUser.matchRejected , (state,action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
});

export default userAuthSlice.reducer;
