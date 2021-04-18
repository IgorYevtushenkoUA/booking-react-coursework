import React, {createContext} from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import FlatsStore from "./store/FlatsStore";
import "./i18n.js";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        flats: new FlatsStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
