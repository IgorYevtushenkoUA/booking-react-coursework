import {$authHost, $host} from "./index";

export const createFlats = async (flats) => {
    const {data} = await $host.post('api/flats', flats);
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

