import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from '../Constant/Type';

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUESTED: {
            return {
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        }
        case LOGIN_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
            }
        }
        case LOGIN_ERROR: {
            return {
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        }
        default:
            return state;
    }
}

export default loginReducer;
