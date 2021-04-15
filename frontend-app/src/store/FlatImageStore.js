import {makeAutoObservable} from "mobx";

export default class HouseHasAdvantagesStore {
    constructor() {
        this._houseHasAdvantagesStore = []
        makeAutoObservable(this)
    }

    get getHouseHasAdvantagesStore() {
        return this._houseHasAdvantagesStore;
    }

    setHouseHasAdvantagesStore(houseHasAdvantagesStore) {
        this._houseHasAdvantagesStore = houseHasAdvantagesStore;
    }
}