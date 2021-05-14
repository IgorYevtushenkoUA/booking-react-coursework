import React from 'react';
import {usePreloadPRO, usePreloadPRO3} from "../../../hooks/usePreload";
import {LOAD_CLIENT_LIKED_FLAT, loadClientLikedFlat} from "../../../store/additional/user/userActions";
import {useSelector} from "react-redux";
import LikedFlatList from "./list/LikedFlatList";

const ClientLikedFlatPage = () => {

    let accountId = localStorage.getItem("accountId");
    usePreloadPRO(loadClientLikedFlat, `api/user/client_liked_flat/${accountId}`, LOAD_CLIENT_LIKED_FLAT);

    let flats = useSelector(store => store.user.clientLikedFlat);

    if (flats.length === 0) {
        debugger
        return (<div>Loading</div>);
    } else {
        debugger
        return (
            <LikedFlatList flats={flats}/>
        );
    }
};

export default ClientLikedFlatPage;