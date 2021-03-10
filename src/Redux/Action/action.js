import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_REQUESTED,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    ADDUSER_REQUESTED,
    ADDUSER_SUCCESS,
    ADDUSER_ERROR,
    GETALL_USERS,
    RECEIVEALL_USERS,
    GETALL_POLLS,
    RECEIVEDALL_POLLS,
    ADD_POLL,
    REMOVE_OPTION,
    ADDPOLL_REQUESTED,
    ADDPOLL_SUCCESS,
    ADDPOLL_ERROR,
    REMOVE_POLL,
    REQUESTREMOVE_POLL,
    REQUESTEDIT_TITLE,
    SUCCESSEDIT_TITLE,
    REQUESTREMOVE_POLLOPTION,
    REMOVE_POLLOPTION,
    REQUESTADD_NEWOPTION,
    SUCESSADD_NEWOPTION,
    ERRORADD_NEWOPTION,
    REQUEST_VOTE,
    SUCESS_VOTE,
} from '../Constant/Type';


export const loginRequested = (user) => {
    return {
        type: LOGIN_REQUESTED,
        user
    }
}

export const loginSuccess = (username) => {
    return {
        type: LOGIN_SUCCESS,
        username
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,

    }
}


export const signUpRequested = (user) => {
    return {
        type: SIGNUP_REQUESTED,
        user
    }
}

export const signUpSuccess = () => {
    return {
        type: SIGNUP_SUCCESS,
    }
}

export const signUpError = () => {
    return {
        type: SIGNUP_ERROR,
    }
}


export const addUserRequested = (user) => {
    return {
        type: ADDUSER_REQUESTED,
        user
    }
}

export const addUserSuccess = () => {
    return {
        type: ADDUSER_SUCCESS,
    }
}

export const addUserError = () => {
    return {
        type: ADDUSER_ERROR,
    }
}



export const getAllUsers = () => {
    return {
        type: GETALL_USERS,
    }
}

export const receiveAllUsers = (user) => {
    return {
        type: RECEIVEALL_USERS,
        user
    }
}



export const getAllPolls = () => {
    return {
        type: GETALL_POLLS
    }
}

export const receivedAllPolls = (polls) => {
    return {
        type: RECEIVEDALL_POLLS,
        polls
    }
}


export const addOption = (text) => {
    return {
        type: ADD_POLL,
        text
    }
}

export const removeOption = (key) => {
    return {
        type: REMOVE_OPTION,
        key
    }
}

export const addPollRequested = (poll) => {
    requestRemovePoll
    return {
        type: ADDPOLL_REQUESTED,
        poll
    }
}

export const addPollSuccess = () => {
    return {
        type: ADDPOLL_SUCCESS,
    }
}

export const addPollError = () => {
    return {
        type: ADDPOLL_ERROR,
    }
}



export const removePoll = () => {
    return {
        type: REMOVE_POLL,

    }
}

export const requestRemovePoll = (id) => {
    return {
        type: REQUESTREMOVE_POLL,
        id
    }
}


export const requestEditTitle = (data) => {
    return {
        type: REQUESTEDIT_TITLE,
        data
    }
}

export const successEditTitle = () => {
    return {
        type: SUCCESSEDIT_TITLE,
    }
}


export const requestRemovePollOption = (option, id) => {
    return {
        type: REQUESTREMOVE_POLLOPTION,
        option,
        id
    }
}

export const PollOptionRemoved = () => {
    return {
        type: REMOVE_POLLOPTION,
    }
}


export const requestAddNewOption = (data) => {
    return {
        type: REQUESTADD_NEWOPTION,
        data
    }
}

export const successAddNewOption = () => {
    return {
        type: SUCESSADD_NEWOPTION,
    }
}

export const errorAddNewOption = () => {
    return {
        type: ERRORADD_NEWOPTION,
    }
}



export const requestToVote = (optionText, pollId) => {
    return {
        type: REQUEST_VOTE,
        optionText,
        pollId
    }
}

export const successVote = () => {
    return {
        type: SUCESS_VOTE,
    }
}
