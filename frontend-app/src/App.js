import {BrowserRouter, Route} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/navbar/NavBar";
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";

const App = observer((props) => {

    return (
        <BrowserRouter>
            <NavBar user={props.state.user}/>
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
