import { createSlice } from "@reduxjs/toolkit";
import { menteeApi } from "features/apis/mentee";

const initialState = {
    menteeData:[],
    allMentor:[],
    isLoading:false
}
export const menteeSlice = createSlice({
    name:'menteeDetails',
    initialState,
    extraReducers:(builder) => {
        builder.addMatcher(
            menteeApi.endpoints.getMenteeById.matchPending,(state)=>{
                state.isLoading = true
            }
        ).addMatcher(
            menteeApi.endpoints.getMenteeById.matchFulfilled,(state,action) => {
                state.isLoading = false
                state.menteeData = action.payload
            }
        ).addMatcher(
            menteeApi.endpoints.getMenteeById.matchRejected,(state,action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ).addMatcher(
            menteeApi.endpoints.getAllMentor.matchPending,(state)=>{
                state.isLoading = true
            }
        ).addMatcher(
            menteeApi.endpoints.getAllMentor.matchFulfilled,(state,action) => {
                state.isLoading = false
                state.allMentor = action.payload
            }
        ).addMatcher(
            menteeApi.endpoints.getAllMentor.matchRejected,(state,action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    }
})

export default menteeSlice.reducer