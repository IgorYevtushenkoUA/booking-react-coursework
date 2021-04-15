import {makeAutoObservable} from "mobx";

export default class OwnerStore {
    constructor() {
        this._ownerStore = []
        makeAutoObservable(this)
    }

    get getOwnerStore() {
        return this._ownerStore;
    }

    setOwnerStore(ownerStore) {
        this._ownerStore = ownerStore;
    }
}