import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes/routes";


const AppRouter = () => {
    const isAuth = true;
    return (
        <Switch>
            {/*// key -> щоб мали index*/}
            {/*// path -> url*/}
            {/*// Component -> our page*/}
            {/*// exact -> об збігалися адреса точ в точ*/}
            {/*{isAuth && authRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} components={Component} exact/>*/}
            {/*)}*/}
            {/* якщо користувач не авторизований*/}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} components={Component} exact/>
            )}
        </Switch>
    );
};


export default AppRouter;