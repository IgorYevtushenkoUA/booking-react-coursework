import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../../../utils/consts";

const AuthMenu = () => {
    const {t} = useTranslation();
    const user = localStorage.getItem('user') === 1
        ? 1
        : JSON.parse(localStorage.getItem('user'));

    if (user === 1) {
        return (
            <Nav className="ml-auto">
                <Link to={LOGIN_ROUTE}>
                    <Button variant={"outline-light"}
                    >{t("navbar.sign_in")}</Button>
                </Link>
            </Nav>
        );
    } else {
        return (
            <Nav className="ml-auto">
                <Link to={MAIN_ROUTE}>
                    <Button
                        onClick={() => {
                            localStorage.setItem('role', 0);
                            localStorage.setItem('user', 1);
                            window.location.reload();
                        }}
                        variant={"outline-light"}
                        className={"ml-1"}>{t("navbar.sign_out")}</Button>
                </Link>
            </Nav>
        );
    }
};

export default AuthMenu;