import React from 'react';
import {usePreloadPRO} from "../../../hooks/usePreload";
import {LOAD_CLIENT_LIKED_FLAT, loadClientLikedFlat} from "../../../store/additional/user/userActions";
import {useSelector} from "react-redux";
import ClientLikedFlatList from "./list/ClientLikedFlatList";

const ClientLikedFlatPage = () => {

    let accountId = localStorage.getItem("accountId");
    usePreloadPRO(loadClientLikedFlat, `api/user/client_liked_flat/${accountId}`, LOAD_CLIENT_LIKED_FLAT);

    let flats = useSelector(store => store.user.clientLikedFlat);

    if (flats.length === 0) {
        return (<div>Квартир немає</div>);
    } else {
        return (
            <ClientLikedFlatList
                accountId={flats[0].accountId}
                flatId={flats.map(a => a.flatId)}/>
        );
    }
};

export default ClientLikedFlatPage;