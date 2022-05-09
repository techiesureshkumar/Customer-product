import { takeLatest, call, put } from "redux-saga/effects";
import { GET_CUSTOMER_LIST, GET_CUSTOMER_LIST_SUCCESS, GET_CUSTOMER_LIST_ERROR } from "../actions/customerAction";
import { get } from '../../services/api';


export function* fetchGetCustomerList() {

    try {
        let responseData = yield call(get, 'http://localhost:4000/Customers/customer-list');

        yield put({
            type: GET_CUSTOMER_LIST_SUCCESS,
            response: responseData
        })

    } catch (error) {
        yield put({
            type: GET_CUSTOMER_LIST_ERROR,
            error: error
        })
    }
}

export function* watchGetCustomerList() {
    yield takeLatest(GET_CUSTOMER_LIST, callGetCustomerList);
}
export function* callGetCustomerList(action) {
    yield call(fetchGetCustomerList, action.request); //yield call is a function which calls function mentioned
}
