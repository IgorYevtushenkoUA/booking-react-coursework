import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {MAIN_ROUTE, OWNER_PERSONAL_PAGE, REGISTRATION_ROUTE} from "../../../utils/consts";
import {login} from "../../../http/userApi";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const LoginPage = observer(() => {

    const {user} = useContext(Context);
    const [email, setEmail] = useState('email@gmail.com');
    const [password, setPassword] = useState('password');
    const history = useHistory();

    useEffect(() => {

    }, []);

    const click = async () => {
        try {
            let data;
            data = await login(email, password);
            console.log(1)
            user.setUser(data);
            console.log(2)
            history.push(OWNER_PERSONAL_PAGE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

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
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            Немає акаунту? <NavLink to={REGISTRATION_ROUTE}>Зареєструватися</NavLink>
                        </div>
                        <Button variant={"outline-success"} onClick={click}>
                            Ввійти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default LoginPage;