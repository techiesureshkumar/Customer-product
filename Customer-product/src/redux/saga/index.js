import { fork, all} from "redux-saga/effects";
import * as userSaga from "./userSaga";
import * as customerSaga from "./customerSaga";

function* RootSaga() {
    yield all ([
        fork(userSaga.watchGetUserList),
    ]);
    yield all ([
        fork(customerSaga.watchGetCustomerList),
    ]);
    yield all([
        fork(userSaga.watchGetSignIn),
    ]);
    
}

export default RootSaga;

