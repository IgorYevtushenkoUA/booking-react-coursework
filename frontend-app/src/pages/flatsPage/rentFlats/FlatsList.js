import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {Card, Row} from "react-bootstrap";
import FlatItem from "./FlatItem";
import {observer} from "mobx-react-lite";
import {fetchFlats} from "../../../http/flatsApi";

const FlatsList = observer((props) => {
    // const flats = fetchFlats();
    // console.log(flats)
    let flats = props.flats;
    debugger
    return (
        <Row className="d-flex flex-column ">
            {flats.map(flat =>
                <FlatItem
                    key={flat.flat_id}
                    flat={flat}/>
            )}
        </Row>
    );
});

export default FlatsList;