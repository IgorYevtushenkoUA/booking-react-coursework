import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import Counter from "../../store/Counter.js"


// observer -> для відслудковування змін у реальному  часі
const NavBar = observer((props) => {

    // залежно від коирстувачів, різний Navbar
    // const {user} = useContext(Context);
    const user = props.user;
    console.log("NAVBAR::")
    console.log(props.user);
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

                {user.roleRoleId===1
                    ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Адмін панель</Button>
                        <Link to={"/"}>
                            <Button variant={"outline-light"} className={"ml-1"}>Вийти</Button>
                        </Link>

                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Link to={"/login"}>
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