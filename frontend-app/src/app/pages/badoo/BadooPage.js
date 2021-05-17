import React from 'react';
import BadooItem from "./BadooItem";
import {usePreload, usePreloadPRO, usePreloadPRO3} from "../../hooks/usePreload";
import {
    LOAD_FLAT_DATA_BY_ID,
    LOAD_FLAT_HAS_IMAGE_URL, loadAllFlats,
    loadData,
    loadFlatHasImageUrl
} from "../../store/additional/flat/flatActions";
import {useDispatch, useSelector} from "react-redux";
import {
    ADD_CLIENT_LIKED_FLAT,
    ADD_CLIENT_WATCHED_FLAT,
    LOAD_CLIENT_WATCHED_FLAT,
    loadClientWatchedFlat,
    userAddData
} from "../../store/additional/user/userActions";

const BadooPage = () => {

    let accountId = localStorage.getItem("accountId");

    const setRandomId = (clientWatchedFlat, allFlats) => {
        if (allFlats.length === 0) {
            return 0;
        } else if (clientWatchedFlat.length == allFlats.length) {
            return -1;
        }
        let randomId = 0;
        let newFlat = false;
        while (!newFlat) {
            randomId = allFlats[Math.floor(Math.random() * allFlats.length)].id;
            if (clientWatchedFlat.filter(item => item.flatId == randomId).length === 0) {
                newFlat = true;
            }
        }
        return randomId;
    }


    usePreloadPRO3(loadClientWatchedFlat, `api/user/client_watched_flat/${accountId}`, LOAD_CLIENT_WATCHED_FLAT);
    usePreload(loadAllFlats);

    let clientWatchedFlat = useSelector(store => store.user.clientWatchedFlat)
    let allFlats = useSelector(store => store.flat.allFlats);
    let randomId = setRandomId(clientWatchedFlat, allFlats);
    const dispatch = useDispatch();


    const like = (flatId) => {
        debugger
        dispatch(userAddData(`api/user/client_watched_flat`, accountId, flatId, ADD_CLIENT_WATCHED_FLAT));
        dispatch(userAddData("api/user/client_liked_flat", accountId, flatId, ADD_CLIENT_LIKED_FLAT));
        window.location.reload();
    }

    const dislike = (flatId) => {

        dispatch(userAddData(`api/user/client_watched_flat`, accountId, flatId, ADD_CLIENT_WATCHED_FLAT));
        window.location.reload();

    }


    if (randomId == 0) {
        debugger
        return (
            <div>Loading</div>
        );
    } else if (randomId == -1) {
        debugger
        return (
            <div>All Flat you have seen</div>
        );
    } else {
        debugger
        return (
            <BadooItem
                randomId={randomId}
                like={like}
                dislike={dislike}
            />
        );
    }
};

export default BadooPage;