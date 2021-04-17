import {makeAutoObservable} from "mobx";

class Counter {

    constructor() {
        // let count = 0;
        let count = 0;
        makeAutoObservable(this);
    }

    increase() {
        this.count = this.count + 1;
    }

    decrement() {
        this.count = this.count - 1;
    }

    getCounter() {
        return this.count;
    }

};

export default new Counter();