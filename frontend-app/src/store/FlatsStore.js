import {makeAutoObservable} from "mobx";

export default class FlatsStore {
    constructor() {
        this._flats = []
        makeAutoObservable(this)
    }

    get flats() {
        return this._flats;
    }

    setFlats(flats) {
        this._flats = flats;
    }

}