import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { addUserSuccess, addUserError } from '../Redux/Action/action';


export function* addUserSaga(action) {
    let responseToken = '';
    if (action.user.username.length > 0 && action.user.password.length > 0 && action.user.role.length > 1) {
        try {
            const response = yield call(async () => {
                await axios.get(`${environment.apiBase}/add_user?username=${action.user.username}&password=${action.user.password}&role=${action.user.role}`)
                    .then(async (res) => {
                        if (res.data.error) {
                            alert(res.data.message)
                        }
                        else {
                            responseToken = res.data.error;
                            action.user.setUserName('')
                            action.user.setPassword('')
                            action.user.setSelectedValue('')
                            alert("User added sucessfully")
                        }
                    })
            })
            if (!responseToken) {
                yield put(addUserSuccess({ message: 'user added successfully' }))

            } else {
                yield put(addUserError({ error: "invalid user" }))
            }
        } catch (err) {
            yield put(addUserError({ err: "invalid user" }))
        }
    } else {
        yield put(addUserError({ error: "invalid user" }))
        alert("Please fill all the field")
    }
}
