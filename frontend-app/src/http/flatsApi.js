import {$authHost, $host} from "./index";

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
    return data;
}

export const fetchFlatById = async (id) => {
    const {data} = await $host.get("/api/flats/" + id);
    return data;
}

