import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../../utils/consts";

const RegistrationPage = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [nameDirty, setNameDirty] = useState('')
    const [surnameDirty, setSurnameDirty] = useState('')
    const [fatherNameDirty, setFatherNameDirty] = useState('')
    const [emailDirty, setEmailDirty] = useState('')
    const [phoneNumberDirty, setPhoneNumberDirty] = useState('')
    const [passwordDirty, setPasswordDirty] = useState('')
    const [confirmedPasswordDirty, setConfirmedPasswordDirty] = useState('');
    const [nameError, setNameError] = useState('Name can not be empty')
    const [surnameError, setSurnameError] = useState('Surname can not be empty')
    const [fatherNameError, setFatherNameError] = useState('FatherName can not be empty')
    const [emailError, setEmailError] = useState('Email can not be empty')
    const [phoneNumberError, setPhoneNumberError] = useState('Phone number can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [confirmedPasswordError, setConfirmedPasswordError] = useState('Confirmed Password can not be empty')
    const [formValid, setFormValid] = useState(false);

    const history = useHistory();

    const bluerHandler = (e) => {
        switch (e.target.name) {
            case 'name' :
                setNameDirty(true)
                break;
            case 'surname' :
                setSurnameDirty(true)
                break;
            case 'fatherName' :
                setFatherNameDirty(true)
                break;
            case 'email' :
                setEmailDirty(true)
                break;
            case 'phoneNumber' :
                setPhoneNumberDirty(true)
                break;
            case 'password' :
                setPasswordDirty(true)
                break;
            case 'confirmedPassword' :
                setConfirmedPasswordDirty(true)
                break;
        }
    }

    const nameHandler = (e, name) => {

        let err = e.target.value.length < 2
            ? "To short"
            : "";
        if (name === 'name') {
            setName(e.target.value);
            setNameError(err);
        } else if (name === 'surname') {
            setSurname(e.target.value);
            setSurnameError(err);
        } else {
            setFatherName(e.target.value);
            setFatherNameError(err);
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

    /**
     * Valid formats:
     (123) 456-7890
     (123)456-7890
     123-456-7890
     123.456.7890
     1234567890
     +31636363634
     075-63546725
     */
    const phoneHandler = (e) => {
        setPhoneNumber(e.target.value);
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        let err = !re.test(String(e.target.value).toLowerCase())
            ? "Phone number incorrect"
            : "";
        setPhoneNumberError(err)
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

    const confirmedPasswordHandler = (e) => {
        setConfirmedPassword(e.target.value);
        let err = "";
        if (e.target.value.length < 8)
            err = "Email to short. Min length=8 | Your length is " + e.target.value.length;
        else if (e.target.value.length > 32)
            err = "Email to long. Max length=32 | Your length is " + e.target.value.length;
        else if (e.target.value !== password)
            err = "Different passwords";
        setConfirmedPasswordError(err);
    }

    useEffect(() => {
        if (nameError || surnameError || fatherNameError || phoneNumberError ||
            emailError || passwordError || confirmedPasswordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    })


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-4">
                <h2 className="m-auth">Реєстрація</h2>
                <Form className="d-flex flex-column">
                    <div className="d-flex flex-row">
                        <Form.Control
                            className="mt-3"
                            placeholder="Enter surname"
                            value={name}
                            onChange={e => nameHandler(e, 'name')}
                            name='name'
                            onBlur={e => bluerHandler(e)}
                        />
                        <Form.Control
                            className="mt-3 ml-1"
                            placeholder="Enter name"
                            value={surname}
                            name='surname'
                            onChange={e => nameHandler(e, 'surname')}
                            onBlur={e => bluerHandler(e)}
                        />
                        <Form.Control
                            className="mt-3 ml-1"
                            placeholder="Enter father Name"
                            value={fatherName}
                            name='fatherName'
                            onChange={e => nameHandler(e, 'fatherName')}
                            onBlur={e => bluerHandler(e)}
                        />
                    </div>
                    {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                    {(surnameDirty && surnameError) && <div style={{color: 'red'}}>{surnameError}</div>}
                    {(fatherNameDirty && fatherNameError) && <div style={{color: 'red'}}>{fatherNameError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => emailHandler(e)}
                        name='email'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={e => phoneHandler(e)}
                        name='phoneNumber'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(phoneNumberDirty && phoneNumberError) && <div style={{color: 'red'}}>{phoneNumberError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => passwordHandler(e)}
                        name='password'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder="Confirmed your password"
                        value={confirmedPassword}
                        onChange={e => confirmedPasswordHandler(e)}
                        name='confirmedPassword'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(confirmedPasswordDirty && confirmedPasswordError) &&
                    <div style={{color: 'red'}}>{confirmedPasswordError}</div>}
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            Вже є акаунт ? <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
                        </div>
                        <Button variant={"outline-success"}
                                disabled={!formValid}>

                            Зареєструвати мене
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationPage;