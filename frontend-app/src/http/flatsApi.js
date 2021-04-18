import {$authHost, $host} from "./index";
import {addFlats} from "../redux/state";

export const createFlats = async (flat_floor, square_all, square_living,
                                  price_month, rooms_num, balconies_num, short_description, main_description, pledge, houseHouseId) => {
    const {data} = await $host.post('api/flats/create', {
        flat_floor, square_all, square_living,
        price_month, rooms_num, balconies_num, short_description, main_description, pledge, houseHouseId
    });
    return data;
}

export const fetchFlats = async () => {
    const {data} = await $host.get('api/flats/');
    console.log("data ::")
    console.log(data)
    return data;
}

export const fetchFlatById = async (id) => {
    const {data} = await $host.get("/api/flats/" + id);
    return data;
}

export const deleteFlatByPk = async (id) => {
    const {data} = await $host.delete("/api/flats/" + id);
    return data;
}

