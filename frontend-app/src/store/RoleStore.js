import {makeAutoObservable} from "mobx";

export default class RoleStore {
    constructor() {
        this._roleStore = []
        makeAutoObservable(this)
    }

    get getRoleStore() {
        return this._roleStore;
    }

    setRoleStore(roleStore) {
        this._roleStore = roleStore;
    }
}