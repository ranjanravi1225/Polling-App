import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { loginSuccess, loginError } from '../Redux/Action/action';
import AsyncStorage from '@react-native-community/async-storage';


export function* loginSaga(action) {

    let responseToken = '';
    try {
        const response = yield call(async () => {
            await axios.post(`${environment.apiBase}/login?username=${action.user.username}&password=${action.user.password}`)
                .then(async (res) => {
                    await AsyncStorage.setItem("token", res.data.token)
                    responseToken = await AsyncStorage.getItem("token");
                })
        })
        if (responseToken) {
            yield put(loginSuccess(responseToken))
        } else {
            yield put(loginError({ error: "invalid user" }))
        }
    } catch (err) {
        yield put(loginError({ err: "invalid user" }))
    }
}
