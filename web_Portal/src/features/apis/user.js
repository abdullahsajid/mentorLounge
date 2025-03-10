import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const userApi = createApi({
  reducerPath: "userAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (data) => ({
        url: "users/signup",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "users/signin",
        method: "POST",
        body: data,
      }),
    }),
    findMeetingId: builder.mutation({
      query: (data) => {
        const token = cookie.get("loungeToken");
        return {
        url: "zoommeetingCtrs/findZoomMeetingById",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }},
    }),
    logoutUser: builder.mutation({
      query: () => {
        const token = cookie.get("loungeToken");
        return{
        url: "users/logout",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }},
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useFindMeetingIdMutation
} = userApi;


