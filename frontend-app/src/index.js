import React, {createContext} from 'react';
import state, {addUser} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <App state={state} addUser={addUser}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
