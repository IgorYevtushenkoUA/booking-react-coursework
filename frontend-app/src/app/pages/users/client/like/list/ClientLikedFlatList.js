import React from 'react';

import {usePreloadPRO, usePreloadPRO3} from "../../../../../hooks/usePreload";
import {useSelector} from "react-redux";
import ClientLikedFlatItem from "./item/ClientLikedFlatItem";
import {
    LOAD_CLIENT_LIKED_FLATS_DATA, LOAD_CLIENT_LIKED_FLATS_IMAGES, LOAD_CLIENT_LIKED_FLATS_IMAGES_URL,
    loadData,
    loadOwnerHasFlatImageURL
} from "../../../../../store/additional/flat/flatActions";

const ClientLikedFlatList = (props) => {

    let accountId = props.accountId;

    usePreloadPRO(loadData, `api/flats/client_liked_flat_data/${accountId}`, LOAD_CLIENT_LIKED_FLATS_DATA);
    usePreloadPRO(loadData, `api/flats/client_liked_flat_image_url/${accountId}`, LOAD_CLIENT_LIKED_FLATS_IMAGES);
    usePreloadPRO3(loadOwnerHasFlatImageURL, `api/flats/flat/${accountId}`, LOAD_CLIENT_LIKED_FLATS_IMAGES_URL, accountId);


    let ownerHasFlatData = useSelector(store => store.flat.clientLikedFlatData),
        ownerHasFlatImages = useSelector(store => store.flat.clientLikedFlatImages),
        ownerHasFlatImagesURL = useSelector(store => store.flat.clientLikedFlatImagesURL);


    console.log(ownerHasFlatImagesURL);
    debugger

    let counter = 0;

    if (ownerHasFlatImagesURL.length == 0) {
        debugger
        return (
            <div>Loading</div>
        );
    } else {
        debugger
        return (
            <div>
                {ownerHasFlatData.map(flat =>
                    <ClientLikedFlatItem
                        key={flat.flatId}
                        flat={flat}
                        imageURL={ownerHasFlatImagesURL[counter++].url}
                    />
                )}
            </div>
        );
    }
};

export default ClientLikedFlatList;