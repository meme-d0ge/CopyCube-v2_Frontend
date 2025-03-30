import {api} from "@/shared/api";
import {apiConfig} from "@/shared/config/api.config";


export interface CreateUserData {
    username: string;
    displayName: string;
    password: string;
}
export interface UpdateUserData {
    password: string;
    newPassword: string;
}
const userApi = api.injectEndpoints({
    endpoints: builder => ({
        createUser: builder.mutation({
            query: (payload: CreateUserData) => ({
                body: payload,
                url: apiConfig.createUser,
                method: 'POST',
            })
        }),
        updateUser: builder.mutation({
            query: (payload: UpdateUserData) => ({
                body: payload,
                url: apiConfig.updateUser,
                method: 'PATCH',
            })
        }),
        deleteUser: builder.mutation({
            query: (payload: CreateUserData) => ({
                body: payload,
                url: apiConfig.deleteUser,
                method: 'DELETE',
            })
        }),
    })
})

export const { useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
