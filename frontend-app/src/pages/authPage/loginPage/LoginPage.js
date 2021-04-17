import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {MAIN_ROUTE, OWNER_PERSONAL_PAGE, REGISTRATION_ROUTE} from "../../../utils/consts";
import {login} from "../../../http/userApi";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import Counter from "../../../store/Counter.js"
// todo -> якось такий формат змінити, бо концептуально він неправильний
import {addUser} from "../../../redux/state";


const LoginPage = observer(() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [formValid, setFormValid] = useState(false);
    const history = useHistory();


    const click = async () => {
        try {
            let data;
            data = await login(email, password);
            console.log(data)
            console.log(data[0])
            addUser(data[0]);
            Counter.increase();
            history.push(OWNER_PERSONAL_PAGE)
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
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auth">Authorization</h2>
                <Form className="d-flx flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={e => emailHandler(e)}
                        name='email'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => passwordHandler(e)}
                        name='password'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}

                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            Немає акаунту? <NavLink to={REGISTRATION_ROUTE}>Зареєструватися</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            disabled={!formValid}
                            onClick={click}>
                            Ввійти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default LoginPage;