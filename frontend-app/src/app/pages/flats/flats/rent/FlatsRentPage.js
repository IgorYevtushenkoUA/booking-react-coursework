import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePreload} from "../../../../hooks/usePreload";
import {loadAllFlats} from "../../../../store/additional/user/userActions";
import {Col, Row} from "react-bootstrap";
import Filter from "./filter/Filter";
import FlatsList from "./list/FlatsList";
import FlatGeolocation from "./geolocation/FlatGeolocation";

const FlatsRentPage = () => {

    const dispatch = useDispatch();
    const flats = useSelector(store => store.user.allFlats);

    usePreload(loadAllFlats);


    if (!flats) {
        return (
            <div>
                RentFlatsPage
            </div>
        );
    } else {
        return (
            <div className="mt-3 ml-3">
                <Filter/>

                <Row>
                    <Col md={7}>
                        <FlatsList/>
                    </Col>
                    <Col md={5}>
                        <FlatGeolocation/>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default FlatsRentPage;