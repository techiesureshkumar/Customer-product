export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const GET_CUSTOMER_LIST ='GET_CUSTOMER_LIST';
export const GET_CUSTOMER_LIST_SUCCESS ='GET_CUSTOMER_LIST_SUCCESS';
export const GET_CUSTOMER_LIST_ERROR = 'GET_CUSTOMER_LIST_ERROR';
export const SIGN_IN_SUCESS ='SIGN_IN_SUCESS';
export const SIGN_OUT_SUCESS = 'SIGN_OUT_SUCESS';
export const SIGN_IN_VERIFICATION = 'SIGN_IN_VERIFICATION';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const createCustomer = (params) => {
    return {type: CREATE_CUSTOMER, payload: params}
}

export const getCustomerList =(params) => {
    return {type: GET_CUSTOMER_LIST, payload: params}
}

export const getCustomerListSuccess = (params) => {
    return {type: GET_CUSTOMER_LIST_SUCCESS, response: params}
}

export const getCustomerListError = (params) => {
    return {type: GET_CUSTOMER_LIST_ERROR, error: params}
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