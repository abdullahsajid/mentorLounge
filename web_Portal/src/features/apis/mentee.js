import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const menteeApi = createApi({
  reducerPath: "mentee",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
  }),
  tagTypes: ["getMentee"],
  endpoints: (builder) => ({
    getMenteeById: builder.mutation({
      query: (data) => {
        const token = cookie.get("loungeToken");
        return {
          url: "mentees/findMenteeById",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
      providesTags: ["getMentee"],
    }),
    getAllMentor: builder.mutation({
      query: (data) => {
        const token = cookie.get("loungeToken");
        return {
          url: "mentors/getMentorsWithFullDetails",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
    }),
    updateMenteeDetail: builder.mutation({
      query: (data) => {
        const token = cookie.get("loungeToken");
        return {
          url: "mentees/updateMentee",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
      invalidatesTags: ["getMentee"],
    }),
    updateMenteeSettings: builder.mutation({
      query: (data) => {
        const token = cookie.get("loungeToken");
        return {
          url: "userSettings/updateUserSetting",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: data,
        };
      },
    }),
    uploadAvatar: builder.mutation({
      query: (data) => {
        const token = cookie.get("loungeToken");
        const formData = new FormData();
        formData.append('file', data);
        return {
          url: "users/updateprofilepic",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["getMentee"],
    }),
    bookSession: builder.mutation({
      query : (data) => {
        const token = cookie.get('loungeToken')
        return {
          url : "sessionRequests/createSessionRequest",
          method : "POST",
          headers:{
            Authorization : `Bearer ${token}`
          },
          body: data
        }
      }
    })
  }),
});

export const {
  useGetMenteeByIdMutation,
  useGetAllMentorMutation,
  useUpdateMenteeDetailMutation,
  useUpdateMenteeSettingsMutation,
  useUploadAvatarMutation,
  useBookSessionMutation
} = menteeApi;
