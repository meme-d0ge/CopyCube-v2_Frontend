import {createSlice} from "@reduxjs/toolkit";
import {AccessToken} from "@/shared/api/api.interface";

interface AuthState {
    accessToken: AccessToken | null;
}
export const authSlice = createSlice({
    name: "auth",
    initialState: {} as AuthState,
    reducers: {
        addAccessToken: (state, action: {payload: AccessToken}) => {
            state.accessToken = action.payload;
        },
        removeAccessToken: (state) => {
            state.accessToken = null
        }
    }
})
export const { addAccessToken, removeAccessToken } = authSlice.actions
export default authSlice.reducer