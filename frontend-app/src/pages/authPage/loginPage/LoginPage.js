import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../../../utils/consts";

const LoginPage = () => {
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
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            Немає акаунту? <NavLink to={REGISTRATION_ROUTE}>Зареєструватися</NavLink>
                        </div>
                        <Button variant={"outline-success"}>
                            Ввійти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default LoginPage;