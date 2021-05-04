import React from 'react';
import {Card} from "react-bootstrap";
import {RENT_FLATS_ROUTE} from "../../../../../../utils/consts";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadFlat} from "../../../../../../store/additional/user/userActions";

const FlatItem = ({flat}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const click = async () => {
        dispatch(loadFlat(flat.flat_id));
        console.log()
        history.push(RENT_FLATS_ROUTE + '/' + flat.flat_id)
    }

    return (
        <div className="mt-3">
            <Card bg="light">
                <div onClick={click}>
                    <Card.Img
                        src='https://www.apartments.com/images/default-source/2020-blogimages/apartments493227be-286f-4141-aceb-d874f43b13cd.tmb-featuredim.jpg?sfvrsn=42e4b1d3_1'/>
                    <Card.Text className="mt-4">{flat.short_description}</Card.Text>
                </div>
            </Card>
        </div>
    );
};

export default FlatItem;