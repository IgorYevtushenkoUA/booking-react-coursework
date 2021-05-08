import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import "./i18n.js"
import {useSelector} from "react-redux";
import {usePreload} from "./app/hooks/usePreload";
import {loadAllFlats} from "./app/store/additional/user/userActions";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./app/component/navbar/NavBar";
import AppRouter from "./app/component/router/AppRouter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = (props) => {

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;
