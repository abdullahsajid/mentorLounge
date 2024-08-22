import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const adminApi = createApi({
    reducerPath: "admin",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
    }),
    tagTypes:['faqs','announcement','adminprofile'],
    endpoints: (builder) => ({
        adminSignIn: builder.mutation({
            query: (data) => {
                return {
                    url: "users/adminSignin",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: data,
                };
            }
        }),
        adminVerify: builder.mutation({
            query: (data) => {
                return {
                    url: "users/verify-code",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: data,
                };
            }
        }),
        adminAnalytics: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"adminDashboardAnalytics/getAdminDashboardAnalyticsWithFullDetails",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            }
        }),
        getAllMentors: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"mentors/getMentorsWithFullDetails",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            }
        }),
        getAllMentees: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"mentees/getMenteesWithFullDetails",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            }
        }),
        getFaqs: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"faqs/getFaqsWithFullDetails",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            providesTags:['faqs']
        }),
        createFaqs: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"faqs/createFaq",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            invalidatesTags:['faqs']
        }),
        updateFaqs: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"faqs/updateFaq",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            invalidatesTags:['faqs']
        }),
        removeFaqs: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"faqs/removeFaq",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            invalidatesTags:['faqs']
        }),
        createAnnouncement: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"announcements/createAnnouncement",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            invalidatesTags:['announcement']
        }),
        getAnnouncement: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"announcements/getAnnouncementsWithFullDetails",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            providesTags:['announcement']
        }),
        updateAnnouncement: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"announcements/updateAnnouncement",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            invalidatesTags:['announcement']
        }),
        removeAnnouncement: builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url:"announcements/removeAnnouncement",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            invalidatesTags:['faqs']
        }),
        getFinanceData : builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url: "financeMetaData/getFinanceMetaDatasWithFullDetails",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            }
        }),
        getAdminById : builder.mutation({
            query : (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url : "superAdmins/findSuperAdminById",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body:data
                }
            }
        }),
        updateAdminProfile : builder.mutation({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url: "users/update-profile",
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
            invalidatesTags:['adminprofile']
        }),
        getAdminProfile : builder.query({
            query: (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url: `users/getprofilefromid?uid=${data}`,
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    }
                }
            },
            providesTags:['adminprofile']
        }),
        getAllListOfUser : builder.mutation({
            query : (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url : 'users/listAllUsers',
                    method: 'POST',
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            }
        }),
        getAllSession : builder.mutation({
            query : (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url : 'sessionRequests/getSessionRequestsWithFullDetails',
                    method: 'POST',
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            }
        }),
        updateAnyField : builder.mutation({
            query : (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url : 'users/editUser',
                    method: 'POST',
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
        }),
        getSettings : builder.mutation({
            query : (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url : 'userSettings/findUserSettingById',
                    method: 'POST',
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
        }),
        forgetPassword : builder.mutation({
            query : (data) => {
                const token = cookie.get('loungeToken')
                return {
                    url : 'users/forgot-password',
                    method: 'POST',
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
        }),
        changePassword : builder.mutation({
            query : (data) => {
                const token = localStorage.getItem('loungeForgetCookie').replace(/"/g, '')
                return {
                    url : 'users/changePassword',
                    method: 'POST',
                    headers:{
                        "Content-Type":"application/json",
                        Authorization : `Bearer ${token}`
                    },
                    body:data
                }
            },
        })
    })
})

export const 
{
useChangePasswordMutation,
useForgetPasswordMutation,
useGetSettingsMutation,
useUpdateAnyFieldMutation,
useGetAllSessionMutation,
useGetAllListOfUserMutation,
useAdminSignInMutation,
useAdminVerifyMutation,
useAdminAnalyticsMutation,
useGetAllMentorsMutation,
useGetAllMenteesMutation,
useGetFaqsMutation,
useCreateFaqsMutation,
useUpdateFaqsMutation,
useRemoveFaqsMutation,
useCreateAnnouncementMutation,
useGetAnnouncementMutation,
useUpdateAnnouncementMutation,
useRemoveAnnouncementMutation,
useGetFinanceDataMutation,
useGetAdminByIdMutation,
useUpdateAdminProfileMutation,
useGetAdminProfileQuery
} 
= adminApi
