import { takeLatest, call, put } from "redux-saga/effects";
import { GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_LIST_ERROR, SIGN_IN_SUCESS, SIGN_IN_VERIFICATION, SIGN_IN_FAILURE } from "./../actions/userAction";
import { get } from '../../services/api';


export function* fetchGetUserList() {

    try {
        let responseData = yield call(get, 'http://localhost:4000/Users/signIn');

        yield put({
            type: GET_USER_LIST_SUCCESS,
            response: responseData
        })

    } catch (error) {
        yield put({
            type: GET_USER_LIST_ERROR,
            error: error
        })
    }
}

export function* watchGetUserList() {
    yield takeLatest(GET_USER_LIST, callGetUserList);
}
export function* callGetUserList(action) {
    yield call(fetchGetUserList, action.request); //yield call is a function which calls function mentioned
}

export function* fetchSignIn(request) {

    try {
        //let UserObject = yield call(put, 'http://localhost:4000/Users/' + this.props.match.params.id);
        let responseData = yield call(get, 'http://localhost:4000/Users/' + request.userid,);
        if (responseData && responseData[0]) {
            if (responseData[0].password === request.password) {

                yield put({
                    type: SIGN_IN_SUCESS,
                    response: responseData[0]
                })
            }
            else {
               yield put({
                    type: SIGN_IN_FAILURE,
                    message: "Password is invalid"
                })
            }
        } else {
            yield put({
                type: SIGN_IN_FAILURE,
                message: "User does not exist"
            })
        }
    } catch (error) {
        yield put({
            error: error
        })
    }
}

export function* watchGetSignIn() {
    yield takeLatest(SIGN_IN_VERIFICATION, callGetSignInSucess);
}
export function* callGetSignInSucess(action) {
    yield call(fetchSignIn, action.request); //yield call is a function which calls function mentioned
}

