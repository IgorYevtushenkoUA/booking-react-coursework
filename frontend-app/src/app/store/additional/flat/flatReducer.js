import {
    LOAD_ALL_AREAS,
    LOAD_ALL_BATHROOM_TYPE,
    LOAD_ALL_CITIES,
    LOAD_ALL_COMFORTS,
    LOAD_ALL_FLAT_FLOORS,
    LOAD_ALL_FLAT_ROOMS,
    LOAD_ALL_HEATINGS,
    LOAD_ALL_HOUSE_FLOORS,
    LOAD_ALL_HOUSE_YEARS,
    LOAD_ALL_HOUSEHOLD_APPLIANCE,
    LOAD_ALL_IMAGES,
    LOAD_ALL_INFRASTRUCTURES,
    LOAD_ALL_METRO_STATION,
    LOAD_ALL_MULTIMEDIAS,
    LOAD_ALL_PEOPLE_TYPES,
    LOAD_ALL_REGIONS,
    LOAD_ALL_RULES,
    LOAD_ALL_STREETS,
    LOAD_ALL_WALL_TYPES,
    LOAD_HOUSE_BY_HOUSE_NUM_AND_STREET,
    LOAD_MAX_FLAT_FLOOR, LOAD_MAX_FLAT_ROOM, LOAD_MAX_HOUSE_FLOOR,
    LOAD_MAX_HOUSE_YEAR,
    LOAD_MIN_FLAT_FLOOR, LOAD_MIN_FLAT_ROOM, LOAD_MIN_HOUSE_FLOOR,
    LOAD_MIN_HOUSE_YEAR
} from "./flatActions";
import {LOAD_ALL_FLATS} from "../user/userActions";

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
    bathroom: [],
    householdAppliance: [],
    house: null,

    houseYears: [],
    houseYearMin: 0,
    houseYearMax: 0,

    houseFloors: [],
    houseFloorMax: 0,
    houseFloorMin: 0,

    flatFloors: [],
    flatFloorMax: 0,
    flatFloorMin: 0,

    flatRooms: [],
    flatRoomMax: 0,
    flatRoomMin: 0,

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
        case LOAD_ALL_BATHROOM_TYPE:
            return {...state, bathroom: action.payload}
        case LOAD_ALL_HOUSEHOLD_APPLIANCE:
            return {...state, householdAppliance: action.payload}

        case LOAD_ALL_HOUSE_YEARS:
            return {...state, houseYears: action.payload}
        case LOAD_MAX_HOUSE_YEAR:
            return {...state, houseYearMax: action.payload}
        case LOAD_MIN_HOUSE_YEAR:
            return {...state, houseYearMin: action.payload}

        case LOAD_ALL_FLAT_ROOMS:
            return {...state, flatRooms: action.payload}
        case LOAD_MIN_FLAT_ROOM:
            return {...state, flatRoomMin: action.payload}
        case LOAD_MAX_FLAT_ROOM:
            return {...state, flatRoomMax: action.payload}

        case LOAD_ALL_HOUSE_FLOORS:
            return {...state, houseFloors: action.payload}
        case LOAD_MAX_HOUSE_FLOOR:
            return {...state, houseFloorMax: action.payload}
        case LOAD_MIN_HOUSE_FLOOR:
            return {...state, houseFloorMin: action.payload}

        case LOAD_ALL_FLAT_FLOORS:
            return {...state, flatFloors: action.payload}
        case LOAD_MIN_FLAT_FLOOR:
            return {...state, flatFloorMin: action.payload}
        case LOAD_MAX_FLAT_FLOOR:
            return {...state, flatFloorMax: action.payload}
        default:
            return state;
    }
}