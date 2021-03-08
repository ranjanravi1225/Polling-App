import {
    ADD_POLL,
    REMOVE_OPTION,
    ADDPOLL_REQUESTED,
    ADDPOLL_SUCCESS,
    ADDPOLL_ERROR
} from '../Constant/Type';

const initialState = {
    option: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
}

const addPollReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POLL: {
            if (action?.text?.trim()?.length > 0) {
                return {
                    option: [
                        ...state.option,
                        {
                            option: action.text.trim(),
                            key: Math.random().toString(),
                        },
                    ],
                };
            } else {
                alert("List can't be empty");
            }
        }

        case REMOVE_OPTION: {
            const updatedOptionList = state?.option?.filter(item => item.key !== action.key)
            return {
                option: updatedOptionList
            }

        }

        case ADDPOLL_REQUESTED: {
            return {
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        }
        case ADDPOLL_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
            }
        }
        case ADDPOLL_ERROR: {
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

export default addPollReducer;
