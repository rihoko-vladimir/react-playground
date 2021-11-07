import {createSlice} from "@reduxjs/toolkit";

const auth = createSlice({
    name: "auth",
    initialState: {
        login: "",
        password: "",
        isLoginError: false,
        isPasswordError: false,
    },
    reducers: {
        changeLogin: (state, action) => {
            state.login = action.payload.newLogin;
        },
        changePassword: (state, action) => {
            state.password = action.payload.newPassword;
        },
        changeLoginError: (state, action)=>{
            state.isLoginError = action.payload.isLoginError;
        },
        changePasswordError: (state, action)=>{
            state.isPasswordError = action.payload.isPasswordError;
        }
    }
});

export const {changeLogin, changePassword, changeLoginError, changePasswordError} = auth.actions;

export default auth.reducer;
