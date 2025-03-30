import {api} from "@/shared/api";
import {apiConfig} from "@/shared/config/api.config";

export interface LoginData {
    username: string;
    password: string;
}
const authApi = api.injectEndpoints({
    endpoints: builder => ({
        refresh: builder.query({
            query: () => apiConfig.refresh
        }),
        login: builder.mutation({
            query: (payload: LoginData)  => ({
                body: payload,
                url: apiConfig.login,
                method: 'POST',
            })
        }),
        logout: builder.mutation({
            query: ()  => ({
                url: apiConfig.logout,
                method: 'DELETE',
            })
        })
    })
})
export const { useLoginMutation, useLogoutMutation, useRefreshQuery } = authApi;
