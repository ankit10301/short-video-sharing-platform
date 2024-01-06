import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
                url: 'user/signin',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            })
        }),
        signup: builder.mutation({
            query: body => ({
                url: 'user/signup',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            })
        }),
        signout: builder.mutation({
            query: () => ({
                url: 'user/signout',
                method: 'GET'
            })
        }),
    })
})

export const {
    useLoginMutation,
    useSignupMutation,
    useSignoutMutation,
} = authApiSlice