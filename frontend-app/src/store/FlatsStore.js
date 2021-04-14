import {makeAutoObservable} from "mobx";

export default class FlatsStore {
    constructor() {
        this._flats = [
            {
                flat_id: 1,
                flat_floor: 5,
                square_all: 62,
                square_living: 20,
                price_month: 15900,
                rooms_num: 1,
                balconies_num: 1,
                short_description: 'short_description',
                main_description: 'main_description',
                pledge: 20000,
                house_id: 1
            },
            {
                flat_id: 2,
                flat_floor: 4,
                square_all: 68,
                square_living: 20,
                price_month: 17500,
                rooms_num: 1,
                balconies_num: 1,
                short_description: 'short_description',
                main_description: 'main_description',
                pledge: 20000,
                house_id: 2
            },
            {
                flat_id: 3,
                flat_floor: 3,
                square_all: 110,
                square_living: 52,
                price_month: 50000,
                rooms_num: 3,
                balconies_num: 2,
                short_description: 'short_description',
                main_description: 'main_description',
                pledge: 500000,
                house_id: 3
            }
        ]
    }

    get getFlats() {
        return this._flats;
    }

    setFlats(flats) {
        this._flats = flats;
    }

}