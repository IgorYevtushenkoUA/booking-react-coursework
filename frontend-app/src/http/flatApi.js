import {$host} from "./index";


export const fetchFlatById = async (id) => {
    const {data} = await $host.get('api/flats/' + id);
    console.log("data::")
    console.log(data)
    return data;
}
