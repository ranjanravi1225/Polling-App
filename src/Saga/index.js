import {
    all,
    takeLatest,
} from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
    ADDUSER_REQUESTED,
    GETALL_USERS,
    GETALL_POLLS,
    ADDPOLL_REQUESTED,
    REQUESTREMOVE_POLL,
    REQUESTEDIT_TITLE
} from '../Redux/Constant/Type';
import { loginSaga } from './LoginSaga';
import { addUserSaga } from './AddUserSaga';
import { getUsersSaga } from './GetUsersSaga';
import { getPollsSaga } from './GetPollsSaga';
import { addPollSaga } from './AddPollSaga';
import { removePollSaga } from './RemovePollSaga';
import { editPollTitleSaga } from './EditPollTitleSaga';



function* watchMan() {
    yield takeLatest(LOGIN_REQUESTED, loginSaga);
    yield takeLatest(ADDUSER_REQUESTED, addUserSaga);
    yield takeLatest(GETALL_USERS, getUsersSaga);
    yield takeLatest(GETALL_POLLS, getPollsSaga);
    yield takeLatest(ADDPOLL_REQUESTED, addPollSaga);
    yield takeLatest(REQUESTREMOVE_POLL, removePollSaga);
    yield takeLatest(REQUESTEDIT_TITLE, editPollTitleSaga);

}

export default function* rootSaga() {
    yield all([watchMan()]);
};
