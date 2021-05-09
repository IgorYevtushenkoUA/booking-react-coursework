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
export const LOAD_MAX_HOUSE_YEAR = 'LOAD_MAX_HOUSE_YEAR'
export const LOAD_MIN_HOUSE_YEAR = 'LOAD_MIN_HOUSE_YEAR'

export const LOAD_ALL_FLAT_ROOMS = 'LOAD_ALL_FLAT_ROOMS';
export const LOAD_MAX_FLAT_ROOM = 'LOAD_MAX_FLAT_ROOM';
export const LOAD_MIN_FLAT_ROOM = 'LOAD_MIN_FLAT_ROOM';

export const LOAD_ALL_HOUSE_FLOORS = 'LOAD_ALL_HOUSE_FLOORS';
export const LOAD_MAX_HOUSE_FLOOR = 'LOAD_MAX_HOUSE_FLOOR';
export const LOAD_MIN_HOUSE_FLOOR = 'LOAD_MIN_HOUSE_FLOOR';

export const LOAD_ALL_FLAT_FLOORS = 'LOAD_ALL_FLAT_FLOORS';
export const LOAD_MIN_FLAT_FLOOR = 'LOAD_MIN_FLAT_FLOOR';
export const LOAD_MAX_FLAT_FLOOR = 'LOAD_MAX_FLAT_FLOOR';

export const LOAD_ALL_FLATS = 'LOAD_ALL_FLATS';
export const LOAD_FLAT = 'LOAD_FLAT';

export const LOAD_MAX_MONTH_PRICE = 'LOAD_MAX_MONTH_PRICE';
export const LOAD_MIN_MONTH_PRICE = 'LOAD_MIN_MONTH_PRICE';
export const LOAD_MAX_SQUARE_ALL = 'LOAD_MAX_SQUARE_ALL';
export const LOAD_MIN_SQUARE_ALL = 'LOAD_MIN_SQUARE_ALL';
export const LOAD_MAX_SQUARE_LIVING = 'LOAD_MAX_SQUARE_LIVING';
export const LOAD_MIN_SQUARE_LIVING = 'LOAD_MIN_SQUARE_LIVING';

export const LOAD_HOUSE = 'LOAD_HOUSE';
export const LOAD_STREET = 'LOAD_STREET';
export const LOAD_AREA = 'LOAD_AREA';
export const LOAD_CITY = 'LOAD_CITY';

export const LOAD_HOUSE_DATA = 'LOAD_HOUSE_DATA';
export const LOAD_FLAT_DATA = 'LOAD_FLAT_DATA';

export const LOAD_FLAT_HAS_COMFORT = 'LOAD_FLAT_HAS_COMFORT';

export const CREATE_IMAGE = 'CREATE_IMAGE';

export const loadData = (url, type) => {
    return async dispatch => {
        try {
            const res = await $host.get(url);
            dispatch({
                type: type,
                payload: await res.data
            })
        } catch (e) {
            alert("something went wrong : loadData :" + url)
        }
    }
}

export const loadFlatData = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/flat_data");
            const data = await res.data;
            dispatch({
                type: LOAD_FLAT_DATA,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadFlatHasComfort = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/flat_comfort/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_FLAT_HAS_COMFORT,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const createImage = (image) => {
    return async dispatch => {
        try {
            const res = await $host.post("api/flats/image", {image});
            const data = await res.data;
            dispatch({
                type: CREATE_IMAGE,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

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
            console.log(data)
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

export const loadMaxFlatRoom = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat_max");
            const data = await res.data;
            dispatch({
                type: LOAD_MAX_FLAT_ROOM,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMinFlatRoom = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/rooms_flat_min");
            const data = await res.data;
            dispatch({
                type: LOAD_MIN_FLAT_ROOM,
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

export const loadMinHouseFloor = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/floors_house_min");
            const data = await res.data;
            dispatch({
                type: LOAD_MIN_HOUSE_FLOOR,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMaxHouseFloor = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/floors_house_max");
            const data = await res.data;
            dispatch({
                type: LOAD_MAX_HOUSE_FLOOR,
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

export const loadMinFlatFloor = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/floors_flats_min");
            const data = await res.data;
            dispatch({
                type: LOAD_MIN_FLAT_FLOOR,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMaxMonthPrice = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/month_price_max");
            const data = await res.data;
            dispatch({
                type: LOAD_MAX_MONTH_PRICE,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMinMonthPrice = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/month_price_min");
            const data = await res.data;
            dispatch({
                type: LOAD_MIN_MONTH_PRICE,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMaxSquareAll = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/square_all_max");
            const data = await res.data;
            dispatch({
                type: LOAD_MAX_SQUARE_ALL,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMinSquareAll = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/square_all_min");
            const data = await res.data;
            dispatch({
                type: LOAD_MIN_SQUARE_ALL,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMaxSquareLiving = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/square_living_max");
            const data = await res.data;
            dispatch({
                type: LOAD_MAX_SQUARE_LIVING,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMinSquareLiving = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/square_living_min");
            const data = await res.data;
            dispatch({
                type: LOAD_MIN_SQUARE_LIVING,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : ")
        }
    }
}

export const loadMaxFlatFloor = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/floors_flats_max");
            const data = await res.data;
            dispatch({
                type: LOAD_MAX_FLAT_FLOOR,
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

export const loadFlat = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_FLAT,
                payload: data
            })

        } catch (e) {
            alert("something went wrong : loadFlat")
        }
    }
}

export const loadHouseById = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/house/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_HOUSE,
                payload: data
            })

        } catch (e) {
            alert("something went wrong : loadHouseById")
        }
    }
}


export const loadStreetById = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/street/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_STREET,
                payload: data
            })

        } catch (e) {
            alert("something went wrong : loadStreetById")
        }
    }
}

export const loadAreaById = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/area/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_AREA,
                payload: data
            })

        } catch (e) {
            alert("something went wrong : loadAreaById")
        }
    }
}

export const loadCityById = (id) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/city/" + id);
            const data = await res.data;
            dispatch({
                type: LOAD_CITY,
                payload: data
            })

        } catch (e) {
            alert("something went wrong : loadCityById")
        }
    }
}

export const loadAllFlats = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/")
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLATS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : loadAllFlats")
        }
    }
}

export const loadAllFlatsTest = () => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/test")
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLATS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : loadAllFlats")
        }
    }
}

export const loadFlatsByFilter = (
    areasArr,
    roomsArr,
    houseYearsArr,
    wallTypesArr,
    heatingsArr,
    flatFloorsArr,
    metroStationsArr,
    infrastructuresArr,
    priceFrom,
    priceTo,
    squareAllTo,
    squareAllFrom,
    squareLivingFrom,
    squareLivingTo
) => {
    return async dispatch => {
        try {
            const res = await $host.get("api/flats/filter", {
                params: {
                    areasArr: areasArr,
                    roomsArr: roomsArr,
                    houseYearsArr: houseYearsArr,
                    wallTypesArr: wallTypesArr,
                    heatingsArr: heatingsArr,
                    flatFloorsArr: flatFloorsArr,
                    metroStationsArr: metroStationsArr,
                    infrastructuresArr: infrastructuresArr,
                    priceFrom: priceFrom,
                    priceTo: priceTo,
                    squareAllTo: squareAllTo,
                    squareAllFrom: squareAllFrom,
                    squareLivingFrom: squareLivingFrom,
                    squareLivingTo: squareLivingTo
                }
            });
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_FLATS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong : loadAllFlatsByFilter")
        }
    }
}


export const createFlat = (
    house_num, house_year, floors_num, streetId, wallTypeId, heatingId, metroStationId,
    images, comforts, infrastructures, peopleType, multimedias, rules, householdAppliances,
    flat_floor, square_all, square_living, price_month, rooms_num, balconies_num, short_description, main_description,
    pledge, bathroomTypeId) => {
    return async dispatch => {
        try {
            console.log("house_num :" + house_num)
            console.log("streetId :" + streetId)
            let newHouse;
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
                debugger
                const newRes = await $host.post("api/flats/house", {
                    house_num, house_year, floors_num, streetId, wallTypeId, heatingId
                })
                debugger
                house = await newRes.data;
                console.log(house.id);
                debugger
                await $host.post("api/flats/house_near_metro_station", {
                    houseId: house.id,
                    metroStationId: metroStationId
                })
                debugger
                for (let i = 0; i < infrastructures.length; i++) {
                    await $host.post("api/flats/house_has_infrastructure", {
                        houseId: house.id,
                        infrastructureId: infrastructures[i]
                    })
                }

            }
            console.log("create flat")
            console.log(!house.id);
            const houseId = !house.id ? house[0].id : house.id;
            debugger
            const resFlat = await $host.post("api/flats/flat",
                {
                    flat_floor, square_all, square_living, price_month, rooms_num, balconies_num,
                    short_description, main_description, pledge, houseId, bathroomTypeId
                }
            );
            debugger
            const flat = await resFlat.data;
            for (let i = 0; i < comforts.length; i++) {
                await $host.post("api/flats/flat_has_comfort", {
                    flatId: flat.id,
                    comfortId: comforts[i]
                })
            }
            for (let i = 0; i < peopleType.length; i++) {
                await $host.post("api/flats/flat_has_people_type", {
                    flatId: flat.id,
                    peopleTypeId: peopleType[i]
                })
            }
            for (let i = 0; i < multimedias.length; i++) {
                await $host.post("api/flats/flat_has_multimedia", {
                    flatId: flat.id,
                    multimediaId: multimedias[i]
                })
            }
            for (let i = 0; i < rules.length; i++) {
                await $host.post("api/flats/flat_has_rule", {
                    flatId: flat.id,
                    ruleId: rules[i]
                })
            }

            // todo create image
            let imagesId = []
            debugger
            for (let i = 0; i < images.length; i++) {
                debugger
                let img = await $host.post("api/flats/image", {
                    name: images[i]
                })
                debugger
                imagesId.push(await img.data.id)
                debugger
            }

            for (let i = 0; i < images.length; i++) {
                await $host.post("api/flats/flat_has_image", {
                    flatId: flat.id,
                    imageId: imagesId[i]
                })
            }
        } catch (e) {
            alert("something went wrong : createFlat")
        }
    }
}
