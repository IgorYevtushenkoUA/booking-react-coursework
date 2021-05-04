import React from 'react';
import {useSelector} from "react-redux";
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes} from "../../routes";
import {MAIN_ROUTE} from "../../utils/consts";

const AppRouter = () => {

    const user = useSelector(store => store.user);

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
    );
};

export default AppRouter;