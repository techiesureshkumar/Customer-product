import { CREATE_USER, GET_USER_LIST_SUCCESS, GET_USER_LIST_ERROR, SIGN_IN_SUCESS, SIGN_OUT_SUCESS, SIGN_IN_FAILURE } from "../actions/userAction";

const initialState = {
    id: '',
    name: '',
    email: '',
    userid: '',
    password: '',
    userList: [],
    isSignedIn: false,
    signedInUser: {},
    message: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                id: action.payload._id,
                name: action.payload.name,
                email: action.payload.email,
                userid: action.payload.userid,
                password: action.payload.password
            }
        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: action.response
            }
        case GET_USER_LIST_ERROR:
            return {
                ...state,
                userList: action.error
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