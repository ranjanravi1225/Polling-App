import { call, put } from "@redux-saga/core/effects";
import axios from "axios";
import { environment } from '../../environment';
import { receivedAllPolls } from '../Redux/Action/action';



export function* getPollsSaga() {
    try {
        const response = yield call(async () => {
            const result = await axios.get(`${environment.apiBase}/list_polls`)
            return result;
        })
        yield put(receivedAllPolls(response.data.data))

    } catch (err) {
        console.error(err);
    }
}
