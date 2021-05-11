import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePreload, usePreloadPRO} from "../../../../hooks/usePreload";
import {Col, Container, Row} from "react-bootstrap";
import Filter from "./filter/Filter";
import FlatsList from "./list/FlatsList";
import FlatGeolocation from "./geolocation/FlatGeolocation";
import {loadFlatData} from "../../../../store/additional/flat/flatActions";

const FlatsRentPage = () => {

    usePreload(loadFlatData);
    const flats = useSelector(store => store.flat.flatData);
    const [showFlat, setShowFlat] = useState(false);

    const styleFilterDiv = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const styleFilterBtn = {
        width: '100%',
    }

    if (!flats) {
        return (
            <div>
                RentFlatsPage
            </div>
        );
    } else {
        return (
            <Container>
                <div style={styleFilterDiv}>
                    <button className="btn btn-dark"
                            style={styleFilterBtn}
                            onClick={() => {
                                setShowFlat(!showFlat)
                            }}>Filter
                    </button>
                </div>
                {showFlat ? <Filter/> : <div></div>}

                <Row>
                    <Col>
                        <FlatsList flats={flats}/>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default FlatsRentPage;