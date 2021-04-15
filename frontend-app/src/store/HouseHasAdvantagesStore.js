import {makeAutoObservable} from "mobx";

export default class HouseHasAdvantagesStore {
    constructor() {
        this._houseHasAdvantagesStore = []
        makeAutoObservable(this)
    }

    get getClientHasBadHabits() {
        return this._houseHasAdvantagesStore;
    }

    setClientHasBadHabits(houseHasAdvantagesStore) {
        this._houseHasAdvantagesStore = houseHasAdvantagesStore;
    }
}