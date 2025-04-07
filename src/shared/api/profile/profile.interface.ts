export interface UpdateProfile{
    avatar: File;
    displayName: string;
    description: string;
}
export interface GetProfileByUsername{
    username: string;
}

export interface ResponseGetProfile {
    username: string,
    displayName: string,
    description: string | null,
    avatar: string | null,
    CreateDate: string,
    UpdateDate: string;
}
export interface ResponseUpdateProfile{
    success: boolean
}
export interface ResponseGetProfileByUsername{
    username: string,
    displayName: string,
    description: string | null,
    avatar: string | null,
    CreateDate: string,
    deleted: boolean
}