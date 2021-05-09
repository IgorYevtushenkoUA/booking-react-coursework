import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePreload, usePreloadPRO} from "../../../../hooks/usePreload";
import {Col, Row} from "react-bootstrap";
import Filter from "./filter/Filter";
import FlatsList from "./list/FlatsList";
import FlatGeolocation from "./geolocation/FlatGeolocation";
import {
    LOAD_ALL_FLATS,
    LOAD_FLAT_DATA,
    loadAllFlats,
    loadData,
    loadFlatData
} from "../../../../store/additional/flat/flatActions";

const FlatsRentPage = () => {

    // usePreload(loadAllFlats);
    // usePreloadPRO(loadData, "api/flats", LOAD_ALL_FLATS);
    // const flats = useSelector(store => store.flat.allFlats);

    // usePreloadPRO(loadData, "api/flats/flat_data", LOAD_FLAT_DATA);
    usePreload(loadFlatData);
    const flats = useSelector(store => store.flat.flatData);
    console.log(flats)

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