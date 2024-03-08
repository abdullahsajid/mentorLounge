import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "features/apis/user";
import { menteeApi } from "features/apis/mentee";
import { mentorApi } from "features/apis/mentor";
import  userAuthSlice  from "features/signup/userAuth";
import mentee_details from "features/mentee/mentee_details";
import mentor_details from "features/montor/mentor_details";
export const store = configureStore({
  reducer: {
    user: userAuthSlice,
    menteeData:mentee_details,
    mentorData:mentor_details,
    [userApi.reducerPath]: userApi.reducer,
    [menteeApi.reducerPath]:menteeApi.reducer,
    [mentorApi.reducerPath]:mentorApi.reducer
  },
  middleware: (middle) => [...middle(), 
    userApi.middleware,
    menteeApi.middleware,
    mentorApi.middleware
  ],
});
