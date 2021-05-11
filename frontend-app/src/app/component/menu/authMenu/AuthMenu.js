import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Nav} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_CLIENT_ROUTE, REGISTRATION_OWNER_ROUTE} from "../../../utils/consts";

const AuthMenu = (props) => {
    const {t} = useTranslation();

    let account = props.account;
    const role = localStorage.getItem("role");

    const history = useHistory();

    const signOut = () => {
        localStorage.setItem("role", -1);
        history.push(MAIN_ROUTE);
        window.location.reload();
    }

    if (role == -1) {
        return (
            <Nav className="ml-auto sign_in">
                <Link to={REGISTRATION_OWNER_ROUTE}>
                    <button className="btn"
                    >{t("navbar.owner")}</button>
                </Link>
                <Link to={LOGIN_ROUTE}>
                    <button className="btn"
                    >{t("navbar.sign_in")}</button>
                </Link>
            </Nav>
        );
    } else {
        return (
            <Nav className="ml-auto sign_out">
                <Link to={MAIN_ROUTE}>
                    <button className="btn"
                        onClick={signOut}>{t("navbar.sign_out")}</button>
                </Link>
            </Nav>
        );
    }
};

export default AuthMenu;