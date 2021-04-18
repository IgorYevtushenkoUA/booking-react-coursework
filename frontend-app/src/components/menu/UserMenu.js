import React from 'react';
import AdminMenu from "./adminMenu/AdminMenu";
import OwnerMenu from "./ownerMenu/OwnerMenu";
import ClientMenu from "./clientMenu/ClientMenu";

const UserMenu = (props) => {

    const role = props.role
    console.log(role === '3')
    if (role == 1) {
        return (<AdminMenu/>);
    } else if (role == 2) {
        return (<OwnerMenu/>);
    } else if (role == 3) {
        console.log("clientMenu")
        return (<ClientMenu/>);
    } else {
        return (<div></div>);
    }
};

export default UserMenu;