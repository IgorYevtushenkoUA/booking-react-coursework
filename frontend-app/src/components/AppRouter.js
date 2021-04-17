import React, {useContext} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes/routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer((props) => {

    return (
        <Switch>
            {authRoutes.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    component={Component}
                    exact/>
            )}
        </Switch>
    )
})

export default AppRouter;


