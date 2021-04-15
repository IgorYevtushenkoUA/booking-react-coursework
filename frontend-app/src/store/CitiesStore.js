import {makeAutoObservable} from "mobx";

export default class CitiesStore {
    constructor() {
        this._cities = []
        makeAutoObservable(this)
    }

    get getCitiesStore() {
        return this._cities;
    }

    setCitiesStore(cities) {
        this._cities = cities;
    }
}