import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        userDetails: null,// JSON.parse(sessionStorage.getItem('userDetails')), 
        token: null,// sessionStorage.getItem('token'), 
        refreshToken: null // sessionStorage.getItem('refreshToken') 
    },
    reducers: {
        setCredentials: (state, action) => {
            const { userDetails, token, refreshToken } = action.payload;
            state.userDetails = userDetails;
            state.token = token;
            state.refreshToken = refreshToken;
        },
        logOut: (state, action) => {
            state.userDetails = null;
            state.token = null;
            state.refreshToken = null;
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectUserDetails = (state) => state.auth.userDetails;
export const selectToken = (state) => state.auth.token;
export const selectRefreshToken = (state) => state.auth.refrehToken;