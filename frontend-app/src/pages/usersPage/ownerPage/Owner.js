import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const Owner = observer(() => {

    let user = JSON.parse(localStorage.getItem('user'));

    console.log(user)
    console.log(user.user_id)
    console.log(user.email)

    return (
        <div>
            {user.user_id}
        </div>
    );
});

export default Owner;