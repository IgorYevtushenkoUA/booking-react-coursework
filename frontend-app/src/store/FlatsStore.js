import {makeAutoObservable} from "mobx";

export default class FlatsStore {
    constructor() {
        this._flats = []
        makeAutoObservable(this)
    }

    get getFlats() {
        return this._flats;
    }

    setFlats(flats) {
        this._flats = flats;
        console.log("set flats")
        console.log(flats)
    }

}