import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
    reducerPath: "adminApi",
    tagTypes:["User", "Products", "Customers", "Transactions", "Geography", "Sales"], // identify the state
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
        }),
        getTransactions : build.query({
            query:({page, pageSize, sort, search})=>({
                url:`client/transactions`,
                method:"GET",
                params: {page, pageSize, sort, search}
            }),
            providesTags:["Transactions"]
        }),
        getGeography: build.query({
            query:()=>"client/geography",
            providesTags:["Geography"]
        }),
        getSales: build.query({
            query:()=>"sales",
            providesTags:["Sales"]
        })
    })
})


export const { 
    useGetUserQuery, 
    useGetProductsQuery, 
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery
} = api