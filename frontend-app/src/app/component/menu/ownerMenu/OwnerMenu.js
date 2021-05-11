import React, {useState} from 'react';
import {Nav, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {OWNER_ADD_FLAT, OWNER_FLATS} from "../../../utils/consts";

const OwnerMenu = () => {

    const {t} = useTranslation();

    return (
        <Row className="menu">
            <Nav>
                <Link to={OWNER_ADD_FLAT}>
                    <h4>{t("menu.owner.create")}</h4>
                </Link>
            </Nav>
            <Nav>
                <Link to={OWNER_FLATS}>
                    <h4>{t("menu.owner.flats")}</h4>
                </Link>
            </Nav>
        </Row>
    );
};

export default OwnerMenu;