import React, {useState} from 'react';
import DrapImageCard from "../../../component/loadImage/drap/DrapImageCard";
import TextAreaCard from "../../../component/textarea/TextAreaCard";
import {Button, Container} from "react-bootstrap";
import {usePreload} from "../../../hooks/usePreload";
import {
    createFlat,
    getHouseByHouseNumAndStreetId, loadAllAreas, loadAllBathroomTypes, loadAllCities, loadAllComforts,
    loadAllHeatings, loadAllHouseholdAppliance, loadAllInfrastructures, loadAllMetroStations, loadAllMultimedias,
    loadAllPeopleTypes, loadAllRules, loadAllStreets, loadAllWallTypes
} from "../../../store/additional/flat/flatActions";
import CheckBoxCard from "./checkbox/CheckBoxCard";
import {useDispatch, useSelector} from "react-redux";
import DropDownList from "./dropdown/DropDownList";
import AttributeForm from "./form/AttributeForm";
import LoadImageCard from "../../../component/loadImage/load/LoadImageCard";

const CreateFlatPageUpdate = () => {

    usePreload(loadAllStreets);
    usePreload(loadAllAreas);
    usePreload(loadAllCities);
    usePreload(loadAllComforts);
    usePreload(loadAllHeatings);
    usePreload(loadAllInfrastructures);
    usePreload(loadAllPeopleTypes);
    usePreload(loadAllMultimedias);
    usePreload(loadAllRules);
    usePreload(loadAllWallTypes);
    usePreload(loadAllMetroStations);
    usePreload(loadAllBathroomTypes)
    usePreload(loadAllHouseholdAppliance)

    let streetId = 0,
        areaId = 0,
        wallTypeId = 0,
        heatingId = 0,
        metro = 0,
        houseNum = 0,
        houseYear = 0,
        numOfFloors = 0,
        flatFloor = 0,
        allSquare = 0,
        livingSquare = 0,
        priceMonth = 0,
        pledge = 0,
        balconiesNum = 0,
        bathroomTypeId = 0;

    const [drag, setDrag] = useState(false);

    const streets = useSelector(store => store.flat.streets);
    const areas = useSelector(store => store.flat.areas);
    const heatings = useSelector(store => store.flat.heatings);
    const wallTypes = useSelector(store => store.flat.wallTypes);
    const metroStations = useSelector(store => store.flat.metroStations);
    const bathroomTypes = useSelector(store => store.flat.bathroom);

    const comforts = useSelector(store => store.flat.comforts);
    const infrastructures = useSelector(store => store.flat.infrastructures);
    const peopleTypes = useSelector(store => store.flat.peopleTypes);
    const multimedias = useSelector(store => store.flat.multimedias);
    const rules = useSelector(store => store.flat.rules);
    const householdAppliances = useSelector(store => store.flat.householdAppliance);

    let comfortsArr = [];
    let infrastructuresArr = [];
    let peopleTypesArr = [];
    let multimediasArr = [];
    let rulesArr = [];
    let householdApplianceArr = [];

    const dispatch = useDispatch();

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    }

    const onDropHandler = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        console.log(files);
        setDrag(false);
    }

    const changeData = (id, type) => {
        if (type == 'comfort') {
            if (comfortsArr.includes(id))
                comfortsArr = comfortsArr.filter(w => w != id);
            else comfortsArr.push(id);
        } else if (type == 'infrastructure') {
            if (infrastructuresArr.includes(id))
                infrastructuresArr = infrastructuresArr.filter(w => w != id);
            else infrastructuresArr.push(id);
        } else if (type == 'peopleType') {
            if (peopleTypesArr.includes(id))
                peopleTypesArr = peopleTypesArr.filter(w => w != id);
            else peopleTypesArr.push(id);
        } else if (type == 'multimedia') {
            if (multimediasArr.includes(id))
                multimediasArr = multimediasArr.filter(w => w != id);
            else multimediasArr.push(id);
        } else if (type == 'rule') {
            if (rulesArr.includes(id))
                rulesArr = rulesArr.filter(w => w != id);
            else rulesArr.push(id);
        } else if (type = 'householdAppliance') {
            if (householdApplianceArr.includes(id))
                householdApplianceArr = householdApplianceArr.filter(w => w != id);
            else householdApplianceArr.push(id);
        } else {
            console.log("else")
        }
    }

    const setData = (id, type) => {
        if (type == 'street') {
            streetId = id;
        } else if (type == 'area') {
            areaId = id;
        } else if (type == 'wallType') {
            wallTypeId = id;
        } else if (type == 'heating') {
            heatingId = id;
        } else if (type = 'metro') {
            metro = id
        } else if (type = 'bathroomType') {
            bathroomTypeId = id
        } else {
            console.log("else setData")
        }
    }

    const setFormData = (type, value) => {
        if (type == 'houseNum') {
            houseNum = value;
        } else if (type = 'houseYear') {
            houseYear = value;
        } else if (type = 'numOfFloors') {
            numOfFloors = value;
        } else if (type = 'flatFloor') {
            flatFloor = value;
        } else if (type = 'allSquare') {
            allSquare = value;
        } else if (type = 'livingSquare') {
            livingSquare = value;
        } else if (type = 'priceMonth') {
            priceMonth = value;
        } else if (type = 'pledge') {
            pledge = value;
        } else if (type = 'balconiesNum') {
            balconiesNum = value;
        } else {
            console.log("else in setFormData")
        }
        console.log("houseNum : " + houseNum)
    }

    const house = useSelector(store => store.flat.house);

    // todo add household
    const handlerClick = async () => {
        try {
            const house_num_test = 37;
            const house_year_test = 1;
            const floors_num_test = 1;
            const streetId_test = 7;
            const wallTypeId_test = 1;
            const heatingId_test = 1;
            const metroStationId_test = 1;
            const images_test = [];
            const comforts_test = [1];
            const infrastructures_test = [];
            const peopleType_test = [];
            const multimedias_test = [];
            const rules_test = [];
            const flat_floor_test = 1;
            const square_all_test = 1;
            const square_living_test = 1;
            const price_month_test = 1;
            const rooms_num_test = 1;
            const balconies_num_test = 1;
            const short_description_test = "short_description";
            const main_description_test = "main_description";
            const pledge_test = 1;
            const bathroomTypeId_test = 1;

            dispatch(createFlat(
                house_num_test, house_year_test, floors_num_test, streetId_test, wallTypeId_test, heatingId_test, metroStationId_test,
                images_test, comforts_test, infrastructures_test, peopleType_test, multimedias_test, rules_test,
                flat_floor_test, square_all_test, square_living_test, price_month_test, rooms_num_test, balconies_num_test, short_description_test, main_description_test,
                pledge_test, bathroomTypeId_test
            ))

            // dispatch(getHouseByHouseNumAndStreetId(37,27));

        } catch (e) {
            alert("e.response.data.message : handlerClick")
        }
    }

    return (
        <Container>
            <AttributeForm
                setFormData={setFormData}
                title={"houseNum"}
                placeholder={"houseNum"}
                type={"houseNum"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"houseYear"}
                placeholder={"houseYear"}
                type={"houseYear"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"numOfFloors"}
                placeholder={"numOfFloors"}
                type={"numOfFloors"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"flatFloor"}
                placeholder={"flatFloor"}
                type={"flatFloor"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"allSquare"}
                placeholder={"allSquare"}
                type={"allSquare"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"livingSquare"}
                placeholder={"livingSquare"}
                type={"livingSquare"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"priceMonth"}
                placeholder={"priceMonth"}
                type={"priceMonth"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"pledge"}
                placeholder={"pledge"}
                type={"pledge"}
            />

            <AttributeForm
                setFormData={setFormData}
                title={"balconiesNum"}
                placeholder={"balconiesNum"}
                type={"balconiesNum"}
            />

            <DropDownList
                title="Оберіть вулицю"
                data={streets}
                setData={setData}
                type="street"
            />

            <DropDownList
                title="Оберіть Район"
                data={areas}
                setData={setData}
                type="area"
            />

            <DropDownList
                title="Оберіть Тип стін у будинку"
                data={wallTypes}
                setData={setData}
                type="wallType"
            />

            <DropDownList
                title="Оберіть опалення у будинку"
                data={heatings}
                setData={setData}
                type="heating"
            />

            <DropDownList
                title="Оберіть тип ванної кімнати"
                data={bathroomTypes}
                setData={setData}
                type="bathroomType"
            />

            <DropDownList
                title="Оберіть найближчу станцію метро"
                data={metroStations}
                setData={setData}
                type="metro"
            />

            <DrapImageCard
                drag={drag}
                dragStartHandler={dragStartHandler}
                dragLeaveHandler={dragLeaveHandler}
                onDropHandler={onDropHandler}/>

            <LoadImageCard/>

            <TextAreaCard/>

            <CheckBoxCard
                type={"comfort"}
                elem={comforts}
                title={"Виберіть комфорт"}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"infrastructure"}
                elem={infrastructures}
                title={"Виберіть Інфраструктуру"}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"peopleType"}
                elem={peopleTypes}
                title={"Виберіть тип мешканців"}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"multimedia"}
                elem={multimedias}
                title={"Виберіть Мультимудію в квартирі"}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"rule"}
                elem={rules}
                title={"Виберіть Правила проживання"}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"householdAppliance"}
                elem={householdAppliances}
                title={"Виберіть Побутову техніку"}
                changeData={changeData}
            />

            <Button onClick={handlerClick}>Створити квартиру</Button>
        </Container>
    );
};

export default CreateFlatPageUpdate;