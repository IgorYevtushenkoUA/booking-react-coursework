import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";
import {useTranslation} from "react-i18next";
import AuthMenu from "../menu/authMenu/AuthMenu";
import UserMenu from "../menu/UserMenu";

// observer -> для відслудковування змін у реальному  часі
const NavBar = observer((props) => {

    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('lang', language);
    };

    // залежно від коирстувачів, різний Navbar
    let role = localStorage.getItem('role');

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} href="/">Flatty</NavLink>
                <Nav className="mr-auto">
                    <Nav.Link href="/">{t("navbar.main")}</Nav.Link>
                    <Nav.Link href="/about-us">{t("navbar.about")}</Nav.Link>
                    <Nav.Link href="/create">{t("navbar.create")}</Nav.Link>
                </Nav>

                <Button className="mr-2" variant={"outline-light"} onClick={() => changeLanguage("en")}>EN</Button>
                <Button variant={"outline-light"} onClick={() => changeLanguage("ua")}>UA</Button>

                <UserMenu role={role}/>
                <AuthMenu/>

            </Container>
        </Navbar>
    );
});

export default NavBar;