import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { getAllPolls, PollOptionRemoved } from '../Redux/Action/action';
import {
    GETALL_POLLS,
} from '../Redux/Constant/Type';


export function* removePollOptionSaga(action) {
    try {
        const response = yield call(async () => {
            const result = await axios.get(`${environment.apiBase}/delete_poll_option?id=${action.id}&option_text=${action.option}`)
            return result;
        })
        if (response.data.error) {
            alert(response.data.data)
        }
        else {
            alert("Poll Option removed sucessfully")
            yield put({ type: GETALL_POLLS, getAllPolls });
            yield put(PollOptionRemoved({ message: 'Poll option removed successfully' }))
        }
    } catch (err) {
        console.error(err);
    }
}
