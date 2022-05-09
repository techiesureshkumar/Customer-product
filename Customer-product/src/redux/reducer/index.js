import {combineReducers} from "redux";
import createUser from './userReducer';
import createCustomer from './customerReducer';

const rootReducer = combineReducers({
    userReducer : createUser,
    customerReducer : createCustomer
});

export default rootReducer;