import React from 'react';
import MultiSelectDropdown from "./multiSelectDropdown/MultiSelectDropdown";
import {usePreload} from "../../../../../hooks/usePreload";
import {
    loadAllAreas,
    loadAllFlatFloors, loadAllFlatsTest,
    loadAllHeatings,
    loadAllHouseFloors,
    loadAllHouseYears,
    loadAllInfrastructures,
    loadAllMetroStations,
    loadAllRooms,
    loadAllWallTypes, loadFlatsByFilter, loadMaxFlatFloor,
    loadMaxFlatRoom,
    loadMaxHouseFloor,
    loadMaxHouseYears, loadMaxMonthPrice, loadMaxSquareAll, loadMaxSquareLiving, loadMinFlatFloor,
    loadMinFlatRoom, loadMinHouseFloor,
    loadMinHouseYears, loadMinMonthPrice, loadMinSquareAll, loadMinSquareLiving
} from "../../../../../store/additional/flat/flatActions";
import {useDispatch, useSelector} from "react-redux";
import CheckBoxCard from "../../../../../component/checkbox/CheckBoxCard";
import {Button, Container, FormControl} from "react-bootstrap";
import TwoFields from "../../../../../component/twoFields/TwoFields";
import FilterFormControl from "./filterFormControl/FilterFormControl";

const Filter = () => {

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

    usePreload(loadMaxMonthPrice)
    usePreload(loadMinMonthPrice)
    usePreload(loadMaxSquareAll)
    usePreload(loadMinSquareAll)
    usePreload(loadMaxSquareLiving)
    usePreload(loadMinSquareLiving)

    const dispatch = useDispatch();

    const buildObj = (min, max) => {
        console.log("min = '" + min + "' | max='" + max + "'")
        let obj = [];
        if (min !== 0 && max !== 0) {
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

        infrastructures = useSelector(store => store.flat.infrastructures),

        minMonthPrice = useSelector(store => store.flat.minMonthPrice),
        maxMonthPrice = useSelector(store => store.flat.maxMonthPrice),
        minSquareAll = useSelector(store => store.flat.minSquareAll),
        maxSquareAll = useSelector(store => store.flat.maxSquareAll),
        minSquareLiving = useSelector(store => store.flat.minSquareLiving),
        maxSquareLiving = useSelector(store => store.flat.maxSquareLiving);

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

    const changeInput = (type, value) => {
        switch (type) {
            case "priceFrom" : {

                priceFrom = value;
                break;
            }
            case "priceTo" : {
                priceTo = value;
                break;
            }
            case "squareAllFrom" : {
                squareAllFrom = value;
                break;
            }
            case "squareAllTo" : {
                squareAllTo = value;
                break;
            }
            case "squareLivingFrom" : {
                squareLivingFrom = value;
                break;
            }
            case "squareLivingTo" : {
                squareLivingTo = value;
                break;
            }
            default:
                break;

        }
    }

    const style1 = {
        display: 'grid',
        gridTemplateColumns: '5fr 5fr',
        gridGap: '20px'
    }

    const style2 = {
        display: 'grid',
        gridTemplateColumns: '3fr 3fr 3fr',
        gridGap: '20px'
    }

    const styleBtn = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const search = () => {
        priceFrom = priceFrom === 0 ? minMonthPrice[0].min : priceFrom;
        priceTo = priceTo === 0 ? maxMonthPrice[0].max : priceTo;
        squareAllFrom = squareAllFrom === 0 ? minSquareAll[0].min : squareAllFrom;
        squareAllTo = squareAllTo === 0 ? maxSquareAll[0].max : squareAllTo;
        squareLivingFrom = squareLivingFrom === 0 ? minSquareLiving[0].min : squareLivingFrom;
        squareLivingTo = squareLivingTo === 0 ? maxSquareLiving[0].max : squareLivingTo;



        dispatch(loadFlatsByFilter(
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
        ));
    }

    return (
        <Container>

            <FilterFormControl
                label={"Price"}
                typeFrom={"priceFrom"}
                typeTo={"priceTo"}
                placeholderFrom={"Enter price from"}
                placeholderTo={"Enter price To"}
                changeInput={changeInput}
            />

            <FilterFormControl
                label={"Square All"}
                typeFrom={"squareAllFrom"}
                typeTo={"squareAllTo"}
                placeholderFrom={"Enter square all from"}
                placeholderTo={"Enter square all To"}
                changeInput={changeInput}
            />

            <FilterFormControl
                label={"Square Living"}
                typeFrom={"squareLivingFrom"}
                typeTo={"squareLivingTo"}
                placeholderFrom={"Enter square living From"}
                placeholderTo={"Enter square living To"}
                changeInput={changeInput}
            />
            <div style={style1}>
                <MultiSelectDropdown
                    type="areas"
                    setArray={setArray}
                    data={areas}
                    placeholder="Set Area"
                />

                <MultiSelectDropdown
                    type="metroStations"
                    setArray={setArray}
                    data={metroStations}
                    placeholder="Set Metro Station"
                />
            </div>
            <div style={style2}>
                <MultiSelectDropdown
                    type="rooms"
                    setArray={setArray}
                    data={rooms}
                    placeholder="Set Flat Rooms"
                />

                <MultiSelectDropdown
                    type="flatFloors"
                    setArray={setArray}
                    data={flatFloors}
                    placeholder="Set Flat Floor"
                />

                <MultiSelectDropdown
                    type="houseFloors"
                    setArray={setArray}
                    data={houseFloors}
                    placeholder="Set House Floor"
                />
            </div>
            <div style={style2}>
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
                    type="heatings"
                    setArray={setArray}
                    data={heatings}
                    placeholder="Set Heating"
                />
            </div>


            <CheckBoxCard
                type={"infrastructure"}
                elem={infrastructures}
                title={"???????????????? ???????????????????????????? in 1 mile around home"}
                changeData={changeData}
            />

            <div style={styleBtn}>
                <button className="btn btn-dark"
                        onClick={search}>
                    ??????????
                </button>
            </div>
        </Container>
    );
};

export default Filter;