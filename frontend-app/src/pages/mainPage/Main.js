import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import VariantBlock from "./variantBlock/VariantBlock";
import {RENT_FLATS_ROUTE, SELL_FLATS_ROUTE} from "../../utils/consts";

const Main = () => {
    return (
        <Container>
            <div className="variantBlock d-flex">
                <Row md={12} lg={12}>
                    <VariantBlock title="Оренда Квартир" link={RENT_FLATS_ROUTE}/>
                    <VariantBlock title="Продаж Квартир" link={SELL_FLATS_ROUTE}/>
                </Row>

            </div>
            <div className="infoBlock">

            </div>

        </Container>
    );
};

export default Main;