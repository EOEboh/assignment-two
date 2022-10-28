import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const createRequest = (url) => ({url});

export const randomUserApi =createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/'}), endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => createRequest(`?results=5000`)
        })
    })
})
export const { useGetUsersQuery} = randomUserApi;