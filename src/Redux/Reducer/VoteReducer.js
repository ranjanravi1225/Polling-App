import {
    REQUEST_VOTE,
    SUCESS_VOTE,
} from '../Constant/Type';

const initialState = {
    isLoading: false,
}

const voteReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_VOTE: {
            return {
                isLoading: true,
            }
        }
        case SUCESS_VOTE: {
            return {
                isLoading: false,
            }
        }
        default:
            return state;
    }
}

export default voteReducer;
