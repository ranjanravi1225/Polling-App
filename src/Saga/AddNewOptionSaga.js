import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { getAllPolls, successAddNewOption, errorAddNewOption } from '../Redux/Action/action';
import {
    GETALL_POLLS,
} from '../Redux/Constant/Type';


export function* addNewOptionSaga(action) {
    if (action.data.newOption.trim().length > 0) {
        try {
            const response = yield call(async () => {
                const result = await axios.get(`${environment.apiBase}/add_new_option?id=${action.data.id}&option_text=${action.data.newOption.trim()}`)
                return result;
            })
            if (response.data.error) {
                alert(response.data.data)
            }
            else {
                alert("New Option added sucessfully")
                action.data.showOptionModal(false)
                yield put({ type: GETALL_POLLS, getAllPolls });
                yield put(successAddNewOption({ message: 'New Option added successfully' }))
            }
        } catch (err) {
            console.error(err);
        }
    } else {
        alert('Please fill the option text field')
        yield put(errorAddNewOption({ message: 'error' }))
    }
}
