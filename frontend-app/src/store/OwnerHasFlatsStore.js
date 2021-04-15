import {makeAutoObservable} from "mobx";

export default class OwnerHasFlatsStore {
    constructor() {
        this._ownerHasFlatsStore = []
        makeAutoObservable(this)
    }

    get getOwnerHasFlatsStore() {
        return this._ownerHasFlatsStore;
    }

    setOwnerHasFlatsStore(ownerHasFlatsStore) {
        this._ownerHasFlatsStore = ownerHasFlatsStore;
    }
}