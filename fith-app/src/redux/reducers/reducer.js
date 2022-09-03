import * as types from '../actionTypes';

const initialState = {
    loading: false,
    error: null,
    currentUser: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_START:
        case types.LOGOUT_START:
        case types.REGISTER_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: null
            }
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
        case types.REGISTER_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            }

        default:
            return state
    }
}