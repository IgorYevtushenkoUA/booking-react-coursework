import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import Counter from "../../store/Counter.js"
import {LOGIN_ROUTE} from "../../utils/consts";


// observer -> для відслудковування змін у реальному  часі
const NavBar = observer((props) => {

    // залежно від коирстувачів, різний Navbar
    const {user} = useContext(Context);
    let role = localStorage.getItem('role');

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} href="/">Flatty</NavLink>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Main</Nav.Link>
                    <Nav.Link href="/about-us">About US</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/">{Counter.getCounter()}</Nav.Link>

                </Nav>

                {role == 1
                    ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Адмін панель</Button>
                        <Link to={"/"}>
                            <Button
                                onClick={() => {
                                    localStorage.setItem('role', 0);
                                    localStorage.setItem('user', {});
                                    window.location.reload();

                                }}
                                variant={"outline-light"}
                                className={"ml-1"}>Вийти</Button>
                        </Link>

                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Link to={LOGIN_ROUTE}>
                            <Button variant={"outline-light"}
                                // onClick={() => user.setIsAuth(!user.isAuth)}
                            >Авторизація</Button>
                        </Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;