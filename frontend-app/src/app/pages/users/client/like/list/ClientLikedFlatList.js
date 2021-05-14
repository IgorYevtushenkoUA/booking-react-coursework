import React from 'react';
import ClientLikedFlattem from "./item/ClientLikedFlattem";
import {usePreloadPRO, usePreloadPRO3} from "../../../../hooks/usePreload";
import {
    LOAD_FLAT_DATA_BY_ID, LOAD_FLAT_HAS_IMAGE_URL,
    LOAD_OWNER_HAS_FLATS_DATA, LOAD_OWNER_HAS_FLATS_IMAGES,
    LOAD_OWNER_HAS_FLATS_IMAGES_URL,
    loadData, loadFlatHasImageUrl, loadOwnerHasFlatImageURL
} from "../../../../store/additional/flat/flatActions";
import {useSelector} from "react-redux";

const ClientLikedFlatList = (props) => {

    let accountId = props.accountId;

    usePreloadPRO(loadData, `api/flats/owner_has_flat_data/${accountId}`, LOAD_OWNER_HAS_FLATS_DATA);
    usePreloadPRO(loadData, `api/flats/owner_has_flat_image_url/${accountId}`, LOAD_OWNER_HAS_FLATS_IMAGES);
    usePreloadPRO3(loadOwnerHasFlatImageURL, `api/flats/flat/${accountId}`, LOAD_OWNER_HAS_FLATS_IMAGES_URL, accountId);


    let ownerHasFlatData = useSelector(store => store.flat.ownerHasFlatData),
        ownerHasFlatImages = useSelector(store => store.flat.ownerHasFlatImages),
        ownerHasFlatImagesURL = useSelector(store => store.flat.ownerHasFlatImagesURL);


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
                    <ClientLikedFlattem
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