// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import Cookies from "universal-cookie";
// const cookie = new Cookies()
// export const searchUserApi = createAsyncThunk('user/login',async ({payload},{rejectWithValue}) => {
//     try{
//         const token = cookie.get('token')
//         const userRes = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/users/searchUser`,{payload},{
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-type": "application/json",
//             },
//             body: {
//                 "userData":{
//                     "name":payload
//                 },
//                 "query":{
//                 "critarion": {"active" : true}
//                 }
//             },
//         })
//         return await userRes
//     }catch(error){
//         return rejectWithValue(error.userRes.data)
//     }
// })

import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export const searchUserApi = async (searchTerm) => {
    const token = cookie.get("loungeToken");
    try {
        const response = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/users/searchUser`, {
            userData: { name: searchTerm },
            query: { critarion: { active: true } }
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
