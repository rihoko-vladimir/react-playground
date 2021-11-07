import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "../slices/authSlice";

export default configureStore({
    reducer: {
        authReducer: loginSlice,
    }
})