import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import AuthMenu from "../menu/authMenu/AuthMenu";
import UserMenu from "../menu/UserMenu";
import {Link} from "react-router-dom";
import {ABOUT_US_ROUTE, MAIN_ROUTE} from "../../utils/consts";

const NavBar = () => {

    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('lang', language);
    };

    let account = useSelector(store => store.user.userCredentials);

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>

                <Nav>
                    <Link to={MAIN_ROUTE}>
                        Flatty
                    </Link>
                </Nav>
                <Nav>
                    <Link to={ABOUT_US_ROUTE}>
                        {t("navbar.about")}
                    </Link>
                </Nav>

                <Button className="mr-2" variant={"outline-light"} onClick={() => changeLanguage("en")}>EN</Button>
                <Button variant={"outline-light"} onClick={() => changeLanguage("ua")}>UA</Button>

                <UserMenu account={account}/>
                <AuthMenu account={account}/>
            </Container>
        </Navbar>
    );
};

export default NavBar;