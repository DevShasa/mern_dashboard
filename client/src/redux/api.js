import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes:["User", "Products", "Customers"], // identify the state
    endpoints: (build)=>({
        getUser: build.query({
            query:(id)=>`general/user/${id}`,
            providesTags: ["User"] // mutate user state when this function is called 
        }),
        getProducts: build.query({
            query:()=>`client/products`,
            providesTags:["Products"]
        }),
        getCustomers: build.query({
            query:()=>`client/customers`,
            providesTags:["Customers"]
        })
    })
})


export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery} = api