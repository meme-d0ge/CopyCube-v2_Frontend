import {api} from "@/shared/api";
import {apiConfig} from "@/shared/config/api.config";

enum PostType{
    public='public',
    private='private',
    link='link',
}
interface PaginationData{
    limit: number;
    page: number;
}

interface GetPostData{
    postId: string
}
interface CreatePostData{
    title: string;
    body: string;
    type: PostType;
}
interface UpdatePostData{
    postId: string,
    body: string,
    type: PostType,
}
interface DeletePostData{
    postId: string,
}

interface GetPublicPostsData{
    pagination: PaginationData
}
interface GetPostsByUsernameData{
    username: string,
    pagination: PaginationData
}
interface GetMyPostsData{
    pagination: PaginationData
}

const postApi = api.injectEndpoints({
    endpoints: builder => ({
        getPublicPosts: builder.query({
            query: (payload: GetPublicPostsData) => {
                return {
                    url: `${apiConfig.getPublicPosts}`,
                    params: payload.pagination
                }
            }
        }),
        getPostsByUsername: builder.query({
            query: (payload: GetPostsByUsernameData) => {
                return {
                    url: `${apiConfig.getPostsByUsername}/${payload.username}`,
                    params: payload.pagination
                }
            }
        }),
        getMyPosts: builder.query({
            query: (payload: GetMyPostsData) => {
                return {
                    url: apiConfig.getMyPosts,
                    params: payload.pagination
                }
            }
        }),

        getPostById: builder.query({
            query: (payload: GetPostData) => `${apiConfig.getPostById}/${payload.postId}`
        }),
        createPost: builder.mutation({
            query: (payload: CreatePostData) => ({
                body: payload,
                url: apiConfig.createPost,
                method: "POST",
            })
        }),
        updatePostById: builder.mutation({
            query: (payload: UpdatePostData) => ({
                body: payload,
                url: `${apiConfig.updatePostById}/${payload.postId}`,
                method: "PATCH",
            })
        }),
        deletePostById: builder.mutation({
            query: (payload: DeletePostData) => ({
                url: `${apiConfig.deletePostById}/${payload.postId}`,
                method: "DELETE",
            })
        })
    })
})

export const {
    useGetPublicPostsQuery,
    useGetMyPostsQuery,
    useGetPostsByUsernameQuery,
    useGetPostByIdQuery,
    useCreatePostMutation,
    useUpdatePostByIdMutation,
    useDeletePostByIdMutation
} = postApi;