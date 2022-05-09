import { CREATE_CUSTOMER, GET_CUSTOMER_LIST_SUCCESS, GET_CUSTOMER_LIST_ERROR, SIGN_IN_SUCESS, SIGN_OUT_SUCESS, SIGN_IN_FAILURE } from "../actions/customerAction";

const initialState = {
    id: '',
    c_name: '',
    c_email: '',
    customerid: '',
    c_password: '',
    customerList: [],
    isSignedIn: false,
    signedInUser: {},
    message: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOMER:
            return {
                id: action.payload._id,
                c_name: action.payload.c_name,
                c_email: action.payload.c_email,
                customerid: action.payload.customerid,
                c_password: action.payload.c_password
            }
        {/*case GET_CUSTOMER_LIST:
            return {
                ...state,
                isSignedIn: true,
                signedInUser: action.response,
                message: 'Successfully signed in'
            }*/}
        case GET_CUSTOMER_LIST_SUCCESS:
            return {
                ...state,
                customerList: action.response
            }
        case GET_CUSTOMER_LIST_ERROR:
            return {
                ...state,
                customerList: action.error
            }
        case SIGN_IN_SUCESS:
            return {
                ...state,
                isSignedIn: true,
                signedInUser: action.response,
                message: 'Successfully signed in'
            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                isSignedIn: false,
                signedInUser: {},
                message: action.message
            }
        case SIGN_OUT_SUCESS:
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return state;
    }
}