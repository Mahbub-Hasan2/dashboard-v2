import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setAccessToken } from "../admin/adminSlice";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mahbub-backend.vercel.app',
        // baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ["projects"],
    endpoints: (builder) => ({
        
        getProjects: builder.query({
            query: (page) => ({
                url: `/projects/${page}`,
                headers: { authorization: `Bearer ${JSON.parse(sessionStorage.getItem("accessToken"))}` }
            }),
            providesTags: ["projects"]

        }),
        getProject: builder.query({
            query: (ProjectId) => ({
                url: `/projects/sing/${ProjectId}`,
                headers: { authorization: `Bearer ${JSON.parse(sessionStorage.getItem("accessToken"))}` }
            }),
            invalidatesTags: ["projects"]
        }),
        addProject: builder.mutation({
            query: (data) => ({
                url: "/projects",
                method: "POST",
                body: data,
                headers: { authorization: `Bearer ${JSON.parse(sessionStorage.getItem("accessToken"))}` }
            }),
            invalidatesTags: ["projects"]
        }),
        editProject: builder.mutation({
            query: (data) => ({
                url: `/projects/update`,
                method: "POST",
                body: data,
                headers: { authorization: `Bearer ${JSON.parse(sessionStorage.getItem("accessToken"))}` }
            }),
            invalidatesTags: ["projects"]
        }),
        changePositionProject: builder.mutation({
            query: (data) => ({
                url: `/projects/position`,
                method: "POST",
                body: data,
                headers: { authorization: `Bearer ${JSON.parse(sessionStorage.getItem("accessToken"))}` }
            }),
            invalidatesTags: ["projects"]
        }),
        
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/projects/delete/${id}`,
                method: "DELETE",
                headers: { authorization: `Bearer ${JSON.parse(sessionStorage.getItem("accessToken"))}` }
            }),
            invalidatesTags: ["projects"]
        }),

        loginAdmin: builder.mutation({
            query: (data) => ({
                url: "/admin/login",
                method: "POST",
                body: data,
            })
        }),
        
    }),

});

export const {
    useAddProjectMutation,
    useDeleteProjectMutation,
    useEditProjectMutation,
    useGetProjectQuery,
    useGetProjectsQuery,
    useLoginAdminMutation,
    useChangePositionProjectMutation
} = apiSlice;