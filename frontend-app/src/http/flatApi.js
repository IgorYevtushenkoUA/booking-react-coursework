import {$host} from "./index";


export const fetchFlatById = async (id) => {
    const {data} = await $host.get('api/flats/' + id);
    return data;
}
