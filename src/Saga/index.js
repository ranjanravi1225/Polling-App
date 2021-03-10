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
    REQUESTEDIT_TITLE,
    REQUESTREMOVE_POLLOPTION,
    REQUESTADD_NEWOPTION,
    REQUEST_VOTE,
} from '../Redux/Constant/Type';
import { loginSaga } from './LoginSaga';
import { addUserSaga } from './AddUserSaga';
import { getUsersSaga } from './GetUsersSaga';
import { getPollsSaga } from './GetPollsSaga';
import { addPollSaga } from './AddPollSaga';
import { removePollSaga } from './RemovePollSaga';
import { editPollTitleSaga } from './EditPollTitleSaga';
import { removePollOptionSaga } from './RemovePollOptionSaga';
import { addNewOptionSaga } from './AddNewOptionSaga';
import { voteSaga } from './VoteSaga';




function* watchMan() {
    yield takeLatest(LOGIN_REQUESTED, loginSaga);
    yield takeLatest(ADDUSER_REQUESTED, addUserSaga);
    yield takeLatest(GETALL_USERS, getUsersSaga);
    yield takeLatest(GETALL_POLLS, getPollsSaga);
    yield takeLatest(ADDPOLL_REQUESTED, addPollSaga);
    yield takeLatest(REQUESTREMOVE_POLL, removePollSaga);
    yield takeLatest(REQUESTEDIT_TITLE, editPollTitleSaga);
    yield takeLatest(REQUESTREMOVE_POLLOPTION, removePollOptionSaga);
    yield takeLatest(REQUESTADD_NEWOPTION, addNewOptionSaga);
    yield takeLatest(REQUEST_VOTE, voteSaga);

}

export default function* rootSaga() {
    yield all([watchMan()]);
};
