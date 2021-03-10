import { combineReducers } from 'redux';
import loginReducer from './LoginReduer';
import addUserReducer from './AddUserReducer';
import getUsersReducer from './GetUsersReducer';
import getPollsReducer from './GetPollsReducer';
import addPollReducer from './AddPollReducer';
import removePollReducer from './RemovePollReducer';
import editPollTitleReducer from './EditPollTitleReducer';
import removePollOptionReducer from './RemovePollOptionReducer';



const rootReducer = combineReducers({
    login: loginReducer,
    addUser: addUserReducer,
    allUsers: getUsersReducer,
    allPolls: getPollsReducer,
    addPoll: addPollReducer,
    removePoll: removePollReducer,
    editPollTitle: editPollTitleReducer,
    removePollOption: removePollOptionReducer
})

export default rootReducer;
