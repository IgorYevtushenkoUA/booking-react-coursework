import {makeAutoObservable} from "mobx";

export default class AdvantagesStore {
    constructor() {
        this._advantage = []
        makeAutoObservable(this)
    }

    get getAdvantage() {
        return this._advantage;
    }

    setAdvantage(advantage) {
        this._advantage = advantage;
    }
}