import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {usePreload} from "../../../hooks/usePreload";
import {
    createFlat,
    loadAllAreas, loadAllBathroomTypes, loadAllCities, loadAllComforts,
    loadAllHeatings, loadAllHouseholdAppliance, loadAllInfrastructures, loadAllMetroStations, loadAllMultimedias,
    loadAllPeopleTypes, loadAllRules, loadAllStreets, loadAllWallTypes
} from "../../../store/additional/flat/flatActions";
import {useDispatch, useSelector} from "react-redux";
import LoadImageCard from "../../../component/loadImage/load/LoadImageCard";
import TextAreaCard from "../../../component/textarea/TextAreaCard";
import CheckBoxCard from "../../../component/checkbox/CheckBoxCard";
import DropDownList from "../../../component/dropdown/DropDownList";
import AttributeForm from "../../../component/form/AttributeForm";
import {useTranslation} from "react-i18next";

const CreateFlatPage = () => {

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
        roomsNum = 0,
        bathroomTypeId = 0,
        comfortsArr = [],
        infrastructuresArr = [],
        peopleTypesArr = [],
        multimediasArr = [],
        rulesArr = [],
        householdApplianceArr = [],
        imagesArr = [],
        short_description = "",
        main_description = "";

    const {t} = useTranslation();
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

    const dispatch = useDispatch();

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
        } else if (type == 'householdAppliance') {
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
        } else if (type == 'metro') {
            metro = id
        } else if (type == 'bathroomType') {
            bathroomTypeId = id
        } else {
            console.log("else setData")
        }
    }

    const setFormData = (type, value) => {
        if (type == 'houseNum') {
            houseNum = value;
        } else if (type == 'houseYear') {
            houseYear = value;
        } else if (type == 'numOfFloors') {
            numOfFloors = value;
        } else if (type == 'flatFloor') {
            flatFloor = value;
        } else if (type == 'allSquare') {
            allSquare = value;
        } else if (type == 'livingSquare') {
            livingSquare = value;
        } else if (type == 'priceMonth') {
            priceMonth = value;
        } else if (type == 'pledge') {
            pledge = value;
        } else if (type == 'balconiesNum') {
            balconiesNum = value;
        } else if (type == 'roomsNum') {
            roomsNum = value;
        } else {
            console.log("else in setFormData")
        }
        console.log("houseNum : " + houseNum)
    }

    const setImages = (images) => {
        imagesArr = images;
    }

    const setTextArea = (type, value) => {
        if (type == 'short_description') {

            short_description = value;
        } else if (type == 'main_description') {
            main_description = value;
        } else {
            console.log("else in set TextArea")
        }
    }

    const handlerClick = async () => {
        try {

            const house_year_test = 1;
            const floors_num_test = 1;
            const streetId_test = 7;
            const wallTypeId_test = 1;
            const heatingId_test = 1;
            const metroStationId_test = 1;
            const images_test = [1, 2, 3];
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
                houseNum,
                houseYear,
                numOfFloors,
                streetId,
                wallTypeId,
                heatingId,
                metro,
                imagesArr,
                comfortsArr,
                infrastructuresArr,
                peopleTypesArr,
                multimediasArr,
                rulesArr,
                householdApplianceArr,
                flatFloor,
                allSquare,
                livingSquare,
                priceMonth,
                roomsNum,
                balconiesNum,
                short_description,
                main_description,
                pledge,
                bathroomTypeId
            ))
        } catch (e) {
            alert("e.response.data.message : handlerClick")
        }
    }

    const style3 = {
        display: 'grid',
        gridTemplateColumns: '3fr 3fr 3fr',
        gridGap: '20px',
        paddingTop: '20px',
    }

    const styleBtn = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Container>
            <div style={style3}>
                <DropDownList
                    title={t("create_flat.street")}
                    data={streets}
                    setData={setData}
                    type="street"
                />

                <DropDownList
                    title={t("create_flat.area")}
                    data={areas}
                    setData={setData}
                    type="area"
                />

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.house_num")}
                    placeholder={t("create_flat.house_num")}
                    type={"houseNum"}
                />
            </div>

            <div style={style3}>
                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.house_year")}
                    placeholder={t("create_flat.house_year")}
                    type={"houseYear"}
                />

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.num_of_floors")}
                    placeholder={t("create_flat.num_of_floors")}
                    type={"numOfFloors"}
                />

                <DropDownList
                    title={t("create_flat.heating")}
                    data={heatings}
                    setData={setData}
                    type="heating"
                />

            </div>

            <div style={{marginTop:'20px'}}>
                <DropDownList
                    title={t("create_flat.metro_station")}
                    data={metroStations}
                    setData={setData}
                    type="metro"
                />
            </div>


            <div style={style3}>
                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.flat_floor")}
                    placeholder={t("create_flat.flat_floor")}
                    type={"flatFloor"}
                />

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.flat_room")}
                    placeholder={t("create_flat.flat_room")}
                    type={"roomsNum"}
                />

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.balconies_num")}
                    placeholder={t("create_flat.balconies_num")}
                    type={"balconiesNum"}
                />
            </div>


            <div style={style3}>

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.all_square")}
                    placeholder={t("create_flat.all_square")}
                    type={"allSquare"}
                />

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.living")}
                    placeholder={t("create_flat.living")}
                    type={"livingSquare"}
                />

                <DropDownList
                    title={t("create_flat.bathroom_type")}
                    data={bathroomTypes}
                    setData={setData}
                    type="bathroomType"
                />

            </div>

            <div style={style3}>

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.price_month")}
                    placeholder={t("create_flat.price_month")}
                    type={"priceMonth"}
                />

                <AttributeForm
                    setFormData={setFormData}
                    title={t("create_flat.pledge")}
                    placeholder={t("create_flat.pledge")}
                    type={"pledge"}
                />

                <DropDownList
                    title={t("create_flat.wall_type")}
                    data={wallTypes}
                    setData={setData}
                    type="wallType"
                />

            </div>

            <LoadImageCard setImages={setImages}/>

            <TextAreaCard
                type="short_description"
                setTextArea={setTextArea}
            />

            <TextAreaCard
                type="main_description"
                setTextArea={setTextArea}
            />


            <CheckBoxCard
                type={"comfort"}
                elem={comforts}
                title={t("create_flat.comfort")}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"infrastructure"}
                elem={infrastructures}
                title={t("create_flat.infrastructure")}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"peopleType"}
                elem={peopleTypes}
                title={t("create_flat.people_type")}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"multimedia"}
                elem={multimedias}
                title={t("create_flat.multimedia")}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"rule"}
                elem={rules}
                title={t("create_flat.rules")}
                changeData={changeData}
            />

            <CheckBoxCard
                type={"householdAppliance"}
                elem={householdAppliances}
                title={t("create_flat.household")}
                changeData={changeData}
            />
            <div style={styleBtn}>
                <Button onClick={handlerClick}>{t("create_flat.btn")}</Button>
            </div>
        </Container>
    );
};

export default CreateFlatPage;