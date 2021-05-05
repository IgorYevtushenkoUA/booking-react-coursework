import axios, {$host} from "../../../axios/axios";

export const REGISTER_ACCOUNT = 'REGISTER_ACCOUNT';
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
            debugger
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
            debugger
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
            // localStorage.setItem("token", data.token);
            let account = data[0];
            localStorage.setItem("role", account.roleRoleId);
            dispatch({
                type: LOGIN,
                payload: account
            });
        } catch (e) {
            alert("Something went wrong : login [User not found]");
        }
    }
}

export const sighOut = () => {
    localStorage.removeItem("token")
    return {type: SIGN_OUT, payload: null};
}

export const loadAllFlats = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/")
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLATS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : loadAllFlats")
        }
    }
}

export const loadFlat = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/" + id);
            const data = await res.data;
            debugger
            console.log(data)
            dispatch({
                type: LOAD_FLAT,
                payload: data
            })

        } catch (e) {
            alert("something went wrong : loadFlat")
        }
    }
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

