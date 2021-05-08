import React from 'react';
import {useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import FlatItem from "./item/FlatItem";

const FlatsList = () => {

    const flats = useSelector(store => store.user.allFlats);

    console.log("flats")
    console.log(flats)

    return (
        <Row className="d-flex flex-column">
            <Col>
                {flats.map(flat =>
                    <FlatItem
                        key={flat.id}
                        flat={flat}/>
                )}
            </Col>
        </Row>
    );
};

export default FlatsList;