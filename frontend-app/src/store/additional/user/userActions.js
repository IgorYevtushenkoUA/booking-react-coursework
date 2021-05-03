import axios, {$host} from "../../../axios/axios";

export const REGISTER_CLIENT = 'REGISTER_CLIENT';
export const REGISTER_OWNER = 'REGISTER_OWNER';
export const LOGIN = 'LOGIN';
export const SIGN_OUT = 'SIGN_OUT';
export const LOAD_ALL_FLATS = 'LOAD_ALL_FLATS';
export const LOAD_FLAT = 'LOAD_FLAT';
export const ADD_FLAT = 'ADD_FLAT';
export const UPDATE_FLAT = 'UPDATE_FLAT';
export const DELETE_FLAT = 'DELETE_FLAT';
export const UPDATE_CLIENT = 'UPDATE_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const ADD_OWNER = 'ADD_OWNER';
export const UPDATE_OWNER = 'UPDATE_OWNER';
export const DELETE_OWNER = 'DELETE_OWNER';
export const LIKE_FLAT = 'LIKE_FLAT';
export const WATCH_FLAT = 'WATCH_FLAT';
export const DELETE_LIKED_FLAT = 'DELETE_LIKED_FLAT';
// todo подумати стосовно ddFlatToOwner | addSponsorFlat | and others


export const clientRegister = (client) => {
    return async dispatch => {
        try {
            const res = await $host.post("api/user/create", client);
            const data = await res.data.token;
            dispatch({
                type: REGISTER_CLIENT,
                payload: client // todo check, в паші інакше
            })
        } catch (e) {
            alert("Something went wrong : clientRegister")
        }
    }
}

export const ownerRegister = (owner) => {
    return async dispatch => {
        try {
            const res = await $host.post("api/owner/create", client);
            const data = await res.data.token;
            dispatch({
                type: REGISTER_CLIENT,
                payload: owner // todo check, в паші інакше
            })
        } catch (e) {
            alert("Something went wrong : ownerRegister")
        }
    }
}

export const login = (user) => {
    return async dispatch => {
        try {
            const res = await $host.post("/api/user/login", user);
            const data = await res.data;
            localStorage.setItem("token", data.token);
            dispatch({
                type: LOGIN,
                payload: user
            });
        } catch (e) {
            alert("User not found");
        }
    }
}

export const sighOut = () => {
    localStorage.removeItem("token")
    return {type: SIGN_OUT, payload: null};
}

export const loadAllFlats = () => {
return async dispatch => {
    try{
        const res = await $host.get("api/flats/")
        const data = await res.data;
        dispatch({
            type: LOAD_ALL_FLATS,
            payload: data
        })
    }catch(e){
        alert("Something went wrong : loadAllFlats")
    }
}
}

export const loadFlat = () => {
}

export const addFlat = () => {
}

export const updateFlat = () => {
}

export const deleteFlat = () => {
}

export const updateClient = () => {
}

export const deleteClient = () => {
}

export const updateOwner = () => {
}
export const deleteOwner = () => {
}
export const likeFlat = () => {
}
export const watchFlat = () => {
}
export const deleteLikedFlat = () => {
}
export const deleteOwner = () => {
}

