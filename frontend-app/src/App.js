import {BrowserRouter, Route} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/navbar/NavBar";
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";

const App = observer((props) => {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true);

    // todo
    // if (loading) {
    //     return <Spinner animation={"grow"}/>
    // }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
