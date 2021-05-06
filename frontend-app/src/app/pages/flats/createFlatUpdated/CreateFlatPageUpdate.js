import React, {useState} from 'react';
import LoadImageCard from "./loadImage/LoadImageCard";
import TextAreaCard from "./textarea/TextAreaCard";
import {Container} from "react-bootstrap";
import {usePreload} from "../../../hooks/usePreload";
import {
    loadAllAreas,
    loadAllCities,
    loadAllComforts,
    loadAllHeatings, loadAllInfrastructures, loadAllMetroStations, loadAllMultimedias, loadAllPeopleTypes, loadAllRules,
    loadAllStreets, loadAllWallTypes
} from "../../../store/additional/flat/flatActions";
import CheckBoxCard from "./checkbox/CheckBoxCard";
import {useDispatch, useSelector} from "react-redux";
import DropDownList from "./dropdown/DropDownList";
import AttributeForm from "./form/AttributeForm";

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

    let streetId = 0, areaId = 0, wallTypeId = 0, heatingId = 0, metro = 0,
        houseNum = 0, houseYear = 0, numOfFloors = 0, flatFloor = 0, allSquare = 0,
        livingSquare = 0, priceMonth = 0, pledge = 0, balconiesNum = 0;

    const [drag, setDrag] = useState(false);

    const streets = useSelector(store => store.flat.streets);
    const areas = useSelector(store => store.flat.areas);
    const comforts = useSelector(store => store.flat.comforts);
    const heatings = useSelector(store => store.flat.heatings);
    const infrastructures = useSelector(store => store.flat.infrastructures);
    const peopleTypes = useSelector(store => store.flat.peopleTypes);
    const multimedias = useSelector(store => store.flat.multimedias);
    const rules = useSelector(store => store.flat.rules);
    const wallTypes = useSelector(store => store.flat.wallTypes);
    const metroStations = useSelector(store => store.flat.metroStations);

    let comfortsArr = [];
    let infrastructuresArr = [];
    let peopleTypesArr = [];
    let multimediasArr = [];
    let rulesArr = [];

    console.log(streets);

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
        } else {
            console.log("else")
        }
    }

    const setData = (id, type) => {
        // debugger
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
        } else {
            console.log("else setData")
        }
        console.log("streetId : " + streetId)
        console.log("areaId : " + areaId)
        console.log("wallTypeId : " + wallTypeId)
        console.log("heatingId : " + heatingId)
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
                title="Оберіть айближчу станцію метро"
                data={metroStations}
                setData={setData}
                type="metro"
            />

            <LoadImageCard
                drag={drag}
                dragStartHandler={dragStartHandler}
                dragLeaveHandler={dragLeaveHandler}
                onDropHandler={onDropHandler}/>

            <TextAreaCard/>

            <CheckBoxCard
                type={"comfort"}
                elem={comforts}
                title={"Виберіть вулицю"}
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
                title={"Виберіть Правиила поживання"}
                changeData={changeData}
            />

        </Container>
    );
};

export default CreateFlatPageUpdate;