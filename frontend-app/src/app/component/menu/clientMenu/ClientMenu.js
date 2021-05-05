import React, {useState} from 'react';
import {Col, Container, Dropdown, Nav, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {CLIENT_LIKED_FLATS, CLIENT_QUICK_LOVE, OWNER_FLATS} from "../../../utils/consts";

// quick love
// favourite flats
// personal page


const ClientMenu = () => {
    const [mes, setMessage] = useState('режим');
    const {t} = useTranslation();
    return (
            <Row>
                <Col>
                    <Nav>
                        <Link to={CLIENT_LIKED_FLATS}>
                            {t("menu.client.liked")}
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to={CLIENT_QUICK_LOVE}>
                            {t("menu.client.quick_love")}
                        </Link>
                    </Nav>
                </Col>
            </Row>
    );
};

export default ClientMenu;