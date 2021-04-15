import {makeAutoObservable} from "mobx";

export default class HouseStore {

    constructor() {
        this._houses = [];
        makeAutoObservable(this);
    }

    get getHouses() {
        return this._houses;
    }

    setHouses(houses) {
        this._houses = houses;
    }

}