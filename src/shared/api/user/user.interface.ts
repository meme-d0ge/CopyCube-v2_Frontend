export interface CreateUserData {
    username: string;
    displayName: string;
    password: string;
}
export interface UpdateUserData {
    password: string;
    newPassword: string;
}
export interface DeleteUserData {
    password: string;
}