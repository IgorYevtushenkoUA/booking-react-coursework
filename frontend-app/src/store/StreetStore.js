import {makeAutoObservable} from "mobx";

export default class StreetStore {
    constructor() {
        this._streetStore = []
        makeAutoObservable(this)
    }

    get getStreetStore() {
        return this._streetStore;
    }

    setStreetStore(streetStore) {
        this._streetStore = streetStore;
    }
}