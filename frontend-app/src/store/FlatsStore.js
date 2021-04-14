import {makeAutoObservable} from "mobx";

export default class FlatsStore {
    constructor(){

        makeAutoObservable(this);
    }


}