import {makeAutoObservable} from "mobx";

export default class HouseStore {

    constructor(){

        makeAutoObservable(this);
    }


}