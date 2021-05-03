import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {useSelector} from "react-redux";
import AuthMenu from "../menu/authMenu/AuthMenu";
import UserMenu from "../menu/UserMenu";

const NavBar = () => {

    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('lang', language);
    };

    let user = useSelector(store => store.user);

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                <NavLink style={{color: 'white'}} href="/">Flatty</NavLink>
                <Nav className="mr-auto">
                    <Nav.Link href="/about-us">{t("navbar.about")}</Nav.Link>
                </Nav>

                <Button className="mr-2" variant={"outline-light"} onClick={() => changeLanguage("en")}>EN</Button>
                <Button variant={"outline-light"} onClick={() => changeLanguage("ua")}>UA</Button>

                <UserMenu role={user.role}/>
                <AuthMenu/>
            </Container>
        </Navbar>
    );
};

export default NavBar;