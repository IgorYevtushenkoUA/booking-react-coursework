import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../../../../utils/consts";
import {useTranslation} from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {register} from "../../../../store/additional/user/userActions";
import {useDispatch} from "react-redux";


const RegistrationAccountPage = (props) => {
    const {t} = useTranslation();
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [birth, setBirth] = useState(new Date());
    const [gender, setGender] = useState(null);

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

    const dispatch = useDispatch();

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

    const buildBirth = (birth) => {
        let month = birth.getMonth() > 9 ? birth.getMonth() : "0" + birth.getMonth();
        let day = birth.getDay() > 9 ? birth.getDay() : "0" + birth.getDay();
        return birth.getFullYear() + "-" + month + "-" + day + " 00:00:00";
    }

    useEffect(() => {
        if (nameError || surnameError || fatherNameError || phoneNumberError ||
            emailError || passwordError || confirmedPasswordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    })


    const registerUser = async () => {
        try {
            let account = {
                first_name: name,
                second_name: fatherName,
                birth: birth,
                gender: gender,
                email: email,
                password: password,
                phone_num1: phoneNumber,
                phone_num2: null,
                phone_num3: null,
                last_name: surname,
                roleRoleId: props.role
            }
            dispatch(register(account));
            history.push(MAIN_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <Container
            className="d-flex justify-content-center align-items-center register"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-4">
                {/*<h2 className="m-auth">{t("register.title")}</h2>*/}
                <h2 className="m-auth">Gender</h2>
                <Form className="d-flex flex-column">
                    <div className="d-flex flex-row">
                        <Form.Control
                            className="mt-3"
                            placeholder={t("register.enter_name")}
                            value={name}
                            onChange={e => nameHandler(e, 'name')}
                            name='name'
                            onBlur={e => bluerHandler(e)}
                        />
                        <Form.Control
                            className="mt-3 ml-1"
                            placeholder={t("register.enter_surname")}
                            value={surname}
                            name='surname'
                            onChange={e => nameHandler(e, 'surname')}
                            onBlur={e => bluerHandler(e)}
                        />
                        <Form.Control
                            className="mt-3 ml-1"
                            placeholder={t("register.enter_father_name")}
                            value={fatherName}
                            name='fatherName'
                            onChange={e => nameHandler(e, 'fatherName')}
                            onBlur={e => bluerHandler(e)}
                        />
                    </div>
                    {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                    {(surnameDirty && surnameError) && <div style={{color: 'red'}}>{surnameError}</div>}
                    {(fatherNameDirty && fatherNameError) && <div style={{color: 'red'}}>{fatherNameError}</div>}

                    <div className="d-flex mt-3">
                        <DatePicker selected={birth} onChange={
                            date => setBirth(date)
                        }/>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label={t("register.gender-woman")}
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        onClick={() => {
                                            setGender("w")
                                        }}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label={t("register.gender-man")}
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        onClick={() => {
                                            setGender("m")
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </div>

                    <Form.Control
                        className="mt-3"
                        placeholder={t("register.enter_email")}
                        value={email}
                        onChange={e => emailHandler(e)}
                        name='email'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder={t("register.enter_phone")}
                        value={phoneNumber}
                        onChange={e => phoneHandler(e)}
                        name='phoneNumber'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(phoneNumberDirty && phoneNumberError) && <div style={{color: 'red'}}>{phoneNumberError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder={t("register.enter_password")}
                        value={password}
                        onChange={e => passwordHandler(e)}
                        name='password'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <Form.Control
                        className="mt-3"
                        placeholder={t("register.enter_confirmed_password")}
                        value={confirmedPassword}
                        onChange={e => confirmedPasswordHandler(e)}
                        name='confirmedPassword'
                        onBlur={e => bluerHandler(e)}
                    />
                    {(confirmedPasswordDirty && confirmedPasswordError) &&
                    <div style={{color: 'red'}}>{confirmedPasswordError}</div>}
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            {t("register.account")} <NavLink to={LOGIN_ROUTE}>{t("register.login")}</NavLink>
                        </div>
                        <Button variant={"outline-success"}
                                disabled={!formValid}
                                onClick={registerUser}
                        >
                            {t("register.register")}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationAccountPage;