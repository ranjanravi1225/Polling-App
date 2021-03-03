// import axios from "axios";
// import { call, put } from "redux-saga/effects";
// import { environment } from '../../environment';
// import { signUpSuccess, signUpError } from '../Redux/Action/action';
// import AsyncStorage from '@react-native-community/async-storage';

// // import AsyncStorage from "@react-native-async-storage/async-storage";


// export function* signUpSaga(action) {
//     // let responseToken = '';
//     try {
//         const response = yield call(async () => {
//             await axios.get(`${environment.apiBase}/add_user?username=admin&password=admin&role=admin`, action.user)
//                 .then(async (res) => {
//                     console.log(res, 'kkkkkkkkkkkkkkkkkkk');
//                     // await AsyncStorage.setItem("token", res.headers.token)
//                     // responseToken = await AsyncStorage.getItem("token");
//                 })
//         })
//         // console.log(responseToken, 'ppppppppp');
//         // if (responseToken) {
//         //     yield put(signUpSuccess(responseToken))
//         // } else {
//         //     yield put(signUpError({ error: "invalid user" }))
//         // }
//     } catch (err) {
//         yield put(signUpError({ err: "invalid user" }))
//     }
// }
