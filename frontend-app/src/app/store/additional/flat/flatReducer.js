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
    LOAD_AREA,
    LOAD_CITY, LOAD_CLIENT_LIKED_FLATS_DATA, LOAD_CLIENT_LIKED_FLATS_IMAGES, LOAD_CLIENT_LIKED_FLATS_IMAGES_URL,
    LOAD_FLAT_DATA,
    LOAD_FLAT_DATA_BY_ID,
    LOAD_FLAT_HAS_COMFORT,
    LOAD_FLAT_HAS_HOUSEHOLD_APPLIANCE,
    LOAD_FLAT_HAS_IMAGE,
    LOAD_FLAT_HAS_IMAGE_NAME,
    LOAD_FLAT_HAS_IMAGE_URL,
    LOAD_FLAT_HAS_MULTIMEDIA,
    LOAD_FLAT_HAS_PEOPLE_TYPE,
    LOAD_FLAT_HAS_RULE,
    LOAD_HOUSE,
    LOAD_HOUSE_BY_HOUSE_NUM_AND_STREET,
    LOAD_HOUSE_DATA,
    LOAD_MAX_FLAT_FLOOR,
    LOAD_MAX_FLAT_ROOM,
    LOAD_MAX_HOUSE_FLOOR,
    LOAD_MAX_HOUSE_YEAR,
    LOAD_MAX_MONTH_PRICE,
    LOAD_MAX_SQUARE_ALL,
    LOAD_MAX_SQUARE_LIVING,
    LOAD_MIN_FLAT_FLOOR,
    LOAD_MIN_FLAT_ROOM,
    LOAD_MIN_HOUSE_FLOOR,
    LOAD_MIN_HOUSE_YEAR,
    LOAD_MIN_MONTH_PRICE,
    LOAD_MIN_SQUARE_ALL,
    LOAD_MIN_SQUARE_LIVING, LOAD_OWNER_HAS_FLATS_DATA, LOAD_OWNER_HAS_FLATS_IMAGES, LOAD_OWNER_HAS_FLATS_IMAGES_URL,
    LOAD_STREET
} from "./flatActions";
import {LOAD_ALL_FLATS, LOAD_FLAT} from "../user/userActions";

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

    allFlats: [],
    flat: null,

    minMonthPrice: 0,
    maxMonthPrice: 0,
    minSquareAll: 0,
    maxSquareAll: 0,
    minSquareLiving: 0,
    maxSquareLiving: 0,

    house: null,
    street: null,
    area: null,
    city: null,

    houseData: null,
    flatData: null,

    flatHasComfort: [],
    flatHasHouseholdAppliance: [],
    flatHasMultimedia: [],
    flatHasPeopleType: [],
    flatHasRule: [],
    flatHasImage: [],
    flatHasImageURL: [],
    flatDataById: null,
    ownerHasFlatData: [],
    ownerHasFlatImages: [],
    ownerHasFlatImagesURL: [],

    clientLikedFlatData: [],
    clientLikedFlatImages: [],
    clientLikedFlatImagesURL: [],
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

        case LOAD_ALL_FLATS:
            return {...state, allFlats: action.payload}
        case LOAD_FLAT:
            return {...state, flat: action.payload}

        case LOAD_MAX_MONTH_PRICE:
            return {...state, maxMonthPrice: action.payload}
        case LOAD_MIN_MONTH_PRICE:
            return {...state, minMonthPrice: action.payload}
        case LOAD_MAX_SQUARE_ALL:
            return {...state, maxSquareAll: action.payload}
        case LOAD_MIN_SQUARE_ALL:
            return {...state, minSquareAll: action.payload}
        case LOAD_MAX_SQUARE_LIVING:
            return {...state, maxSquareLiving: action.payload}
        case LOAD_MIN_SQUARE_LIVING:
            return {...state, minSquareLiving: action.payload}

        case LOAD_HOUSE:
            return {...state, minSquareLiving: action.payload}
        case LOAD_STREET:
            return {...state, minSquareLiving: action.payload}
        case LOAD_AREA:
            return {...state, minSquareLiving: action.payload}
        case LOAD_CITY:
            return {...state, minSquareLiving: action.payload}
        case LOAD_HOUSE_DATA:
            return {...state, houseData: action.payload}
        case LOAD_FLAT_DATA:
            return {...state, flatData: action.payload}

        case LOAD_FLAT_HAS_COMFORT:
            return {...state, flatHasComfort: action.payload}
        case LOAD_FLAT_HAS_HOUSEHOLD_APPLIANCE:
            return {...state, flatHasHouseholdAppliance: action.payload}
        case LOAD_FLAT_HAS_MULTIMEDIA:
            return {...state, flatHasMultimedia: action.payload}
        case LOAD_FLAT_HAS_PEOPLE_TYPE:
            return {...state, flatHasPeopleType: action.payload}
        case LOAD_FLAT_HAS_RULE:
            return {...state, flatHasRule: action.payload}
        case LOAD_FLAT_HAS_IMAGE:
            return {...state, flatHasImage: action.payload}
        case LOAD_FLAT_DATA_BY_ID:
            return {...state, flatDataById: action.payload}
        case LOAD_FLAT_HAS_IMAGE_URL:
            return {...state, flatHasImageURL: action.payload}
        case LOAD_OWNER_HAS_FLATS_DATA:
            return {...state, ownerHasFlatData: action.payload}
        case LOAD_OWNER_HAS_FLATS_IMAGES:
            return {...state, ownerHasFlatImages: action.payload}
        case LOAD_OWNER_HAS_FLATS_IMAGES_URL:
            return {...state, ownerHasFlatImagesURL: action.payload}

        case LOAD_CLIENT_LIKED_FLATS_DATA:
            return {...state, clientLikedFlatData: action.payload}
        case LOAD_CLIENT_LIKED_FLATS_IMAGES:
            return {...state, clientLikedFlatImages: action.payload}
        case LOAD_CLIENT_LIKED_FLATS_IMAGES_URL:
            return {...state, clientLikedFlatImagesURL: action.payload}

        default:
            return state;
    }
}