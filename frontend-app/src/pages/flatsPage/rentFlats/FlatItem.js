import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {RENT_FLATS_ROUTE} from "../../../utils/consts";
import {useHistory} from 'react-router-dom'

const FlatItem = ({flat}) => {
    const history = useHistory();

    const click = async () => {
        history.push(RENT_FLATS_ROUTE + '/' + flat.flat_id)
    }

    return (
            <Col
                md={12}
                onClick={click}
                className="mt-3" >
                <Card>
                    <Image  src='https://www.apartments.com/images/default-source/2020-blogimages/apartments493227be-286f-4141-aceb-d874f43b13cd.tmb-featuredim.jpg?sfvrsn=42e4b1d3_1'/>
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