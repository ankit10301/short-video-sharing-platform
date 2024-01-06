import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut, selectToken, selectRefreshToken } from './auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    const userDetails = args.getState(selectToken); //sessionStorage.getItem('userDetails');
    const refreshToken = args.getState(selectRefreshToken);//sessionStorage.getItem('refreshToken');
    if (result?.error?.status === 401) {
        // console.log('sending refresh token');
        // send refresh token to get new access token
        const refreshResult = await baseQuery(
            {
                url: 'user/token',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {refreshToken}
            }, 
            api, 
            extraOptions
        )

        if (refreshResult?.data) {
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data, userDetails }));
            // sessionStorage.setItem('token', refreshResult.data.token);
            // sessionStorage.setItem('refreshToken', refreshResult.data.refreshToken);
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
            sessionStorage.clear();
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})