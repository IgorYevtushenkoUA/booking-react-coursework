import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import RegistrationPage from "./registrationPage/RegistrationPage";

const Auth = () => {

    const location = useLocation();

    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        isLogin ? <LoginPage/> : <RegistrationPage/>
    );
};

export default Auth;