import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {Button, Card, Row} from "react-bootstrap";
import FlatItem from "./FlatItem";
import {observer} from "mobx-react-lite";
import {login} from "../../../http/userApi";
import {deleteFlatByPk} from "../../../http/flatsApi";

const FlatsList = observer(() => {

    const {flats} = useContext(Context);
    const {user} = useContext(Context);

    return (
        <Row className="d-flex flex-column ">
            {flats.flats.map(flat =>
                <FlatItem
                    key={flat.flat_id}
                    flat={flat}/>
            )}
        </Row>
    );
});

export default FlatsList;