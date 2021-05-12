import React from 'react';
import OwnerFlatItem from "./item/OwnerFlatItem";

const OwnerFlatList = (props) => {
    return (
        <div>
            {props.flats.map(flat =>
                <OwnerFlatItem
                    key={flat.flatId}
                    ownerHasFlat={flat}/>
            )}
        </div>
    );
};

export default OwnerFlatList;