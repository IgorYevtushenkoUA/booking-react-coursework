import React from 'react';
import {usePreloadPRO} from "../../../hooks/usePreload";
import {
    LOAD_CLIENT_LIKED_FLAT,
    LOAD_OWNER_HAS_FLATS,
    loadClientLikedFlat
} from "../../../store/additional/user/userActions";
import {useSelector} from "react-redux";
import OwnerFlatList from "./list/OwnerFlatList";

const OwnerFlatPage = () => {

    let accountId = localStorage.getItem("accountId");
    usePreloadPRO(loadClientLikedFlat, `api/user/owner_has_flat/${accountId}`, LOAD_OWNER_HAS_FLATS);

    let flats = useSelector(store => store.user.ownerHasFlat);

    if (flats.length === 0) {
        return (<div>Квартир немає</div>);
    } else {
        return (
            <OwnerFlatList
                accountId={flats[0].accountId}
                flatId={flats.map(a => a.flatId)}/>
        );
    }
};

export default OwnerFlatPage;