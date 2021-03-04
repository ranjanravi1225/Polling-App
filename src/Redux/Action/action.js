import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_REQUESTED,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from '../Constant/Type';

export const loginRequested = (user) => {
    return {
        type: LOGIN_REQUESTED,
        user
    }
}

export const loginSuccess = (username) => {
    return {
        type: LOGIN_SUCCESS,
        username
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,

    }
}

export const signUpRequested = (user) => {
    return {
        type: SIGNUP_REQUESTED,
        user
    }
}

export const signUpSuccess = () => {
    return {
        type: SIGNUP_SUCCESS,
    }
}

export const signUpError = () => {
    return {
        type: SIGNUP_ERROR,
    }
}
