import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {Button, Card, Col, Row} from "react-bootstrap";
import FlatItem from "./FlatItem";
import {observer} from "mobx-react-lite";
import {login} from "../../../http/userApi";
import {deleteFlatByPk} from "../../../http/flatsApi";

const FlatsList = observer(() => {

    const {flats} = useContext(Context);
    const {user} = useContext(Context);

    return (
        <Row className="d-flex flex-column">
            <Col>
                {flats.flats.map(flat =>
                    <FlatItem
                        key={flat.flat_id}
                        flat={flat}/>
                )}
            </Col>
        </Row>
    );
});

export default FlatsList;