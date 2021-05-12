import React from 'react';
import {usePreloadPRO} from "../../../hooks/usePreload";
import {LOAD_CLIENT_LIKED_FLAT, loadClientLikedFlat} from "../../../store/additional/user/userActions";
import {useSelector} from "react-redux";
import OwnerFlatList from "./list/OwnerFlatList";

const OwnerFlatPage = () => {

    let accountId = localStorage.getItem("accountId");
    usePreloadPRO(loadClientLikedFlat, `api/user/owner_has_flat/${accountId}`, LOAD_CLIENT_LIKED_FLAT);

    let flats = useSelector(store => store.user.clientLikedFlat);

    if (flats.length === 0) {
        return (<div>Loading</div>);
    } else {
        return (
            <OwnerFlatList flats={flats}/>
        );
    }
};

export default OwnerFlatPage;