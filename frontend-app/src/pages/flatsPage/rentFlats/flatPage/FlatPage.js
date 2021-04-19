import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import "./FlatPage.css"
import {observer} from "mobx-react-lite";
import {useParams} from "react-router";
import {fetchFlatById} from "../../../../http/flatApi";
import {RENT_FLATS_ROUTE} from "../../../../utils/consts";
import {useHistory} from "react-router-dom";

const FlatPage = () => {


    const history = useHistory();
    const [flat, setFlat] = useState({info: []});
    const params = useParams();
    const role = localStorage.getItem('role');

    useEffect(() => {
        fetchFlatById(params.id).then(f => setFlat(f));
    }, []);


    return (
        <Container style={{height: window.innerHeight - 54}}>
            <Card>
                <div className="d-flex flex-row">
                    <Col md={6}>

                        <div className="imagesBlock">
                            <Image style={{maxWidth: '100%'}}
                                   src='https://www.apartments.com/images/default-source/2020-blogimages/apartments493227be-286f-4141-aceb-d874f43b13cd.tmb-featuredim.jpg?sfvrsn=42e4b1d3_1'/>
                        </div>
                    </Col>
                    <div className="infoBlock">


                        <dl>
                            <dt>Price :</dt>
                            <dd>{flat.price_month}</dd>

                            <dt>Floor :</dt>
                            <dd>{flat.flat_floor}</dd>

                            <dt>Square :</dt>
                            <dd>{flat.square_all} / {flat.square_living}</dd>

                            <dt>Rooms :</dt>
                            <dd>{flat.rooms_num}</dd>

                            <dt>Balconies</dt>
                            <dd>{flat.balconies_num}</dd>

                            {/*<dt></dt><dd>{}</dd>*/}

                        </dl>

                        <dt>Description</dt>
                        <dd>{flat.main_description}</dd>

                        <div className="priceBlock">

                        </div>
                        <div className="streetBlock">
                        </div>
                        <div className="houseBlock">

                        </div>
                        <div className="flatBlock">

                        </div>
                    </div>
                </div>
                {role == 1 &&
                <Button onClick={() => {
                    console.log("delete by ID")
                    // deleteFlatByPk(flat.flat_id);
                    history.push(RENT_FLATS_ROUTE);
                }}>delete
                </Button>}
            </Card>
        </Container>
    );
};

export default FlatPage;