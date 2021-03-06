import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {RENT_FLATS_ROUTE} from "../../../../../../utils/consts";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    LOAD_FLAT_HAS_IMAGE_URL,
    LOAD_HOUSE, LOAD_HOUSE_DATA, loadAreaById, loadCityById,
    loadData,
    loadFlat, loadFlatHasImageUrl,
    loadHouseById,
    loadStreetById
} from "../../../../../../store/additional/flat/flatActions";
import {usePreloadPRO, usePreloadPRO3} from "../../../../../../hooks/usePreload";

const FlatItem = ({flat, imageURL}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const click = async () => {
        dispatch(loadFlat(flat.flat_id));
        history.push(RENT_FLATS_ROUTE + '/' + flat.flat_id)
    }

    const updated = flat.updatedAt.toString().replace("T", " ").replace(".000Z", "");
    const created = flat.createdAt.toString().replace("T", " ").replace(".000Z", "");

    usePreloadPRO3(loadFlatHasImageUrl, `api/flats/flat_has_image/${flat.flat_id}`, LOAD_FLAT_HAS_IMAGE_URL, flat.flat_id);
    let imagesURL = useSelector(store => store.flat.flatHasImageURL);


        return (
            <div className="mt-3">
                <Card bg="light">
                    <div onClick={click}>
                        <Row>
                            <Col>
                                <div className="imageBlock">
                                    <Card.Img
                                        // src='https://www.apartments.com/images/default-source/2020-blogimages/apartments493227be-286f-4141-aceb-d874f43b13cd.tmb-featuredim.jpg?sfvrsn=42e4b1d3_1'/>
                                        src={imageURL}/>
                                </div>
                            </Col>
                            <Col>
                                <div className="infoBlock">
                                    <div>

                                        <div>
                                            {flat.price_month} ??????
                                        </div>

                                        <div>
                                            <div>{flat.street_name} {flat.house_num}</div>
                                            <div>{flat.area_name} ??????????, {flat.region_name} ??????????????,
                                                ?????????? {flat.city_name}</div>
                                        </div>
                                        <div style={{display: 'grid', gridTemplateColumns: '4fr 6fr'}}>
                                            <div>
                                                <div>???????????? :{flat.rooms_num}</div>
                                                <div>{flat.square_all} / {flat.square_living} ????</div>
                                                <div> ?????????? {flat.flat_floor} ???? {flat.house_floors}</div>
                                            </div>
                                            <div>
                                                <div>???????????????? : {flat.heating_name}</div>
                                                <div>?????????????? {flat.house_year} ????????</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>{flat.short_description}</div>
                                    <div>
                                        <div>???????????????? : {updated}</div>
                                        <div>???????????????? : {created}</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>
        );

};

export default FlatItem;