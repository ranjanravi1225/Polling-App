import { combineReducers } from 'redux';
import loginReducer from './LoginReduer';
// import signUpReducer from './SignUpReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    // signup: signUpReducer
})

export default rootReducer;
