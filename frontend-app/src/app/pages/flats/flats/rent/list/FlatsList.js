import React from 'react';
import {Col, Row} from "react-bootstrap";
import FlatItem from "./item/FlatItem";

const FlatsList = (props) => {

    // const flats = useSelector(store => store.flat.allFlats);
    const flats = props.flats;

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