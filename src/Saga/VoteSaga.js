import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { getAllPolls, successVote } from '../Redux/Action/action';
import {
    GETALL_POLLS,
} from '../Redux/Constant/Type';
import AsyncStorage from '@react-native-community/async-storage';



export function* voteSaga(action) {
    try {
        const response = yield call(async () => {
            const access_token = await AsyncStorage.getItem('token');
            const headers = {
                "access_token": access_token
            }
            const result = await axios.get(`${environment.apiBase}/do_vote?id=${action.pollId}&option_text=${action.optionText}`, { headers })
            return result;
        })
        if (response.data.error) {
            alert("Please select a valid option")
        }
        else {
            alert("Voted successfully")
            yield put({ type: GETALL_POLLS, getAllPolls });
            yield put(successVote({ message: 'Voted successfully' }))
        }
    } catch (err) {
        console.error(err);
    }
}
