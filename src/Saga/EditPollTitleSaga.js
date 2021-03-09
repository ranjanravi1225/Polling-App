import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { getAllPolls, successEditTitle } from '../Redux/Action/action';
import {
    GETALL_POLLS,
} from '../Redux/Constant/Type';


export function* editPollTitleSaga(action) {
    try {
        const response = yield call(async () => {
            const result = await axios.get(`${environment.apiBase}/update_poll_title?id=${action.data.id}&title=${action.data.newTitle}`)
            return result;
        })
        if (response.data.error) {
            alert(response.data.data)
        }
        else {
            alert("Title Updated sucessfully")
            action.data.showModal(false)
            yield put({ type: GETALL_POLLS, getAllPolls });
            yield put(successEditTitle({ message: 'Title Updated successfully' }))
        }
    } catch (err) {
        console.error(err);
    }
}
