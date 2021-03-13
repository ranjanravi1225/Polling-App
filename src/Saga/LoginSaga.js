import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { loginSuccess, loginError } from '../Redux/Action/action';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from "jwt-decode";
import { LOGIN_SUCCESS } from "../Redux/Constant/Type";


export function* loginSaga(action) {
    let responseToken = '';
    let decoded = ''
    if (action.user.username.length > 0 && action.user.password.length > 0) {
        try {
            const response = yield call(async () => {
                await axios.get(`${environment.apiBase}/login?username=${action.user.username}&password=${action.user.password}`)
                    .then(async (res) => {
                        if (res.data.error) {
                            alert(res.data.data)
                        } else {
                            action.user.navigation.navigate('Home');
                            decoded = jwt_decode(res.data.token);
                            await AsyncStorage.setItem("username", decoded.username)
                            await AsyncStorage.setItem("role", decoded.role)
                            await AsyncStorage.setItem("token", res.data.token)
                        }
                        responseToken = await AsyncStorage.getItem("token");

                    })
            })
            if (responseToken) {
                console.log(responseToken, 'hhhhhhhh');
                yield put(loginSuccess(responseToken))

            } else {
                yield put(loginError({ error: "invalid user" }))
            }
        } catch (err) {
            yield put(loginError({ err: "invalid user" }))
        }
    } else {
        yield put(loginError({ error: "invalid user" }))
        alert("Please fill all the field")
    }
}
