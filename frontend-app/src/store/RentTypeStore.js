import {makeAutoObservable} from "mobx";

export default class RentTypeStore {
    constructor() {
        this._rentTypeStore = []
        makeAutoObservable(this)
    }

    get getRentTypeStore() {
        return this._rentTypeStore;
    }

    setRentTypeStore(rentTypeStore) {
        this._rentTypeStore = rentTypeStore;
    }
}