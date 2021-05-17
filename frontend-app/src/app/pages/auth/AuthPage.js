import React from 'react';
import RegistrationPage from "./registration/RegistrationPage";
import LoginPage from "./login/LoginPage";
import {LOGIN_ROUTE} from "../../utils/consts";
import {useLocation} from "react-router-dom";

const AuthPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        isLogin ? <LoginPage/> : <RegistrationPage/>
    );
};

export default AuthPage;