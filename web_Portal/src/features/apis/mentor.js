import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const mentorApi = createApi({
    reducerPath:'montor',
    baseQuery:fetchBaseQuery({
        baseUrl:`${process.env.REACT_APP_LOCAL_URL}`
    }),
    endpoints: (builder) => ({
        getMentorById: builder.mutation({
            query: (data) => {
              const token = cookie.get("loungeToken");
              return {
                url: "mentors/findMentorById",
                method: "POST",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
                body: data,
              };
            }
        }),
        updateMentorDetail: builder.mutation({
          query: (data) => {
            const token = cookie.get("loungeToken");
            return {
              url: "mentors/updateMentor",
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: data,
            };
          }
        }),
        updateSessionRequest: builder.mutation({
          query: (data) => {
            const token = cookie.get("loungeToken");
            return {
              url: "sessionRequests/updateSessionRequest",
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: data,
            };
          }
        }),
        createAvailability: builder.mutation({
          query: (data) => {
            const token = cookie.get("loungeToken");
            return {
              url: "mentorsAvailabilities/createMentorsAvailability",
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: data,
            };
          }
        })
    })
})

export const {
  useGetMentorByIdMutation,
  useUpdateMentorDetailMutation,
  useUpdateSessionRequestMutation,
useCreateAvailabilityMutation} = mentorApi