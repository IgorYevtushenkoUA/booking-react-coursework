import {makeAutoObservable} from "mobx";

export default class MetroStationStore {
    constructor() {
        this._metroStationStore = []
        makeAutoObservable(this)
    }

    get getMetroStationStore() {
        return this._metroStationStore;
    }

    setMetroStationStore(metroStationStore) {
        this._metroStationStore = metroStationStore;
    }
}