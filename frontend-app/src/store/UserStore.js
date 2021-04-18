import {makeAutoObservable} from "mobx";

export default class UserStore {

    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this);
    }

    setUser(user) {
        this._user = user;
    }

    get getUser() {
        return this._user;
    }

    get user() {
        return this._user;
    }

    get getAuth() {
        return this._isAuth;
    }

}