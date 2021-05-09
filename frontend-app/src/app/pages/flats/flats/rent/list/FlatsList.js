import React from 'react';
import {Col, Row} from "react-bootstrap";
import FlatItem from "./item/FlatItem";
import {usePreload, usePreloadPRO} from "../../../../../hooks/usePreload";
import {LOAD_HOUSE, loadData} from "../../../../../store/additional/flat/flatActions";

const FlatsList = (props) => {

    // const flats = useSelector(store => store.flat.allFlats);
    const flats = props.flats;

    return (
        <Row className="d-flex flex-column">
            <Col>
                {flats.map(flat =>
                    <FlatItem
                        key={flat.flat_id}
                        flat={flat}/>
                )}
            </Col>
        </Row>
    );
};

export default FlatsList;