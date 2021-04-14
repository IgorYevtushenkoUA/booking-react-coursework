import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import VariantBlock from "./variantBlock/VariantBlock";

const Main = () => {
    return (
        <Container>
            <div className="variantBlock d-flex">
                <Row md={12} lg={12}>
                    <VariantBlock title="Оренда Квартир" link="/rent/flats"/>
                    <VariantBlock title="Продаж Квартир" link="/sell/flats"/>
                </Row>

            </div>
            <div className="infoBlock">

            </div>

        </Container>
    );
};

export default Main;