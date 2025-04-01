import {api} from "@/shared/api";
import {apiConfig} from "@/shared/config/api.config";
import {CreateUserData, DeleteUserData, UpdateUserData} from "@/shared/api/user/user.interface";

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
            query: (payload: DeleteUserData) => ({
                body: payload,
                url: apiConfig.deleteUser,
                method: 'DELETE',
            })
        }),
    })
})

export const { useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
