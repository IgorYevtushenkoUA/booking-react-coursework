import {observer} from "mobx-react-lite";
import React from "react";
import "./i18n.js"
import {useSelector} from "react-redux";
import {usePreload} from "./app/hooks/usePreload";
import {loadAllFlats} from "./app/store/additional/user/userActions";
const App = observer((props) => {

    const user = useSelector(store => store.user);

    console.log(user);


    return (
        <div>Hello</div>
        // <BrowserRouter>
        //     <NavBar/>
        //     <AppRouter/>
        // </BrowserRouter>
    );
});

export default App;
