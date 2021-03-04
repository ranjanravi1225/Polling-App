import {
    all,
    takeLatest,
} from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
    // SIGNUP_REQUESTED,
    ADDUSER_REQUESTED,
} from '../Redux/Constant/Type';
import { loginSaga } from './LoginSaga';
// import { signUpSaga } from './SignUpSaga';
import { addUserSaga } from './AddUserSaga';



function* watchMan() {
    yield takeLatest(LOGIN_REQUESTED, loginSaga);
    yield takeLatest(ADDUSER_REQUESTED, addUserSaga);
    // yield takeLatest(SIGNUP_REQUESTED, signUpSaga);
}

export default function* rootSaga() {
    yield all([watchMan()]);
};
