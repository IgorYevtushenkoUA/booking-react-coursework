import React from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/router/AppRouter.js"

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
export default App
