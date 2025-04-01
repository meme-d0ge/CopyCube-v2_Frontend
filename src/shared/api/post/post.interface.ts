import {PaginationData} from "@/shared/api";

export enum PostType{
    public='public',
    private='private',
    link='link',
}

export interface GetPostData{
    postId: string
}
export interface CreatePostData{
    title: string;
    body: string;
    type: PostType;
}
export interface UpdatePostData{
    postId: string,
    body: string,
    type: PostType,
}
export interface DeletePostData{
    postId: string,
}

export interface GetPublicPostsData{
    pagination: PaginationData
}
export interface GetPostsByUsernameData{
    username: string,
    pagination: PaginationData
}
export interface GetMyPostsData{
    pagination: PaginationData
}