import {
    ADDUSER_REQUESTED,
    ADDUSER_SUCCESS,
    ADDUSER_ERROR,
} from '../Constant/Type';

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
}

const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDUSER_REQUESTED: {
            return {
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        }
        case ADDUSER_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
            }
        }
        case ADDUSER_ERROR: {
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

export default addUserReducer;
