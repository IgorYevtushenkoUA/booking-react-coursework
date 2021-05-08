import React from 'react';
import MultiSelectDropdown from "./multiSelectDropdown/MultiSelectDropdown";
import {usePreload} from "../../../../../hooks/usePreload";
import {
    loadAllAreas,
    loadAllFlatFloors, loadAllHeatings,
    loadAllHouseFloors, loadAllHouseYears, loadAllInfrastructures, loadAllMetroStations,
    loadAllRooms, loadAllWallTypes
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
    usePreload(loadAllHouseYears)
    usePreload(loadAllWallTypes)
    usePreload(loadAllHouseFloors)
    usePreload(loadAllHeatings)
    usePreload(loadAllFlatFloors)
    usePreload(loadAllInfrastructures)
    usePreload(loadAllMetroStations)

    const dispatch = useDispatch();

    const areas = useSelector(store => store.flat.areas),
        rooms = useSelector(store => store.flat.flatRooms),
        houseYears = useSelector(store => store.flat.houseYears),
        wallTypes = useSelector(store => store.flat.wallTypes),
        houseFloors = useSelector(store => store.flat.houseFloors),
        heatings = useSelector(store => store.flat.heatings),
        flatFloors = useSelector(store => store.flat.flatFloors),
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
                placeholder="Set Num Rooms"
            />



            <div>Район</div>
            <div>Кількість кімнат квартири</div>
            <div>Ціна</div>
            <div>Рік будівництва</div>
            <div>Тип стін</div>
            <div>Поверхність будинку</div>
            <div>Опалення</div>
            <div>Загальна площа</div>
            <div>Спальна площа</div>
            <div>Поверх квартири</div>
            <div>Інфраструктура до 1 кілометра</div>

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