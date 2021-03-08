import {
    all,
    takeLatest,
} from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
    // SIGNUP_REQUESTED,
    ADDUSER_REQUESTED,
    GETALL_USERS,
    GETALL_POLLS,
    ADDPOLL_REQUESTED
} from '../Redux/Constant/Type';
import { loginSaga } from './LoginSaga';
// import { signUpSaga } from './SignUpSaga';
import { addUserSaga } from './AddUserSaga';
import { getUsersSaga } from './GetUsersSaga';
import { getPollsSaga } from './GetPollsSaga';
import { addPollSaga } from './AddPollSaga';





function* watchMan() {
    yield takeLatest(LOGIN_REQUESTED, loginSaga);
    yield takeLatest(ADDUSER_REQUESTED, addUserSaga);
    yield takeLatest(GETALL_USERS, getUsersSaga);
    yield takeLatest(GETALL_POLLS, getPollsSaga);
    yield takeLatest(ADDPOLL_REQUESTED, addPollSaga);
    // yield takeLatest(SIGNUP_REQUESTED, signUpSaga);
}

export default function* rootSaga() {
    yield all([watchMan()]);
};
