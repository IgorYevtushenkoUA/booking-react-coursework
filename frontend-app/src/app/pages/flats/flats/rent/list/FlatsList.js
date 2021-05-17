import React from 'react';
import {Col, Row} from "react-bootstrap";
import FlatItem from "./item/FlatItem";
import {usePreload, usePreloadPRO, usePreloadPRO3} from "../../../../../hooks/usePreload";
import {
    LOAD_FLAT_HAS_IMAGE_URL,
    LOAD_HOUSE,
    loadData,
    loadFlatHasImageUrl
} from "../../../../../store/additional/flat/flatActions";

const FlatsList = (props) => {

    const flats = props.flats;
    let counter = 0;

    return (
        <Row className="d-flex flex-column">
            <Col>
                {flats.map(flat =>
                    <FlatItem
                        key={flat.flat_id}
                        flat={flat}
                        imageURL={props.imageURL[counter++].url}/>
                )}
            </Col>
        </Row>
    );
};

export default FlatsList;