import React from 'react';
import LikedFlatItem from "./item/LikedFlatItem";
import FlatItem from "../../../flats/flats/rent/list/item/FlatItem";
import {Col} from "react-bootstrap";

const LikedFlatList = (props) => {

    debugger

    return (
        <div>
            {props.flats.map(flat =>
                <LikedFlatItem
                    key={flat.flatId}
                    clientHasLikedFlat={flat}/>
            )}
        </div>
    );
};

export default LikedFlatList;