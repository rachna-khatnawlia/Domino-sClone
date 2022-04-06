import types from "../types"

export const login = () => {
    return {
        type: types.LOGIN
    } 
}

export const logout = () => {
    return { 
        type: types.USER_LOGOUT
    }
}