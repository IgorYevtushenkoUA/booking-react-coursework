import {
    LOGIN,
    SIGN_OUT,
    REGISTER_ACCOUNT,
    LOAD_OWNER_HAS_FLATS,
    LOAD_CLIENT_LIKED_FLAT,
    LOAD_CLIENT_WATCHED_FLAT,
    ADD_OWNER_HAS_FLATS,
    ADD_CLIENT_LIKED_FLAT, ADD_CLIENT_WATCHED_FLAT
} from "./userActions"

const initState = {
    userCredentials: null,
    ownerHasFlat: [],
    clientWatchedFlat: [],
    clientLikedFlat: [],
    randomFlatId: null,
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_OUT:
            return {...state, userCredentials: action.payload};
        case LOGIN:
            return {...state, userCredentials: action.payload}
        case REGISTER_ACCOUNT:
            return {...state, userCredentials: action.payload}
        case LOAD_OWNER_HAS_FLATS:
            return {...state, ownerHasFlat: action.payload}
        case LOAD_CLIENT_LIKED_FLAT:
            return {...state, clientLikedFlat: action.payload}
        case LOAD_CLIENT_WATCHED_FLAT:
            return {...state, clientWatchedFlat: action.payload}

        case ADD_OWNER_HAS_FLATS:
            return {...state, ownerHasFlat: []}
        case ADD_CLIENT_LIKED_FLAT:
            return {...state, clientLikedFlat: []}
        case ADD_CLIENT_WATCHED_FLAT:

            console.log("userReducer ADD_CLIENT_WATCHED_FLAT")
            return {...state, clientWatchedFlat: [action.payload.accountId]}//
        default:
            return state;
    }
}
