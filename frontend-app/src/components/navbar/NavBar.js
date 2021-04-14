import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";

// observer -> для відслудковування змін у реальному  часі
const NavBar = observer(() => {

    // залежно від коирстувачів, різний Navbar
    const {user} = useContext(Context);


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} href="/">Flatty</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Адмін панель</Button>
                        <Button variant={"outline-light"} className={"ml-1"}>Ввійти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(!user.isAuth)}>Авторизація</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;