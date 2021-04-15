import {makeAutoObservable} from "mobx";

export default class AreasStore {
    constructor() {
        this._areas = []
        makeAutoObservable(this)
    }

    get getAreas() {
        return this._areas;
    }

    setAreas(areas) {
        this._areas = areas;
    }
}