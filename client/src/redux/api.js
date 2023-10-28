import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes:["User"], // identify the state
    endpoints: (build)=>({
        getUser: build.query({query:(id)=>`general/user/${id}`,
        providesTags: ["User"] // mutate user state when this function is called 
    }),
    })
})


export const { useGetUserQuery } = api