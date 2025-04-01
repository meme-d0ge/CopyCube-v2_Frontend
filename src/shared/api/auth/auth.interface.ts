import {AccessToken} from "@/shared/api";

export interface LoginData {
    username: string;
    password: string;
}

export type ResponseRefresh = AccessToken
export interface ResponseLogout {
    success: boolean
}
export interface ResponseLogin {
    user: {
        id: string,
        username: string,
        CreateDate: string,
        UpdateDate: string
    },
    accessToken: AccessToken
}
