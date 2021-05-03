import React, {useState} from 'react';
import {Col, Dropdown, DropdownButton, Nav, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

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
                    <Nav.Link href="/create">${t("menu.owner.create")}</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/owner/flats">${t("menu.owner.flats")}</Nav.Link>
                </Nav>
            </Col>
        </Row>
    );
};

export default OwnerMenu;