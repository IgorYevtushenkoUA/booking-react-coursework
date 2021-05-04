import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import "./i18n.js"
import {useSelector} from "react-redux";
import {usePreload} from "./app/hooks/usePreload";
import {loadAllFlats} from "./app/store/additional/user/userActions";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./app/component/navbar/NavBar";
import AppRouter from "./app/component/router/AppRouter";

const App = observer((props) => {

    const user = useSelector(store => store.user);

    console.log(user);
    let count = 0;

    // usePreload(loadAllFlats)

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
