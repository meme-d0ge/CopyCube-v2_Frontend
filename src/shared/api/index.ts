export {api} from './api'

export {useLoginMutation, useLogoutMutation, useRefreshQuery} from './auth/auth.api';
export type {LoginData} from './auth/auth.interface';

export {
    useGetPublicPostsQuery,
    useGetMyPostsQuery,
    useGetPostsByUsernameQuery,
    useGetPostByIdQuery,
    useCreatePostMutation,
    useUpdatePostByIdMutation,
    useDeletePostByIdMutation
} from './post/post.api';
export type {
    PostType,
    CreatePostData,
    GetMyPostsData,
    GetPostsByUsernameData,
    GetPublicPostsData,
    DeletePostData,
    GetPostData,
    UpdatePostData
} from './post/post.interface';

export {useGetProfileQuery, useGetProfileByUsernameQuery, useUpdateProfileMutation} from './profile/profile.api';
export type {UpdateProfile, GetProfileByUsername} from './profile/profile.interface';

export {useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation} from './user/user.api';
export type {CreateUserData, UpdateUserData} from './user/user.interface';

export {default} from './auth.slice'
export {addAccessToken, removeAccessToken} from './auth.slice'
export type {AccessToken} from './api.interface'

export type {PaginationData} from './api.interface'
