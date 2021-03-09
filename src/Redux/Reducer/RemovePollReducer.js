import {
    REMOVE_POLL,
    REQUESTREMOVE_POLL,
} from '../Constant/Type';

const initialState = {
    isLoading: false,
}

const removePollReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTREMOVE_POLL: {
            return {
                isLoading: true,
            }
        }
        case REMOVE_POLL: {
            return {
                isLoading: false,
            }
        }
        default:
            return state;
    }
}

export default removePollReducer;
