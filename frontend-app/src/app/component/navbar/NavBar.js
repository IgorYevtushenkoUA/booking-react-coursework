import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import AuthMenu from "../menu/authMenu/AuthMenu";
import UserMenu from "../menu/UserMenu";
import {Link} from "react-router-dom";
import {ABOUT_US_ROUTE, MAIN_ROUTE, OWNER_ADD_FLAT, OWNER_FLATS} from "../../utils/consts";
import "../../style.css"


const NavBar = () => {

    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('lang', language);
    };

    let account = useSelector(store => store.user.userCredentials);

    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Container>
                <div className="nav-left">
                    <Nav>
                        <Link to={MAIN_ROUTE}>
                            <h3 className="text-white">Flatty</h3>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to={ABOUT_US_ROUTE}>
                            <h3 className="text-white">{t("navbar.about")}</h3>
                        </Link>
                    </Nav>
                </div>

                <div className="nav-center">
                    <UserMenu account={account} />
                </div>

                <div className="nav-right">
                    <button className="btn" onClick={() => changeLanguage("en")}>EN</button>
                    <button className="btn" onClick={() => changeLanguage("ua")}>UA</button>
                    <AuthMenu account={account}/>
                </div>


            </Container>
        </Navbar>
    );
};

export default NavBar;