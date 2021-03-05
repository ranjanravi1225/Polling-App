import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { receiveAllUsers } from '../Redux/Action/action';


export function* getUsersSaga() {
    try {
        const response = yield call(async () => {
            const result = await axios.get(`${environment.apiBase}/list_users`)
            return result;
        })
        yield put(receiveAllUsers(response.data.data))
    } catch (err) {
        console.error(err);
    }
}
