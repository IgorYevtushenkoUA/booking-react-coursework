import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {NavLink, useHistory} from "react-router-dom";
import {REGISTRATION_CLIENT_ROUTE} from "../../../utils/consts";
import {Button, Card, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {login} from "../../../store/additional/user/userActions";

const LoginPage = () => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('email@gmail.com');
    const [password, setPassword] = useState('password');
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [formValid, setFormValid] = useState(false);
    const history = useHistory();

    const dispatch = useDispatch();

    const loginAccount = async () => {
        console.log("click")
        try {

            dispatch(login(email, password));
            // data = await login(email, password);

        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const bluerHandler = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break;
            case 'password' :
                setPasswordDirty(true)
                break;
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let err = !re.test(String(e.target.value).toLowerCase())
            ? "Email incorrect"
            : "";
        setEmailError(err)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        let err = "";
        if (e.target.value.length < 8)
            err = "Email to short. Min length=8 | Your length is " + e.target.value.length;
        else if (e.target.value.length > 32)
            err = "Email to long. Max length=32 | Your length is " + e.target.value.length;
        setPasswordError(err);

    }

    useEffect(() => {
        if (emailError || passwordError)
            setFormValid(false);
        else
            setFormValid(true);

    }, [emailError, passwordError]);

    return (
        <div
            className="d-flex justify-content-center align-items-center login"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auth">{t("login.title")}</h2>
                <Form className="d-flx flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder={t("login.enter_email")}
                        value={email}
                        onChange={e => emailHandler(e)}
                        name='email'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder={t("login.enter_password")}
                        value={password}
                        onChange={e => passwordHandler(e)}
                        name='password'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}

                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            {t("login.account")}
                            <NavLink to={REGISTRATION_CLIENT_ROUTE}>
                                {t("login.register")}
                            </NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            disabled={!formValid}
                            onClick={loginAccount}>
                            {t("login.sign_in")}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;