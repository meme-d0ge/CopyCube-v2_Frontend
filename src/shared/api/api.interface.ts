export interface PaginationData{
    limit: number;
    page: number;
}
export interface AccessToken {
    token: string;
    iat: number;
    exp: number;
}
export interface ErrorApi {
    message: string,
    error: string | undefined,
    statusCode: number
}