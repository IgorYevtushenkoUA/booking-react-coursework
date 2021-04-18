import {BrowserRouter, Route} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/navbar/NavBar";
import {observer} from "mobx-react-lite";
import React from "react";
import "./i18n.js"
const App = observer((props) => {

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
