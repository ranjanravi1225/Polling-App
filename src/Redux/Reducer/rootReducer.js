import { combineReducers } from 'redux';
import loginReducer from './LoginReduer';
import addUserReducer from './AddUserReducer';
import getUsersReducer from './GetUsersReducer';
import getPollsReducer from './GetPollsReducer';
import addPollReducer from './AddPollReducer';
import removePollReducer from './RemovePollReducer';


// import signUpReducer from './SignUpReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    addUser: addUserReducer,
    allUsers: getUsersReducer,
    allPolls: getPollsReducer,
    addPoll: addPollReducer,
    removePoll: removePollReducer,
    // signup: signUpReducer
})

export default rootReducer;
