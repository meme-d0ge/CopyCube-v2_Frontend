import {AccessToken, addAccessToken, api, removeAccessToken} from "@/shared/api";
import {apiConfig} from "@/shared/config/api.config";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {LoginData, ResponseLogin, ResponseLogout, ResponseRefresh} from "@/shared/api/auth/auth.interface";

const authApi = api.injectEndpoints({
    endpoints: builder => ({
        refresh: builder.query({
            query: () => apiConfig.refresh,
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    const accessToken = data.accessToken as AccessToken
                    dispatch(addAccessToken(accessToken))
                } catch (error) {
                    if (error && (error as FetchBaseQueryError).status === 401) {
                        dispatch(removeAccessToken());
                    }
                }
            },
            transformResponse(baseQueryReturnValue: ResponseRefresh) {
                return baseQueryReturnValue
            },
        }),
        login: builder.mutation({
            query: (payload: LoginData)  => ({
                body: payload,
                url: apiConfig.login,
                method: 'POST',
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(addAccessToken(data.accessToken as AccessToken))
                } catch {}
            },
            transformResponse(baseQueryReturnValue: ResponseLogin) {
                return baseQueryReturnValue
            },
        }),
        logout: builder.mutation({
            query: ()  => ({
                url: apiConfig.logout,
                method: 'DELETE',
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(removeAccessToken())
                } catch {}
            },
            transformResponse(baseQueryReturnValue: ResponseLogout) {
                return baseQueryReturnValue
            },
        })
    })
})
export const { useLoginMutation, useLogoutMutation, useRefreshQuery } = authApi;
