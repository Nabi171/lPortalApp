import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState() ?.auth ?.accessToken;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: ["Videos"],
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => "/videos",
            keepUnusedDataFor: 600,
            providesTags: ["videos"],
        }),
        getQuizzes: builder.query({
            query: () => "/quizzes",
            keepUnusedDataFor: 600,
            providesTags: ["quizzes"],
        }),
        getAssignmentMark: builder.query({
            query: () => "/assignmentMark",
            keepUnusedDataFor: 600,
            providesTags: ["assignmentMark"],
        }),
        getAssignments: builder.query({
            query: () => "/assignments",
            keepUnusedDataFor: 600,
            providesTags: ["assignments"],
        }),



    }),
});

export const {
    useGetVideosQuery,
    useGetQuizzesQuery,
    useGetAssignmentMarkQuery,
    useGetAssignmentsQuery,


} = apiSlice;