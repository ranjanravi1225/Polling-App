import { combineReducers } from 'redux';
import loginReducer from './LoginReduer';
import addUserReducer from './AddUserReducer';
import getUsersReducer from './GetUsersReducer';
// import signUpReducer from './SignUpReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    addUser: addUserReducer,
    allUsers: getUsersReducer,
    // signup: signUpReducer
})

export default rootReducer;
