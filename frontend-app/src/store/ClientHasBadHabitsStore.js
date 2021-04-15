import {makeAutoObservable} from "mobx";

export default class ClientHasBadHabitsStore {
    constructor() {
        this._clientHasBadHabits = []
        makeAutoObservable(this)
    }

    get getClientHasBadHabits() {
        return this._clientHasBadHabits;
    }

    setClientHasBadHabits(clientHasBadHabits) {
        this._clientHasBadHabits = clientHasBadHabits;
    }
}