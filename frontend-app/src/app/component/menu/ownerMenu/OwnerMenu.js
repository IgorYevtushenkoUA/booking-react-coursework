import React, {useState} from 'react';
import {Col, Dropdown, DropdownButton, Nav, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {ABOUT_US_ROUTE, OWNER_ADD_FLAT, OWNER_FLATS} from "../../../utils/consts";

// всі квартири
// Додати квартиру
// Сторінка Власника


const OwnerMenu = () => {

    const [mes, setMessage] = useState('режим');
    const {t} = useTranslation();

    return (
        <Row>
            <Col>
                <Nav>
                    <Link to={OWNER_ADD_FLAT}>
                        {t("menu.owner.create")}
                    </Link>
                </Nav>
                <Nav>
                    <Link to={OWNER_FLATS}>
                        {t("menu.owner.flats")}
                    </Link>
                </Nav>
            </Col>
        </Row>
    );
};

export default OwnerMenu;