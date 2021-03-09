import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { getAllPolls, removePoll } from '../Redux/Action/action';
import {
    GETALL_POLLS,
} from '../Redux/Constant/Type';


export function* removePollSaga(action) {
    try {
        const response = yield call(async () => {
            const result = await axios.get(`${environment.apiBase}/delete_poll?id=${action.id}`)
            return result;
        })
        if (response.data.error) {
            alert(response.data.data)
        }
        else {
            alert("Poll removed sucessfully")
            yield put({ type: GETALL_POLLS, getAllPolls });
            yield put(removePoll({ message: 'Poll removed successfully' }))
        }
    } catch (err) {
        console.error(err);
    }
}
