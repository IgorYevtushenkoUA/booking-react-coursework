import {makeAutoObservable} from "mobx";

export default class HouseTypesStore {
    constructor() {
        this._houseTypesStore = []
        makeAutoObservable(this)
    }

    get getHouseTypesStore() {
        return this._houseTypesStore;
    }

    setHouseTypesStore(houseTypesStore) {
        this._houseTypesStore = houseTypesStore;
    }
}