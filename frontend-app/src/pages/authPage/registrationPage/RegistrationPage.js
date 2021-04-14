import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../../utils/consts";

const RegistrationPage = () => {
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
                        />
                        <Form.Control
                            className="mt-3 ml-1"
                            placeholder="Enter name"
                        />
                        <Form.Control
                            className="mt-3 ml-1"
                            placeholder="Enter father Name"
                        />
                    </div>
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter phone number"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            Вже є акаунт ? <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
                        </div>
                        <Button variant={"outline-success"}>
                            Зареєструвати мене
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationPage;