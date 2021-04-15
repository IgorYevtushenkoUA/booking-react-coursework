import {makeAutoObservable} from "mobx";

export default class BadHabitsStore {
    constructor() {
        this._badHabits = []
        makeAutoObservable(this)
    }

    get getBadHabitsStore() {
        return this._badHabits;
    }

    setBadHabitsStore(badHabits) {
        this._badHabits = badHabits;
    }
}