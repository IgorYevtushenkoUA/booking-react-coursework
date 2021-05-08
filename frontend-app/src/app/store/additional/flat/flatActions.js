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
export const LOAD_HOUSE_BY_HOUSE_NUM_AND_STREET = 'LOAD_HOUSE_BY_HOUSE_NUM_AND_STREET';
export const LOAD_ALL_BATHROOM_TYPE = 'LOAD_ALL_BATHROOM_TYPE';
export const LOAD_ALL_HOUSEHOLD_APPLIANCE = 'LOAD_ALL_HOUSEHOLD_APPLIANCE';
export const LOAD_ALL_HOUSE_YEARS = 'LOAD_ALL_HOUSE_YEARS';
export const LOAD_ALL_HOUSE_FLOORS = 'LOAD_ALL_HOUSE_FLOORS';
export const LOAD_ALL_FLAT_FLOORS = 'LOAD_ALL_FLAT_FLOORS';
export const LOAD_ALL_FLAT_ROOMS = 'LOAD_ALL_FLAT_ROOMS';

export const LOAD_MIN_FLAT_FLOOR = 'LOAD_MIN_FLAT_FLOOR';
export const LOAD_MAX_FLAT_FLOOR = 'LOAD_MAX_FLAT_FLOOR';
export const LOAD_MAX_HOUSE_FLOOR = 'LOAD_MAX_HOUSE_FLOOR';
export const LOAD_MIN_HOUSE_FLOOR = 'LOAD_MIN_HOUSE_FLOOR';
export const LOAD_MAX_HOUSE_YEAR = 'LOAD_MAX_HOUSE_YEAR';
export const LOAD_MIN_HOUSE_YEAR = 'LOAD_MIN_HOUSE_YEAR';

export const loadAllStreets = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/streets");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_STREETS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllAreas = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/areas");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_AREAS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllCities = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/cities");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_CITIES,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllComforts = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/comforts");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_COMFORTS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllImages = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/images");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_IMAGES,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllHeatings = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/heatings");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_HEATINGS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllInfrastructures = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/infrastructures");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_INFRASTRUCTURES,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllPeopleTypes = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/peopleTypes");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_PEOPLE_TYPES,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllMultimedias = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/multimedias");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_MULTIMEDIAS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllRegions = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/regions");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_REGIONS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllRules = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rules");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_RULES,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllWallTypes = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/wallTypes");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_WALL_TYPES,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllMetroStations = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/metro");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_METRO_STATION,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllBathroomTypes = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/bathroom");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_BATHROOM_TYPE,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllHouseholdAppliance = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/householdAppliance");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_HOUSEHOLD_APPLIANCE,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllHouseYears = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/years_house");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_HOUSE_YEARS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMaxHouseYears = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/years_house_max");
            const data = await res.data;
            dispatch({
                type: LOAD_MAX_HOUSE_YEAR,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}
export const loadMinHouseYears = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/years_house_min");
            const data = await res.data;
            dispatch({
                type: LOAD_MIN_HOUSE_YEAR,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}


export const loadAllHouseFloors = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/floors_house");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_HOUSE_FLOORS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllFlatFloors = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/floors_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_FLOORS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadAllRooms = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_ROOMS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMaxFlatRooms = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_ROOMS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}
export const loadMinFlatRooms = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_ROOMS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}
export const loadMaxFlatRooms = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_ROOMS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}
export const loadAllRooms = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_ROOMS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}
export const loadAllRooms = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_ROOMS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}
export const loadAllRooms = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat");
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLAT_ROOMS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const getHouseByHouseNumAndStreetId = (house_num, streetId) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/house", {
                params: {
                    house_num: house_num,
                    streetId: streetId
                }
            });
            const data = await res.data;
            dispatch({
                type: LOAD_HOUSE_BY_HOUSE_NUM_AND_STREET,
                payload: data
            });
        } catch (e) {
            alert("something went wrong : getHouseByHouseNumAndStreetId")
        }
    }
}

export const createFlat = (
    house_num, house_year, floors_num, streetId, wallTypeId, heatingId, metroStationId,
    images, comforts, infrastructures, peopleType, multimedias, rules,
    flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description, main_description,
    pledge, bathroomTypeId) => {
    return async dispatch => {
        try {
            console.log("house_num :" + house_num)
            console.log("streetId :" + streetId)
            let newHouse;
            debugger
            const res = await $host.get("api/flats/house", {
                params:
                    {
                        house_num: house_num,
                        streetId: streetId
                    }
            });
            let house = await res.data;
            debugger
            if (house == '') {
                // create house
                console.log("create new house")
                debugger
                const newRes = await $host.post("api/flats/house", {
                    house_num, house_year, floors_num, streetId, wallTypeId, heatingId
                })
                debugger
                house = await newRes.data[0];
                debugger
                // add infrastructures
                for (let i = 0; i < infrastructures.length; i++) {
                    // house add infrastructures
                }

                // todo add metro stations

            }
            // todo add flat-images
            // todo add house-infastructure // зробити перевірки чи така інфаструктура вже не додана
            console.log("create flat")
            debugger
            const resFlat = await $host.post("api/flats/flat",
                {
                    flat_floor, square_all, square_living, price_month, rooms_num, balconies_num,
                    short_description, main_description, pledge, houseId: house.id, bathroomTypeId
                }
            );
            const flat = await resFlat.data;
            debugger
            for (let i = 0; i < comforts; i++) {
                // add comforts
                await $host.post("api/flats/flat_comfort", {flatId: flat.id, comfortId: comforts[i]})
            }
            debugger
            for (let i = 0; i < peopleType; i++) {
                // add peopleType
                await $host.post("api/flats/flat_peopleType", {
                    flatId: flat.id,
                    peopleTypeId: peopleType[i]
                })
            }
            debugger
            for (let i = 0; i < multimedias; i++) {
                // add multimedias
                await $host.post("api/flats/flat_multimedia", {
                    flatId: flat.id,
                    multimediaId: multimedias[i]
                })
            }
            for (let i = 0; i < rules; i++) {
                // add rules
                await $host.post("api/flats/flat_rule", {flatId: flat.id, ruleId: rules[i]})
            }
            for (let i = 0; i < images; i++) {
                // add images
                await $host.post("api/flats/flat_images", {flatId: flat.id, imageId: images[i]})
            }
        } catch (e) {
            alert("something went wrong : createFlat")
        }
    }
}
