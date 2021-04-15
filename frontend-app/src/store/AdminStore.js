import {makeAutoObservable} from "mobx";

export default class AdminStore {
    constructor() {
        this._admin = []
        makeAutoObservable(this)
    }

    get getAdmin() {
        return this._admin;
    }

    setAdmin(admin) {
        this._admin = admin;
    }
}