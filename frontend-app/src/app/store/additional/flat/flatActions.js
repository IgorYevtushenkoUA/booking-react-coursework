import {REGISTER_ACCOUNT} from "../user/userActions";
import {$host} from "../../../axios/axios";

export const LOAD_ALL_STREETS = 'LOAD_ALL_STREETS';
export const LOAD_ALL_AREAS = 'LOAD_ALL_AREAS';
export const LOAD_ALL_CITIES = 'LOAD_ALL_CITIES';
export const LOAD_ALL_COMFORTS = 'LOAD_ALL_COMFORTS';
export const LOAD_ALL_IMAGES = 'LOAD_ALL_IMAGES';
export const LOAD_ALL_HEATINGS = 'LOAD_ALL_HEATINGS';
export const LOAD_ALL_INFRASTRUCTURES = 'LOAD_ALL_INFRASTRUCTURES';
export const LOAD_ALL_PEOPLE_TYPES = 'LOAD_ALL_PEOPLE_TYPES';
export const LOAD_ALL_MULTIMEDIAS = 'LOAD_ALL_MULTIMEDIAS';
export const LOAD_ALL_REGIONS = 'LOAD_ALL_REGIONS';
export const LOAD_ALL_RULES = 'LOAD_ALL_RULES';
export const LOAD_ALL_WALL_TYPES = 'LOAD_ALL_WALL_TYPES';
export const LOAD_ALL_METRO_STATION = 'LOAD_ALL_METRO_STATION';

export const loadAllStreets = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/streets");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_STREETS,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllAreas = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/areas");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_AREAS,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllCities = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/cities");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_CITIES,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllComforts = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/comforts");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_COMFORTS,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllImages = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/images");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_IMAGES,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllHeatings= () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/heatings");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_HEATINGS,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllInfrastructures = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/infrastructures");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_INFRASTRUCTURES,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllPeopleTypes = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/peopleTypes");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_PEOPLE_TYPES,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllMultimedias = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/multimedias");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_MULTIMEDIAS,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllRegions = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/regions");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_REGIONS,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllRules = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/rules");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_RULES,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}

export const loadAllWallTypes = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/wallTypes");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_WALL_TYPES,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}
export const loadAllMetroStations = () => {
    return async dispatch => {
        try{
            const res = await $host.get("api/flats/metro");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_METRO_STATION,
                payload: data
            })
        }catch(e){
            alert("Something went wrong : ")
        }
    }
}
