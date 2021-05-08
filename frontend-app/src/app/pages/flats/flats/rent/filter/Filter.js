import React from 'react';
import MultiSelectDropdown from "./multiSelectDropdown/MultiSelectDropdown";
import {usePreload} from "../../../../../hooks/usePreload";
import {
    loadAllAreas,
    loadAllFlatFloors,
    loadAllHeatings,
    loadAllHouseFloors,
    loadAllHouseYears,
    loadAllInfrastructures,
    loadAllMetroStations,
    loadAllRooms,
    loadAllWallTypes, loadMaxFlatFloor,
    loadMaxFlatRoom,
    loadMaxHouseFloor,
    loadMaxHouseYears, loadMinFlatFloor,
    loadMinFlatRoom, loadMinHouseFloor,
    loadMinHouseYears
} from "../../../../../store/additional/flat/flatActions";
import {useDispatch, useSelector} from "react-redux";
import CheckBoxCard from "../../../../../component/checkbox/CheckBoxCard";
import {Container} from "react-bootstrap";

const Filter = () => {

    /*
    rooms                       MultiSelectDropdown
    price [from | to]           -----------
    house_year                  MultiSelectDropdown
    walltype                    MultiSelectDropdown
    house_floors                MultiSelectDropdown
    heating type                MultiSelectDropdown
    square_all [from | to]      ------------
    square_living [from | to]   --------
    flat_floor                  MultiSelectDropdown
    infrastructure to 1 km      CHECKED
    near metro station          MultiSelectDropdown
     */

    usePreload(loadAllAreas)
    usePreload(loadAllRooms)
    usePreload(loadMaxFlatRoom)
    usePreload(loadMinFlatRoom)

    usePreload(loadAllHouseYears)
    usePreload(loadMaxHouseYears)
    usePreload(loadMinHouseYears)

    usePreload(loadAllWallTypes)

    usePreload(loadAllHouseFloors)
    usePreload(loadMaxHouseFloor)
    usePreload(loadMinHouseFloor)

    usePreload(loadAllHeatings)

    usePreload(loadAllFlatFloors)
    usePreload(loadMaxFlatFloor)
    usePreload(loadMinFlatFloor)

    usePreload(loadAllInfrastructures)
    usePreload(loadAllMetroStations)

    const dispatch = useDispatch();

    const buildObj = (min, max) => {
        console.log("min = '" + min + "' | max='" + max + "'")
        let obj = [];
        debugger
        if (min !== 0 && max !== 0) {
            debugger
            for (let i = min[0].min; i <= max[0].max; i++) {
                obj.push({id: i, name: i.toString()})
            }
        }
        return obj;
    }

    const areas = useSelector(store => store.flat.areas),

        minRoom = useSelector(store => store.flat.flatRoomMin),
        maxRoom = useSelector(store => store.flat.flatRoomMax),
        rooms = buildObj(minRoom, maxRoom),

        minHouseYear = useSelector(store => store.flat.houseYearMin),
        maxHouseYear = useSelector(store => store.flat.houseYearMax),
        houseYears = buildObj(minHouseYear, maxHouseYear),

        wallTypes = useSelector(store => store.flat.wallTypes),

        minHouseFloor = useSelector(store => store.flat.houseFloorMin),
        maxHouseFloor = useSelector(store => store.flat.houseFloorMax),
        houseFloors = buildObj(minHouseFloor, maxHouseFloor),

        heatings = useSelector(store => store.flat.heatings),

        minFlatFloor = useSelector(store => store.flat.flatFloorMin),
        maxFlatFloor = useSelector(store => store.flat.flatFloorMax),
        flatFloors = buildObj(minFlatFloor, maxFlatFloor),

        metroStations = useSelector(store => store.flat.metroStations),

        infrastructures = useSelector(store => store.flat.infrastructures);

    let areasArr = [],
        roomsArr = [],
        houseYearsArr = [],
        wallTypesArr = [],
        houseFloorsArr = [],
        heatingsArr = [],
        flatFloorsArr = [],
        infrastructuresArr = [],
        metroStationsArr = [];
    let priceFrom = 0,
        priceTo = 0,
        squareAllFrom = 0,
        squareAllTo = 0,
        squareLivingFrom = 0,
        squareLivingTo = 0;

    const setArray = (value, type) => {
        switch (type) {
            case "areas":
                areasArr = value;
                console.log('areasArr')
                console.log(areasArr)
                break;
            case "rooms":
                roomsArr = value;
                break;
            case "houseYears":
                houseYearsArr = value;
                break;
            case "wallTypes":
                wallTypesArr = value;
                break;
            case "houseFloors":
                houseFloorsArr = value;
                break;
            case "heatings":
                heatingsArr = value;
                break;
            case "flatFloors":
                flatFloorsArr = value;
                break;
            case "metroStations":
                metroStationsArr = value;
                break;
            default:
                break;
        }
    }

    const setData = (value, type) => {
        switch (type) {
            case "priceFrom" :
                priceFrom = value;
                break;
            case "priceTo" :
                priceTo = value;
                break;
            case "squareAllFrom" :
                squareAllFrom = value;
                break;
            case "squareAllTo" :
                squareAllTo = value;
                break;
            case "squareLivingFrom" :
                squareLivingFrom = value;
                break;
            case "squareLivingTo" :
                squareLivingTo = value;
                break;
            default :
                break;
        }
    }

    const changeData = (id, type) => {
        if (infrastructuresArr.includes(id)) {
            infrastructuresArr = infrastructuresArr.filter(item => item.id != id)
        } else {
            infrastructuresArr.push(id);
        }
    }


    return (
        <div>
            <MultiSelectDropdown
                type="areas"
                setArray={setArray}
                data={areas}
                placeholder="Set Area"
            />

            <MultiSelectDropdown
                type="rooms"
                setArray={setArray}
                data={rooms}
                placeholder="Set Flat Rooms"
            />

            <MultiSelectDropdown
                type="houseYears"
                setArray={setArray}
                data={houseYears}
                placeholder="Set House Year"
            />

            <MultiSelectDropdown
                type="wallTypes"
                setArray={setArray}
                data={wallTypes}
                placeholder="Set wall Type"
            />

            <MultiSelectDropdown
                type="houseFloors"
                setArray={setArray}
                data={houseFloors}
                placeholder="Set House Floor"
            />

            <MultiSelectDropdown
                type="heatings"
                setArray={setArray}
                data={heatings}
                placeholder="Set Heating"
            />

            <MultiSelectDropdown
                type="flatFloors"
                setArray={setArray}
                data={flatFloors}
                placeholder="Set Flat Floor"
            />

            <MultiSelectDropdown
                type="metroStations"
                setArray={setArray}
                data={metroStations}
                placeholder="Set Metro Station"
            />

            <CheckBoxCard
                type={"infrastructure"}
                elem={infrastructures}
                title={"Виберіть Інфраструктуру in 1 mile around home"}
                changeData={changeData}
            />

            <div>Поблизу станцій метро</div>

        </div>
    );
};

export default Filter;