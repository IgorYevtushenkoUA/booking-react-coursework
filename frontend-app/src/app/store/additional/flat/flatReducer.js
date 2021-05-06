import {
    LOAD_ALL_AREAS,
    LOAD_ALL_CITIES,
    LOAD_ALL_COMFORTS,
    LOAD_ALL_HEATINGS,
    LOAD_ALL_IMAGES,
    LOAD_ALL_INFRASTRUCTURES, LOAD_ALL_METRO_STATION,
    LOAD_ALL_MULTIMEDIAS,
    LOAD_ALL_PEOPLE_TYPES,
    LOAD_ALL_REGIONS,
    LOAD_ALL_RULES,
    LOAD_ALL_STREETS, LOAD_ALL_WALL_TYPES,
    LOAD_HOUSE_BY_HOUSE_NUM_AND_STREET
} from "./flatActions";

const initState = {
    streets: [],
    areas: [],
    cities: [],
    comforts: [],
    images: [],
    heatings: [],
    infrastructures: [],
    peopleTypes: [],
    multimedias: [],
    regions: [],
    rules: [],
    wallTypes: [],
    metroStations: [],
    house: null
}

export const flatReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_ALL_STREETS:
            return {...state, streets: action.payload}
        case LOAD_ALL_AREAS:
            return {...state, areas: action.payload}
        case LOAD_ALL_CITIES:
            return {...state, cities: action.payload}
        case LOAD_ALL_COMFORTS:
            return {...state, comforts: action.payload}
        case LOAD_ALL_IMAGES:
            return {...state, images: action.payload}
        case LOAD_ALL_HEATINGS:
            return {...state, heatings: action.payload}
        case LOAD_ALL_INFRASTRUCTURES:
            return {...state, infrastructures: action.payload}
        case LOAD_ALL_PEOPLE_TYPES:
            return {...state, peopleTypes: action.payload}
        case LOAD_ALL_MULTIMEDIAS:
            return {...state, multimedias: action.payload}
        case LOAD_ALL_REGIONS:
            return {...state, regions: action.payload}
        case LOAD_ALL_RULES:
            return {...state, rules: action.payload}
        case LOAD_ALL_WALL_TYPES:
            return {...state, wallTypes: action.payload}
        case LOAD_ALL_METRO_STATION:
            return {...state, metroStations: action.payload}
        case LOAD_HOUSE_BY_HOUSE_NUM_AND_STREET:
            return {...state, house: action.payload}
        default:
            return state;
    }
}