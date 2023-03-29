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
        getVideo: builder.query({
            query: (videoId) => `/books/${videoId}`,
            providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
        }),
        addVideo: builder.mutation({
            query: (data) => ({
                url: "/videos",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["videos"],
        }),
        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["videos"],
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
        getUsers: builder.query({
            query: () => "/users",
            keepUnusedDataFor: 600,
            providesTags: ["users"],
        }),



    }),
});

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useAddVideoMutation,
    useDeleteVideoMutation,
    useGetQuizzesQuery,
    useGetAssignmentMarkQuery,
    useGetAssignmentsQuery,
    useGetUsersQuery,


} = apiSlice;