import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

// observer -> для відслудковування змін у реальному  часі
const NavBar = observer(() => {

    // залежно від коирстувачів, різний Navbar
    const {user} = useContext(Context);


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} href="/">Flatty</NavLink>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Main</Nav.Link>
                    <Nav.Link href="/about-us">About US</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                </Nav>

                {user.isAuth
                    ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Адмін панель</Button>
                        <Link to={"/login"}>
                            <Button variant={"outline-light"} className={"ml-1"}>Ввійти</Button>
                        </Link>

                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Link to={"/login"}>
                            <Button variant={"outline-light"}
                                    onClick={() => user.setIsAuth(!user.isAuth)}
                            >Авторизація</Button>
                        </Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;