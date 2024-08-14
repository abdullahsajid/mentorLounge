import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleSignIn : false,
    adminEmail: '',
    verify:false
}

export const adminSlice = createSlice({
    name:'adminslice',
    initialState,
    reducers:{
        setToggleSignIn : (state,action) => {
            state.toggleSignIn = action.payload
        },
        setAdminMail : (state,action) => {
            state.adminEmail = action.payload
        },
        setVerify : (state,action) => {
            state.verify = action.payload
        }
    }
})

export default adminSlice.reducer

export const {setToggleSignIn,setAdminMail,setVerify} = adminSlice.actions

