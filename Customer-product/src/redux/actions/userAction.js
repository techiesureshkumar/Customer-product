export const CREATE_USER = 'CREATE_USER';
export const GET_USER_LIST ='GET_USER_LIST';
export const GET_USER_LIST_SUCCESS ='GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_ERROR = 'GET_USER_LIST_ERROR';
export const SIGN_IN_SUCESS ='SIGN_IN_SUCESS';
export const SIGN_OUT_SUCESS = 'SIGN_OUT_SUCESS';
export const SIGN_IN_VERIFICATION = 'SIGN_IN_VERIFICATION';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const createUser = (params) => {
    return {type: CREATE_USER, payload: params}
}

export const getUserList =(params) => {
    return {type: GET_USER_LIST, payload: params}
}

export const getUserListSuccess = (params) => {
    return {type: GET_USER_LIST_SUCCESS, response: params}
}

export const getUserListError = (params) => {
    return {type: GET_USER_LIST_ERROR, error: params}
}
export const signInVerification =(params) => {
    return{type: SIGN_IN_VERIFICATION, request: params}
}

export const signInSuccessAction =(params) => {
    return {type: SIGN_IN_SUCESS, response: params}   
}

export const signInFailure = (params) => {
    return {type: SIGN_IN_FAILURE, response: params}
}

export const signOutSuccessAction =() => {
    return {type: SIGN_OUT_SUCESS}
}