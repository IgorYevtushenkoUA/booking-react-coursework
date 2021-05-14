import React from 'react';
import {usePreloadPRO, usePreloadPRO3} from "../../../../../hooks/usePreload";
import {
    LOAD_FLAT_DATA_BY_ID,
    LOAD_FLAT_HAS_IMAGE_URL,
    loadData,
    loadFlatHasImageUrl
} from "../../../../../store/additional/flat/flatActions";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {RENT_FLATS_ROUTE} from "../../../../../utils/consts";
import {Card, Col, Row} from "react-bootstrap";

const OwnerFlatItem = (props) => {

    debugger
    const history = useHistory();
    let imagesURL = useSelector(store => store.flat.flatHasImageURL),
        flat = props.flat

    const click = () => {
        history.push(RENT_FLATS_ROUTE + '/' + flat.flat_id)
    }

    debugger
    const updated = flat.updatedAt.toString().replace("T", " ").replace(".000Z", "");
    const created = flat.createdAt.toString().replace("T", " ").replace(".000Z", "");


    return (
        <Row style={{display: 'flex', justifyContent: 'center'}}>
            <Col md={8}>
                <div className="mt-3">
                    <Card bg="light" style={{maxWeight: '60%'}}>
                        <div onClick={click}>
                            <Row>
                                <Col>
                                    <div className="imageBlock">
                                        <Card.Img
                                            // src='https://www.apartments.com/images/default-source/2020-blogimages/apartments493227be-286f-4141-aceb-d874f43b13cd.tmb-featuredim.jpg?sfvrsn=42e4b1d3_1'/>
                                            src={props.imageURL}/>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="infoBlock">
                                        <div>

                                            <div>
                                                {flat.price_month} грн
                                            </div>

                                            <div>
                                                <div>{flat.street_name} {flat.house_num}</div>
                                                <div>{flat.area_name} район, {flat.region_name} область,
                                                    місто {flat.city_name}</div>
                                            </div>
                                            <div style={{display: 'grid', gridTemplateColumns: '4fr 6fr'}}>
                                                <div>
                                                    <div>Кімнат :{flat.rooms_num}</div>
                                                    <div>{flat.square_all} / {flat.square_living} м²</div>
                                                    <div> Повер {flat.flat_floor} із {flat.house_floors}</div>
                                                </div>
                                                <div>
                                                    <div>Опалення : {flat.heating_name}</div>
                                                    <div>Будинок {flat.house_year} року</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>{flat.short_description}</div>
                                        <div>
                                            <div>Оновлено : {updated}</div>
                                            <div>Створено : {created}</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
    );
};

export default OwnerFlatItem;