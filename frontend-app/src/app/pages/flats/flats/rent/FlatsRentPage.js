import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePreload} from "../../../../hooks/usePreload";
import {Col, Row} from "react-bootstrap";
import Filter from "./filter/Filter";
import FlatsList from "./list/FlatsList";
import FlatGeolocation from "./geolocation/FlatGeolocation";
import {loadAllFlats} from "../../../../store/additional/flat/flatActions";

const FlatsRentPage = () => {

    usePreload(loadAllFlats);

    const dispatch = useDispatch();

    const flats = useSelector(store => store.flat.allFlats);



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
                        <FlatsList flats={flats}/>
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