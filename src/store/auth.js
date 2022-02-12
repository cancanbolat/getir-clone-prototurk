import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem("auth") ?? false
    },
    reducers: {
        login: (state, action) => {
            //set response user data to localStorage
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("nameIdentifier", action.payload.nameIdentifier)
            localStorage.setItem("auth", action.payload)
            state.user = action.payload
        },
        logout: state => {
            state.user = false
            localStorage.removeItem("auth")
        }
    }
})

export const { login, logout } = auth.actions

export default auth.reducer