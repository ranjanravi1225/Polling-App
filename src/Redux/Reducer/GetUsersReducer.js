import {
    GETALL_USERS,
    RECEIVEALL_USERS
} from '../Constant/Type';

const initialState = {
    data: '',
    isLoading: false
}

const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALL_USERS: {
            return {
                isLoading: true
            }
        }
        case RECEIVEALL_USERS: {
            return {
                isLoading: false,
                data: action.user
            }
        }
        default:
            return state;
    }
}

export default getUsersReducer;
