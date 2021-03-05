import {
    GETALL_POLLS,
    RECEIVEDALL_POLLS
} from '../Constant/Type';

const initialState = {
    isLoading: false,
    pollData: ''
}

const getPollsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALL_POLLS: {
            return {
                isLoading: true
            }
        }
        case RECEIVEDALL_POLLS: {
            return {
                isLoading: false,
                pollData: action.polls
            }
        }
        default:
            return state
    }
}

export default getPollsReducer;
