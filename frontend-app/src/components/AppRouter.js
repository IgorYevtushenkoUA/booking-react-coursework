import React, {useContext} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes/routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {MAIN_ROUTE} from "../utils/consts";
import "../i18n.js"

const AppRouter = observer((props) => {

    const {user} = useContext(Context);

    return (
        <Switch>
            {authRoutes.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    component={Component}
                    exact/>
            )}
            <Redirect to={MAIN_ROUTE} />
        </Switch>
    )
})

export default AppRouter;


