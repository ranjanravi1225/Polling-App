import {
    all,
    takeLatest,
} from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
    // SIGNUP_REQUESTED
} from '../Redux/Constant/Type';
import { loginSaga } from './LoginSaga';
// import { signUpSaga } from './SignUpSaga';



function* watchMan() {
    yield takeLatest(LOGIN_REQUESTED, loginSaga);
    // yield takeLatest(SIGNUP_REQUESTED, signUpSaga);
}

export default function* rootSaga() {
    yield all([watchMan()]);
};
