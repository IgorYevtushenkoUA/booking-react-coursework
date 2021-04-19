import React, {useContext, useEffect} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import FlatsList from "./FlatsList";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {fetchFlats} from "../../../http/flatsApi";
import MapBlock from "./mapBlock/MapBlock";
import "./RentFlats.css"

const RentFlats = observer(() => {

    const {flats} = useContext(Context);

    useEffect(() => {
        fetchFlats().then(data => flats.setFlats(data));
    }, [])

    return (
        <div className="mt-3 ml-3">
            <Row>
                <Col md={7}>
                    <FlatsList/>
                </Col>
                <Col md={5}>
                    <MapBlock/>
                </Col>
            </Row>
        </div>
    );
});

export default RentFlats;