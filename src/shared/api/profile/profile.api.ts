import {api} from "@/shared/api";
import {apiConfig} from "@/shared/config/api.config";
import {GetProfileByUsername, UpdateProfile} from "@/shared/api/profile/profile.interface";

const profileApi = api.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: ()=> apiConfig.getProfile
        }),
        getProfileByUsername: builder.query({
            query: (payload: GetProfileByUsername)=> `${apiConfig.getProfileByUsername}/${payload.username}`,
        }),
        updateProfile: builder.mutation({
            query: (payload: UpdateProfile)=> {
                const body = new FormData()
                body.append('avatar',payload.avatar)
                body.append('displayName',payload.displayName)
                body.append('description',payload.description)

                return {
                    url: apiConfig.updateProfile,
                    body: body,
                    method: 'PATCH',
                    formData:true
                }
            }
        }),
    })
})

export const  { useGetProfileQuery, useGetProfileByUsernameQuery, useUpdateProfileMutation } = profileApi