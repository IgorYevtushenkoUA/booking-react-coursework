import {makeAutoObservable} from "mobx";

export default class RegionStore {
    constructor() {
        this._regionStore = []
        makeAutoObservable(this)
    }

    get getRegionStore() {
        return this._regionStore;
    }

    setRegionStore(regionStore) {
        this._regionStore = regionStore;
    }
}