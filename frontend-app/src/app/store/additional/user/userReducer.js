import {
    LOGIN,
    SIGN_OUT,
    LOAD_ALL_FLATS,
    LOAD_FLAT,
    ADD_FLAT,
    UPDATE_FLAT,
    DELETE_FLAT,
    UPDATE_CLIENT,
    DELETE_CLIENT,
    ADD_OWNER,
    UPDATE_OWNER,
    DELETE_OWNER,
    LIKE_FLAT,
    WATCH_FLAT,
    DELETE_LIKED_FLAT, REGISTER_ACCOUNT
} from "./userActions"

const initState = {
    userCredentials: null,

}
export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_OUT:
            return {...state, userCredentials: action.payload};
        case LOGIN:
            return {...state, userCredentials: action.payload}
        case REGISTER_ACCOUNT:
            console.log("we are in useReducer : register")
            return {...state, userCredentials: action.payload}
        default:
            return state;
    }
}
