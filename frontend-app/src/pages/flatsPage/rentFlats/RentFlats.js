import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../../../components/typebar/TypeBar";
import FlatsList from "./FlatsList";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {fetchFlats} from "../../../http/flatsApi";

const RentFlats = observer(() => {
    const {flats} = useContext(Context);

    useEffect(() => {
        fetchFlats().then(data => flats.setFlats(data))
    }, [])

    console.log(flats.getFlats);

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <FlatsList />

                </Col>
            </Row>

        </Container>
    );
});

export default RentFlats;