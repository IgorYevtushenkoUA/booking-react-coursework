import {makeAutoObservable} from "mobx";

export default class HouseNearMetroStationStore {
    constructor() {
        this._houseNearMetroStationStore = []
        makeAutoObservable(this)
    }

    get getHouseNearMetroStation() {
        return this._houseNearMetroStationStore;
    }

    setHouseNearMetroStation(houseNearMetroStationStore) {
        this._houseNearMetroStationStore = houseNearMetroStationStore;
    }
}