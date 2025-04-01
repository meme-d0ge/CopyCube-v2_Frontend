import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {apiConfig} from "@/shared/config/api.config";
import {AppState} from "@/app/store/store";
const API_URL = String(process.env.NEXT_PUBLIC_BASE_URL)

const baseQuery = fetchBaseQuery({
    credentials: 'include',
    baseUrl: `${API_URL}${apiConfig.apiPrefix}`,
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as AppState
        if (state.auth.accessToken?.token) {
            headers.set('Authorization', `Bearer ${state.auth.accessToken.token}`);
        }
        return headers;
    },
})
const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery(apiConfig.refresh, api, extraOptions);
        if (refreshResult.data) {
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});