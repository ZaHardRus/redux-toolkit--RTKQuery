import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const PostService = createApi({
    reducerPath: 'PostService',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<any[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        fetchPostById: build.query<any, number>({
            query: (id: number) => ({
                url: `/posts/${id}`,
            }),
        }),
        createPost: build.mutation<any, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: "POST",
                body: post
            }),
            invalidatesTags:['Post']
        }),
        updatePost: build.mutation<any, IPost>({
            query: (post:IPost) => ({
                url: `/posts/${post.id}`,
                method: "PATCH",
                body: post
            }),
            invalidatesTags:['Post']
        }),
        deletePost: build.mutation<any, number>({
            query: (id:number) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags:['Post']
        }),
    })
})

export interface IPost {
    id: number
    title: string
    body: string
}