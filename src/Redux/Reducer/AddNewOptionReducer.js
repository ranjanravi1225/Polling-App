import {
    REQUESTADD_NEWOPTION,
    SUCESSADD_NEWOPTION,
    ERRORADD_NEWOPTION
} from '../Constant/Type';

const initialState = {
    isLoading: false,
}

const addNewOptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTADD_NEWOPTION: {
            return {
                isLoading: true
            }
        }
        case SUCESSADD_NEWOPTION: {
            return {
                isLoading: false,
            }
        }
        case ERRORADD_NEWOPTION: {
            return {
                isLoading: false,
            }
        }
        default:
            return state
    }
}

export default addNewOptionReducer;
