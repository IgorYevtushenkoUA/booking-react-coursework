import React, {useState} from 'react';
import {Col, Container, Dropdown, Nav, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {BADOO_FLAT, CLIENT_LIKED_FLATS, CLIENT_QUICK_LOVE, OWNER_FLATS} from "../../../utils/consts";

const ClientMenu = () => {
    const {t} = useTranslation();

    return (
        <Row className="menu">
            <Nav>
                <Link to={CLIENT_LIKED_FLATS}>
                    <h4>{t("menu.client.liked")}</h4>
                </Link>
            </Nav>
            <Nav>
                <Link to={BADOO_FLAT}>
                    <h4>{t("menu.client.quick_love")}</h4>
                </Link>
            </Nav>
        </Row>
    );
};

export default ClientMenu;