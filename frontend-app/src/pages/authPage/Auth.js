import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import RegistrationPage from "./registrationPage/RegistrationPage";
import {registration} from "../../http/userApi";
const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        const response = await registration()
    }

    const login = async () => {
        const response = await login();
    }

    return (
        isLogin ? <LoginPage/> : <RegistrationPage/>
    );
};

export default Auth;