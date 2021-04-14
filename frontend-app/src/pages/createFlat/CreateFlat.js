import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";

const CreateFlat = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center">
            <Card style={{width: 760}}>
                <h2>Створити квартиру</h2>
                <Form>

                    <div className="city ">
                        <div className="d-flex flex-row">
                            <Form.Control className="mt-3" placeholder="Enter city"/>
                            <Form.Control className="mt-3 ml-1" placeholder="Enter region"/>
                            <Form.Control className="mt-3 ml-1" placeholder="Enter area"/>
                            <Form.Control className="mt-3 ml-1" placeholder="Enter street"/>
                        </div>
                    </div>

                    <div className="house">
                        <div className="d-flex flex-row">
                            <Form.Control className="mt-3" placeholder="Enter house num"/>
                            <Form.Control className="mt-3 ml-1" placeholder="Enter house year"/>
                            <Form.Control className="mt-3 ml-1" placeholder="Enter house type"/>
                            <Form.Control className="mt-3 ml-1" placeholder="Enter num of floors"/>
                        </div>
                        <div className="d-flex flex-row">
                            <Form.Control className="mt-3" placeholder="Enter metro station"/>
                            <Form.Control className="mt-3" placeholder="Enter house advantage"/>
                        </div>
                    </div>

                    <div className="flat">
                        <div className="d-flex flex-row">
                            <Form.Control className="mt-3" placeholder="Enter floor"/>
                            <Form.Control className="mt-3" placeholder="Enter square_all"/>
                            <Form.Control className="mt-3" placeholder="Enter square_living"/>
                            <Form.Control className="mt-3" placeholder="Enter price_month"/>
                        </div>
                        <div className="d-flex flex-row">
                            <Form.Control className="mt-3" placeholder="Enter rooms_num"/>
                            <Form.Control className="mt-3" placeholder="Enter balconies_num"/>
                            <Form.Control className="mt-3" placeholder="Enter pledge"/>
                            <Form.Control className="mt-3" placeholder="Enter elements"/>
                            <Form.Control className="mt-3" placeholder="Enter rent type"/>
                        </div>
                        <Form.Control className="mt-3" placeholder="Enter short description"/>
                        <Form.Control className="mt-3" placeholder="Enter main description"/>
                    </div>
                </Form>
                <Button>Створити</Button>
            </Card>

        </Container>
    );
};

export default CreateFlat;