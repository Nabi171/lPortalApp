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
        /////////handle videos implement/////////
        getVideos: builder.query({
            query: () => "/videos",
            keepUnusedDataFor: 600,
            providesTags: ["videos"],
        }),
        getVideo: builder.query({
            query: (videoId) => `/videos/${videoId}`,
            providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
        }),
        editVideo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "Books",
                { type: "Video", id: arg.id },

            ],
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

        /////////handle Quizzes implement/////////
        getQuizzes: builder.query({
            query: () => "/quizzes",
            keepUnusedDataFor: 600,
            providesTags: ["quizzes"],
        }),
        getQuizze: builder.query({
            query: (quizzeId) => `/quizzes/${quizzeId}`,
            providesTags: (result, error, arg) => [{ type: "Quizze", id: arg }],
        }),

        getAssignmentMark: builder.query({
            query: () => "/assignmentMark",
            keepUnusedDataFor: 600,
            providesTags: ["assignmentMark"],
        }),

        ///////////handle assignment implement////////
        getAssignments: builder.query({
            query: () => "/assignments",
            keepUnusedDataFor: 600,
            providesTags: ["assignments"],
        }),
        getAssignment: builder.query({
            query: (assignmentId) => `/assignments/${assignmentId}`,
            providesTags: (result, error, arg) => [{ type: "Assignment", id: arg }],
        }),
        addAssignment: builder.mutation({
            query: (data) => ({
                url: "/assignments",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["videos"],
        }),
        editAssignment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignments/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "Books",
                { type: "Video", id: arg.id },

            ],
        }),
        deleteAssignment: builder.mutation({
            query: (id) => ({
                url: `/assignments/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["assignments"],
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
    useEditVideoMutation,
    useDeleteVideoMutation,

    useGetQuizzesQuery,
    useGetAssignmentMarkQuery,

    useGetAssignmentsQuery,
    useGetAssignmentQuery,
    useAddAssignmentMutation,
    useEditAssignmentMutation,
    useDeleteAssignmentMutation,

    useGetUsersQuery,


} = apiSlice;