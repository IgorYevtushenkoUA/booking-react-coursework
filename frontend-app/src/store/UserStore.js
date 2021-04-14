import {makeAutoObservable} from "mobx";

export default class UserStore {

    constructor() {
        console.log("constructor")
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this);
    }

    setIsAuth(user) {
        this._isAuth = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

}