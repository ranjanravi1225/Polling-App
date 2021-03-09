import {
    REQUESTEDIT_TITLE,
    SUCCESSEDIT_TITLE
} from '../Constant/Type';

const initialState = {
    isLoading: false,
}

const editPollTitleReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTEDIT_TITLE: {
            return {
                isLoading: true
            }
        }
        case SUCCESSEDIT_TITLE: {
            return {
                isLoading: false,
            }
        }
        default:
            return state
    }
}

export default editPollTitleReducer;
