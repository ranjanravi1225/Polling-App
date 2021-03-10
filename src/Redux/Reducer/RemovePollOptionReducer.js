import {
    REQUESTREMOVE_POLLOPTION,
    REMOVE_POLLOPTION
} from '../Constant/Type';

const initialState = {
    isLoading: false,
}

const removePollOptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTREMOVE_POLLOPTION: {
            return {
                isLoading: true,
            }
        }
        case REMOVE_POLLOPTION: {
            return {
                isLoading: false,
            }
        }
        default:
            return state;
    }
}

export default removePollOptionReducer;
