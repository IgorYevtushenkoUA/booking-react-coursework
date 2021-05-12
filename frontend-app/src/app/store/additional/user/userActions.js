import {$host} from "../../../axios/axios";
import {LOAD_FLAT_HAS_COMFORT} from "../flat/flatActions";

export const REGISTER_ACCOUNT = 'REGISTER_ACCOUNT';
export const REGISTER_OWNER = 'REGISTER_OWNER';
export const LOGIN = 'LOGIN';
export const SIGN_OUT = 'SIGN_OUT';
export const LOAD_ALL_FLATS = 'LOAD_ALL_FLATS';
export const LOAD_FLAT = 'LOAD_FLAT';
export const LOAD_OWNER_HAS_FLATS = 'LOAD_OWNER_HAS_FLATS'
export const ADD_OWNER_HAS_FLATS = 'ADD_OWNER_HAS_FLATS'
export const LOAD_CLIENT_WATCHED_FLAT = 'LOAD_CLIENT_WATCHED_FLAT';
export const ADD_CLIENT_WATCHED_FLAT = 'ADD_CLIENT_WATCHED_FLAT';
export const LOAD_CLIENT_LIKED_FLAT = 'LOAD_CLIENT_LIKED_FLAT';
export const ADD_CLIENT_LIKED_FLAT = 'ADD_CLIENT_LIKED_FLAT';

export const register = (account) => {
    return async dispatch => {
        try {
            let first_name = account.first_name;
            let second_name = account.second_name;
            let birth = account.birth;
            let gender = account.gender;
            let email = account.email;
            let password = account.password;
            let phone_num1 = account.phone_num1;
            let phone_num2 = account.phone_num2;
            let phone_num3 = account.phone_num3;
            let last_name = account.last_name;
            let roleRoleId = account.roleRoleId;
            const res = await $host.post("api/user/register", {
                first_name,
                second_name,
                birth,
                gender,
                email,
                password,
                phone_num1,
                phone_num2,
                phone_num3,
                last_name,
                roleRoleId
            });
            localStorage.setItem("accountId", account.id);

            dispatch({
                type: REGISTER_ACCOUNT,
                payload: account // todo check, в паші інакше, у нього ще токен
            })
        } catch (e) {
            alert("Something went wrong : register")
        }
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const res = await $host.post("/api/user/login", {email, password});
            const data = await res.data;
            let account = data[0];
            localStorage.setItem("role", account.roleId);
            localStorage.setItem("accountId", account.id);
            debugger
            dispatch({
                type: LOGIN,
                payload: account
            });
        } catch (e) {
            alert("Something went wrong : login [User not found]");
        }
    }
}

export const userAddData = (url, accountId, flatId, type) => {
    return async dispatch => {
        try {
            debugger
            const res = await $host.post(url, {accountId, flatId});
            const data = await res.data;
            debugger
            dispatch({
                type: type,
                payload: data
            });
        } catch (e) {
            alert("Something went wrong :" + type);
        }
    }
}


export const sighOut = () => {
    localStorage.removeItem("token")
    return {type: SIGN_OUT, payload: null};
}

export const loadOwnerHasFlat = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/user/owner_has_flat/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_OWNER_HAS_FLATS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : LOAD_OWNER_HAS_FLATS")
        }
    }
}

export const loadClientLikedFlat = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/user/client_liked_flat/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_CLIENT_LIKED_FLAT,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : LOAD_CLIENT_LIKED_FLAT")
        }
    }
}

export const loadClientWatchedFlat = (url, type) => {
    return async dispatch => {
        try {
            const res = await $host.get(url);
            const data = await res.data;
            dispatch({
                type: type,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : LOAD_CLIENT_WATCHED_FLAT")
        }
    }
}


