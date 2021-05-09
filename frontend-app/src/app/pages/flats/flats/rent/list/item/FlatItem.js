import React from 'react';
import {Card} from "react-bootstrap";
import {RENT_FLATS_ROUTE} from "../../../../../../utils/consts";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    LOAD_HOUSE, LOAD_HOUSE_DATA, loadAreaById, loadCityById,
    loadData,
    loadFlat,
    loadHouseById,
    loadStreetById
} from "../../../../../../store/additional/flat/flatActions";
import {usePreloadPRO} from "../../../../../../hooks/usePreload";

const FlatItem = ({flat}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const click = async () => {
        dispatch(loadFlat(flat.flat_id));
        history.push(RENT_FLATS_ROUTE + '/' + flat.flat_id)
    }

    return (
        <div className="mt-3">
            <Card bg="light">
                <div onClick={click}>
                    <div className="imageBlock">
                        <Card.Img
                            src='https://www.apartments.com/images/default-source/2020-blogimages/apartments493227be-286f-4141-aceb-d874f43b13cd.tmb-featuredim.jpg?sfvrsn=42e4b1d3_1'/>
                    </div>

                    <div className="infoBlock">
                        <div>
                            <div>{flat.price_month}</div>
                            <div>
                                <div>{flat.rooms_num}</div>
                                <div>{flat.square_all} | {flat.square_living}</div>
                            </div>
                        </div>
                        <div>
                            {flat.street_name}
                        </div>
                        <div>{flat.area_name} | {flat.city_name}</div>
                        <div>{flat.short_description}</div>
                        <div>{flat.floors_num} | {flat.floors_num}</div>
                        <div>
                            <div>{flat.updatedAt}</div>
                            <div>{flat.createdAt}</div>
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FlatItem;