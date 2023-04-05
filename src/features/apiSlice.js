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
        editQuizze: builder.mutation({
            query: ({ id, data }) => ({
                url: `/quizzes/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "Quizzes",
                { type: "Quizze", id: arg.id },
            ],
        }),
        addQuizze: builder.mutation({
            query: (data) => ({
                url: "/quizzes",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["quizzes"],
        }),
        deleteQuizze: builder.mutation({
            query: (id) => ({
                url: `/quizzes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["quizzes"],
        }),

        /////////handle AssignmentMark implement/////////
        getAssignmentMark: builder.query({
            query: () => "/assignmentMark",
            keepUnusedDataFor: 600,
            providesTags: ["assignmentMark"],
        }),
        editAssignmentMark: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignmentMark/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "AssignmentMark",
                { type: "AssignmentMark", id: arg.id },
            ],
        }),
        postAssignmentMark: builder.mutation({
            query: (data) => ({
                url: "/assignmentMark",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["AssignmentMark"],
        }),
        getSingleAssignmentMark: builder.query({
            query: (videoId) => `/assignmentMark/${videoId}`,
            providesTags: (result, error, arg) => [{ type: "AssignmentMark", id: arg }],
        }),

        /////////handle QuizeMark implement/////////
        getQuizMark: builder.query({
            query: () => "/quizMark",
            keepUnusedDataFor: 600,
            providesTags: ["quizMark"],
        }),
        getSingleQuizMark: builder.query({
            query: (videoId) => `/quizmark/${videoId}`,
            providesTags: (result, error, arg) => [{ type: "QuizeMark", id: arg }],
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


        ///////////handle user implement////////
        getUsers: builder.query({
            query: () => "/users",
            keepUnusedDataFor: 600,
            providesTags: ["users"],
        }),
        getUser: builder.query({
            query: (userId) => `/users/${userId}`,
            providesTags: (result, error, arg) => [{ type: "User", id: arg }],
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
    useGetQuizzeQuery,
    useAddQuizzeMutation,
    useEditQuizzeMutation,
    useDeleteQuizzeMutation,


    useGetAssignmentMarkQuery,
    useEditAssignmentMarkMutation,
    usePostAssignmentMarkMutation,
    useGetSingleAssignmentMarkQuery,

    useGetQuizMarkQuery,
    useGetSingleQuizMarkQuery,


    useGetAssignmentsQuery,
    useGetAssignmentQuery,
    useAddAssignmentMutation,
    useEditAssignmentMutation,
    useDeleteAssignmentMutation,

    useGetUsersQuery,
    useGetUserQuery,


} = apiSlice;