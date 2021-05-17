import React from 'react';
import {Button, Card, Col, Container, Image} from "react-bootstrap";
import {RENT_FLATS_ROUTE} from "../../utils/consts";
import {usePreload, usePreloadPRO, usePreloadPRO3} from "../../hooks/usePreload";
import {loadFlat} from "../../store/additional/user/userActions";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {
    LOAD_FLAT_DATA_BY_ID,
    LOAD_FLAT_HAS_COMFORT,
    LOAD_FLAT_HAS_HOUSEHOLD_APPLIANCE,
    LOAD_FLAT_HAS_IMAGE, LOAD_FLAT_HAS_IMAGE_URL,
    LOAD_FLAT_HAS_MULTIMEDIA,
    LOAD_FLAT_HAS_PEOPLE_TYPE,
    LOAD_FLAT_HAS_RULE,
    LOAD_HOUSE,
    loadData,
    loadFlatHasComfort, loadFlatHasImageUrl
} from "../../store/additional/flat/flatActions";
import firebase from "firebase";
import ImageList from "./imageList/ImageList";
import InfoBlock from "./infoBlock/InfoBlock";

const FlatPage = () => {

    const id = useParams().id;
    const history = useHistory();

    usePreloadPRO3(loadFlatHasImageUrl, `api/flats/flat_has_image/${id}`, LOAD_FLAT_HAS_IMAGE_URL, id);
    usePreloadPRO(loadData, `api/flats/flat_has_comfort/${id}`, LOAD_FLAT_HAS_COMFORT);
    usePreloadPRO(loadData, `api/flats/flat_has_household_appliance/${id}`, LOAD_FLAT_HAS_HOUSEHOLD_APPLIANCE);
    usePreloadPRO(loadData, `api/flats/flat_has_multimedia/${id}`, LOAD_FLAT_HAS_MULTIMEDIA);
    usePreloadPRO(loadData, `api/flats/flat_has_people_type/${id}`, LOAD_FLAT_HAS_PEOPLE_TYPE);
    usePreloadPRO(loadData, `api/flats/flat_has_rule/${id}`, LOAD_FLAT_HAS_RULE);
    usePreloadPRO(loadData, `api/flats/flat_has_image/${id}`, LOAD_FLAT_HAS_IMAGE);
    usePreloadPRO(loadData, `api/flats/flat_data/${id}`, LOAD_FLAT_DATA_BY_ID);

    let flatHasComfort = useSelector(store => store.flat.flatHasComfort),
        flatHasHouseholdAppliance = useSelector(store => store.flat.flatHasHouseholdAppliance),
        flatHasMultimedia = useSelector(store => store.flat.flatHasMultimedia),
        flatHasPeopleType = useSelector(store => store.flat.flatHasPeopleType),
        flatHasRule = useSelector(store => store.flat.flatHasRule),
        flatHasImage = useSelector(store => store.flat.flatHasImage),
        flatData = useSelector(store => store.flat.flatDataById),
        imagesURL = useSelector(store => store.flat.flatHasImageURL);

    const greenLine = {
        borderRadius: '15px',
        backgroundColor: '#38CC5C',
        padding: '5px'
    }
    const redLine = {
        borderRadius: '15px',
        backgroundColor: '#F03E33',
        padding: '5px'
    }
    const blueLine = {
        borderRadius: '15px',
        backgroundColor: '#33BDF0',
        padding: '5px'
    }

    let role = localStorage.getItem("roleId");

    if (flatData == null) {

        return (
            <div> Loading</div>
        )
    } else {

        return (
            <Container style={{height: window.innerHeight - 54}}
                       className="flat_page">
                <Card>
                    <div className="d-flex flex-row mt-4">
                        <Col md={6}>
                            <div className="image_block">
                                <ImageList images={imagesURL}/>
                            </div>
                        </Col>

                        <Col>
                            <div>{flatData[0].short_description}</div>
                            <div>{flatData[0].street_name} {flatData[0].house_num}</div>
                            <div>{flatData[0].region_name} {flatData[0].area_name} {flatData[0].city_name}</div>
                            <div>Кімнати {flatData[0].rooms_num},
                                Поверх {flatData[0].flat_floor} із {flatData[0].floors_num}</div>
                            <div>Ціна {flatData[0].price_month} грн/міс</div>
                            <div>Площа {flatData[0].square_all}/{flatData[0].square_living} м²</div>
                            <div>Кімнати {flatData[0].rooms_num}</div>
                            <div>Кількість балконів {flatData[0].balconies_num}</div>
                            <div>Тип Ванної кімнати {flatData[0].bathroom_type_name}</div>
                            <div>Поверхність будинку {flatData[0].floors_num}</div>
                            <div>Тип опаленння {flatData[0].heating_name}</div>
                            <div>Вік будинку {flatData[0].house_year}</div>
                            <div>
                                <label style={
                                    flatData[0].line_color === 'зелена'
                                        ? greenLine
                                        : flatData[0].line_color === 'червона'
                                        ? redLine : blueLine}>
                                    <strong>M</strong> {flatData[0].metro_station_name}
                                </label>
                            </div>
                        </Col>
                    </div>

                    <InfoBlock elem={flatHasComfort} name={"Comfort: "}/>
                    <InfoBlock elem={flatHasHouseholdAppliance} name={"HouseHoldAppliance :"}/>
                    <InfoBlock elem={flatHasMultimedia} name={"Multimedia :"}/>
                    <InfoBlock elem={flatHasPeopleType} name={"PeopleType :"}/>
                    <InfoBlock elem={flatHasRule} name={"Rule :"}/>

                    {(role == 1 || role == 2) &&
                    <Button onClick={() => {
                        console.log("delete by ID")
                        // deleteFlatByPk(flat.flat_id);
                        history.push(RENT_FLATS_ROUTE);
                    }}>delete
                    </Button>}

                </Card>
            </Container>
        );
    }
};

export default FlatPage;