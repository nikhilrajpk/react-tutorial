import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({baseUrl:`https://jsonplaceholder.typicode.com/users`}),
    endpoints : (builder) =>({
        getUser : builder.query({
            query : (userId)=> `/${userId}`
        })
    })
})

export const {useGetUserQuery} = apiSlice;