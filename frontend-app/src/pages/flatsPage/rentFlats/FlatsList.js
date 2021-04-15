import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {Row} from "react-bootstrap";
import FlatItem from "./FlatItem";
import {observer} from "mobx-react-lite";

const FlatsList = observer(() => {
    const {flats} = useContext(Context);

    console.log(flats)

    return (
        <Row className="d-flex">
            {flats.getFlats.map(flat =>
                <FlatItem
                    key={flat.flat_id}
                    flat={flat} />
            )}
        </Row>
    );
});

export default FlatsList;