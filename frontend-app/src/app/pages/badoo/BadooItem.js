import React from 'react';
import ImageList from "../flat/imageList/ImageList";
import {usePreloadPRO, usePreloadPRO3} from "../../hooks/usePreload";
import {
    LOAD_FLAT_DATA_BY_ID,
    LOAD_FLAT_HAS_IMAGE_URL,
    loadData,
    loadFlatHasImageUrl
} from "../../store/additional/flat/flatActions";
import {useSelector} from "react-redux";

const BadooItem = (props) => {


    usePreloadPRO3(loadFlatHasImageUrl, `api/flats/flat_has_image/${props.randomId}`, LOAD_FLAT_HAS_IMAGE_URL, props.randomId);
    usePreloadPRO(loadData, `api/flats/flat_data/${props.randomId}`, LOAD_FLAT_DATA_BY_ID);

    let flat = useSelector(store => store.flat.flatDataById)
    let imagesURL = useSelector(store => store.flat.flatHasImageURL);

    const like = () => {
        props.like(flat.flat_id);
    }
    const dislike = () => {
        debugger
        props.dislike(flat.flat_id);
    }

    if (flat == null || imagesURL.length === 0) {
        return (
            <div>Loading</div>
        );
    } else {
        flat = flat[0];
        const updated = flat.updatedAt.toString().replace("T", " ").replace(".000Z", "");
        const created = flat.createdAt.toString().replace("T", " ").replace(".000Z", "");


        debugger
        return (
            <div className={"badoo"}>
                <div className="badoo_item">
                    <div className="image_block">
                        <ImageList images={imagesURL}/>
                    </div>
                </div>

                <div className="info_block">
                    <div>

                        <div>
                            {flat.price_month} грн
                        </div>

                        <div>
                            <div>{flat.street_name} {flat.house_num}</div>
                            <div>{flat.area_name} район, {flat.region_name} область,
                                місто {flat.city_name}</div>
                        </div>
                        <div style={{display: 'grid', gridTemplateColumns: '4fr 6fr'}}>
                            <div>
                                <div>Кімнат :{flat.rooms_num}</div>
                                <div>{flat.square_all} / {flat.square_living} м²</div>
                                <div> Повер {flat.flat_floor} із {flat.house_floors}</div>
                            </div>
                            <div>
                                <div>Опалення : {flat.heating_name}</div>
                                <div>Будинок {flat.house_year} року</div>
                            </div>
                        </div>
                        <div>{flat.short_description}</div>
                        <div>
                            <div>Оновлено : {updated}</div>
                            <div>Створено : {created}</div>
                        </div>
                    </div>
                </div>
                <div className="btn_badoo">
                    <button
                        onClick={dislike}
                        className="btn dislike">Dislike
                    </button>
                    <button
                        onClick={like}
                        className="btn like">
                        Liked
                    </button>
                </div>
            </div>
        );
    }
};

export default BadooItem;