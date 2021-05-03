import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_CLIENT_ROUTE, REGISTRATION_OWNER_ROUTE} from "../../../utils/consts";

const AuthMenu = (props) => {
    const {t} = useTranslation();

    let user = props.user;

    if (!user) {
        return (
            <Nav className="ml-auto">
                <Link to={REGISTRATION_OWNER_ROUTE}>
                    <Button variant={"outline-light"}
                    >{t("navbar.owner")}</Button>
                </Link>
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
                            // todo delete data about user SIGN_OUT
                        }}
                        variant={"outline-light"}
                        className={"ml-1"}>{t("navbar.sign_out")}</Button>
                </Link>
            </Nav>
        );
    }
};

export default AuthMenu;