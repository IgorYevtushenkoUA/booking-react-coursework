import React from 'react';
import {Container, Nav} from "react-bootstrap";
import {useTranslation} from "react-i18next";

// quick love
// favourite flats
// personal page


const ClientMenu = () => {
    const {t} = useTranslation();
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/">{t("navbar.quick_love")}</Nav.Link>
            <Nav.Link href="/about-us">{t("navbar.liked")}</Nav.Link>
            <Nav.Link href="/create">{t("navbar.person")}</Nav.Link>
        </Nav>
    );
};

export default ClientMenu;