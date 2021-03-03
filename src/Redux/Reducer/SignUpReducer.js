// import {
//     SIGNUP_REQUESTED,
//     SIGNUP_SUCCESS,
//     SIGNUP_ERROR,
// } from '../Constant/Type';

// const initialState = {
//     isLoading: false,
//     isError: false,
//     isSuccess: false
// }

// const signUpReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SIGNUP_REQUESTED: {
//             return {
//                 isLoading: true,
//                 isError: false,
//                 isSuccess: false
//             }
//         }
//         case SIGNUP_SUCCESS: {
//             return {
//                 isLoading: false,
//                 isError: false,
//                 isSuccess: true
//             }
//         }
//         case SIGNUP_ERROR: {
//             return {
//                 isLoading: false,
//                 isError: true,
//                 isSuccess: false
//             }
//         }
//         default:
//             return state;
//     }
// }

// export default signUpReducer;
