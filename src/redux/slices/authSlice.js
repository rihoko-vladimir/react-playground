import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
   name: "authStore",
   initialState: {
       login: "",
       password: "",
   } ,
    reducers: {
       changeLogin: (state, action)=>{
           state.login = action.payload.newLogin;
       },
        changePassword : (state, action)=>{
          state.password = action.payload.newPassword;
        },
    }
});

export const {changeLogin, changePassword} = authSlice.actions;

export default authSlice.reducer;
