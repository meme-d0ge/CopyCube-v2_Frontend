
export interface APIConfig {
    apiPrefix: string;

    refresh: string,
    login: string,
    logout: string,

    createUser: string,
    updateUser: string,
    deleteUser: string,

    getProfile: string,
    updateProfile: string,
    getProfileByUsername: string

    getPublicPosts: string,
    getPostsByUsername: string,
    getMyPosts: string,

    createPost: string,
    getPostById: string,
    updatePostById: string,
    deletePostById: string
}
export const apiConfig: APIConfig = {
    apiPrefix: '/api',

    refresh: '/auth/refresh',
    login: '/auth/login',
    logout: '/auth/logout',

    createUser: '/user',
    updateUser: '/user',
    deleteUser: '/user',

    getProfile: '/profile',
    updateProfile: '/profile',
    getProfileByUsername: '/profile',

    getPublicPosts: '/post/public',
    getPostsByUsername: '/post/user',
    getMyPosts: '/post/user',

    createPost: '/post',
    getPostById: '/post',
    updatePostById: '/post',
    deletePostById: '/post',
}
