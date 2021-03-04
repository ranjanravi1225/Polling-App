import { combineReducers } from 'redux';
import loginReducer from './LoginReduer';
import addUserReducer from './AddUserReducer';
// import signUpReducer from './SignUpReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    addUser: addUserReducer,
    // signup: signUpReducer
})

export default rootReducer;
