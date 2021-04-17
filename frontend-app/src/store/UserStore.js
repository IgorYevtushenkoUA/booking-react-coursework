import {makeAutoObservable} from "mobx";

export default class UserStore {

    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this);
    }

    setIsAuth(user) {
        this._isAuth = user;
    }

    setUser(user) {
        this._user = user;
    }

    get getUser() {
        return this._user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

}