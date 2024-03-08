import { createSlice } from "@reduxjs/toolkit";
import { mentorApi } from "features/apis/mentor";

const initialState = {
    mentorData:[],
    isLoading:false
}

export const mentorSlice = createSlice({
    name:'mentorDetails',
    initialState,
    extraReducers: (builder) => {
        builder.addMatcher(
            mentorApi.endpoints.getMentorById.matchPending,(state)=>{
                state.isLoading = true
            }
        ).addMatcher(
            mentorApi.endpoints.getMentorById.matchFulfilled,(state,action) => {
                state.isLoading = false
                state.mentorData = action.payload
            }
        ).addMatcher(
            mentorApi.endpoints.getMentorById.matchRejected,(state,action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    }
})


export default mentorSlice.reducer