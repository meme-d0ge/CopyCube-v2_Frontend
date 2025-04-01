export interface UpdateProfile{
    avatar: File;
    displayName: string;
    description: string;
}
export interface GetProfileByUsername{
    username: string;
}
