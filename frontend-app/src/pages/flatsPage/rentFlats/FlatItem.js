import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {RENT_FLATS_ROUTE} from "../../../utils/consts";
import {useHistory} from 'react-router-dom'
import {deleteFlatByPk} from "../../../http/flatsApi";

const FlatItem = ({flat}) => {
    const history = useHistory();

    const click = async () => {
        history.push(RENT_FLATS_ROUTE + '/' + flat.flat_id)
    }

    return (
        <div className="mt-3">
            <Card>
                <div onClick={click} md={12}>
                    <Image
                        src='https://www.apartments.com/images/default-source/2020-blogimages/apartments493227be-286f-4141-aceb-d874f43b13cd.tmb-featuredim.jpg?sfvrsn=42e4b1d3_1'/>
                    <div>
                        <div>
                            all info here
                        </div>
                    </div>
                    <label>{flat.short_description}</label>
                </div>

                <button onClick={() => {
                    console.log("delete by ID")
                    // deleteFlatByPk(flat.flat_id);
                    history.push(RENT_FLATS_ROUTE);
                }}>delete
                </button>
            </Card>

        </div>
    );
};

export default FlatItem;