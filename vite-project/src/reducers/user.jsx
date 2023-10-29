import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        role: null,
        name: null,
        email: null,
        id: null,
    },
    reducers: {
        setUser(state, action){
            const user = action.payload
            state.token = user.token
            state.role = user.role
            state.name = user.name
            state.email = user.email
            state.id = user.id
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setRole(state, action) {
            state.role = action.payload
        },
        setName(state, action) {
            state.name = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setId(state, action){
            state.id = action.payload
        },
        clearUser(state, action) {
            state.token = null
            state.role = null
            state.name = null
            state.email = null
            state.id = null
        }
    }
})

const { actions, reducer } = userSlice

export const {
    setUser,
    setToken,
    setRole,
    setName,
    setEmail,
    setId,
    clearUser,
} = actions

export default reducer