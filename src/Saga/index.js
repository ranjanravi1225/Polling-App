import {
    all,
    takeLatest,
} from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
    // SIGNUP_REQUESTED,
    ADDUSER_REQUESTED,
    GETALL_USERS,
} from '../Redux/Constant/Type';
import { loginSaga } from './LoginSaga';
// import { signUpSaga } from './SignUpSaga';
import { addUserSaga } from './AddUserSaga';
import { getUsersSaga } from './GetUsersSaga';



function* watchMan() {
    yield takeLatest(LOGIN_REQUESTED, loginSaga);
    yield takeLatest(ADDUSER_REQUESTED, addUserSaga);
    yield takeLatest(GETALL_USERS, getUsersSaga);
    // yield takeLatest(SIGNUP_REQUESTED, signUpSaga);
}

export default function* rootSaga() {
    yield all([watchMan()]);
};
