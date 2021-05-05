import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";

const CreateFlatPage = () => {

    const [flatFloor, setFlatFloor] = useState('');
    const [squareAll, setSquareAll] = useState('');
    const [squareLiving, setSquareLiving] = useState('');
    const [priceMonth, setPriceMonth] = useState('');
    const [roomsNum, setRoomsNum] = useState('');
    const [balconiesNum, setBalconiesNum] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [mainDescription, setMainDescription] = useState('');
    const [pledge, setPledge] = useState('');

    const click = async () => {

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center">
            <Card style={{width: 760}}>
                <h2>Створити квартиру</h2>
                <Form>

                    <div className="city ">
                        {/*<div className="d-flex flex-row">*/}
                        <Form.Control className="mt-3" placeholder="Enter city"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter region"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter area"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter street"/>
                        {/*</div>*/}
                    </div>

                    <div className="house">
                        {/*<div className="d-flex flex-row">*/}
                        <Form.Control className="mt-3" placeholder="Enter house num"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter house year"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter house type"/>
                        <Form.Control className="mt-3 ml-1" placeholder="Enter num of floors"/>
                        {/*</div>*/}
                        {/*<div className="d-flex flex-row">*/}
                        <Form.Control className="mt-3" placeholder="Enter metro station"/>
                        <Form.Control className="mt-3" placeholder="Enter house advantage"/>
                        {/*</div>*/}
                    </div>

                    <div className="flat">

                        <div className="block">
                            <label>Поверх квартири</label>
                            <Form.Control className="mt-3" placeholder="Enter floor" value={flatFloor}
                                          onChange={e => setFlatFloor(e.target.value)}/>
                        </div>

                        <div className="block">
                            <label>Площа квартири</label>
                            <div className="d-flex flex-row">
                                <Form.Control className="mt-3" placeholder="Enter square_all" value={squareAll}
                                              onChange={e => setSquareAll(e.target.value)}/>
                                <Form.Control className="mt-3 ml-3" placeholder="Enter square_living"
                                              value={squareLiving}
                                              onChange={e => setSquareLiving(e.target.value)}/>
                            </div>
                        </div>

                        <div className="block">
                            <label className="flex-grow: 2">Ціна за місяць :: </label>
                            <Form.Control className="flex-grow:2 mt-3" placeholder="Enter price_month"
                                          value={priceMonth}
                                          onChange={e => setPriceMonth(e.target.value)}/>
                        </div>

                        <div className="block">
                            <label>Застава</label>
                            <Form.Control className="mt-3" placeholder="Enter pledge" value={pledge}
                                          onChange={e => setPledge(e.target.value)}/>
                        </div>

                        <div className="block">
                            <label>Кількість кімнат</label>
                            <Form.Control className="mt-3" placeholder="Enter rooms_num" value={roomsNum}
                                          onChange={e => setRoomsNum(e.target.value)}/>
                            {/*<Form.Control className="mt-3" placeholder="Enter elements"/>*/}
                            {/*<Form.Control className="mt-3" placeholder="Enter rent type"/>*/}
                        </div>

                        <div className="block">
                            <label>Кількість балконів</label>
                            <Form.Control className="mt-3" placeholder="Enter balconies_num" value={balconiesNum}
                                          onChange={e => setBalconiesNum(e.target.value)}/>
                        </div>

                        <Form.Control className="mt-3" placeholder="Enter short description" value={shortDescription}
                                      onChange={e => setShortDescription(e.target.value)}/>
                        <Form.Control className="mt-3" placeholder="Enter main description" value={mainDescription}
                                      onChange={e => setMainDescription(e.target.value)}/>
                    </div>
                </Form>
                <Button onClick={click}>Створити</Button>
            </Card>

        </Container>
    );
};

export default CreateFlatPage;