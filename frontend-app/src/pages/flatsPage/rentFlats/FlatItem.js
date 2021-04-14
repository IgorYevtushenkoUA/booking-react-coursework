import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {RENT_FLATS_ROUTE} from "../../../utils/consts";
import {useHistory} from 'react-router-dom'

const FlatItem = ({flat}) => {
    const history = useHistory();
    return (
        <Col md={3} onClick={() => history.push(RENT_FLATS_ROUTE + '/' + flat.flat_id)}>
            <Card>
                <Image alt="flat-image"/>
                <div>
                    <div>
                        all info here
                    </div>
                </div>
                <label>{flat.short_description}</label>
            </Card>

        </Col>
    );
};

export default FlatItem;