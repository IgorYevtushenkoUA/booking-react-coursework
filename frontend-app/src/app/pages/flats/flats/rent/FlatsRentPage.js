import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePreload, usePreloadPRO} from "../../../../hooks/usePreload";
import {Col, Container, Row} from "react-bootstrap";
import Filter from "./filter/Filter";
import FlatsList from "./list/FlatsList";
import {FLATS_FIRST_IMAGE, loadFlatData, loadFlatsFirstImageURL} from "../../../../store/additional/flat/flatActions";

const FlatsRentPage = () => {

    usePreload(loadFlatData);
    usePreloadPRO(loadFlatsFirstImageURL, `api/flats/flats_first_image`, FLATS_FIRST_IMAGE);

    const flats = useSelector(store => store.flat.flatData);
    const imageURL = useSelector(store => store.flat.flatsFirstImage);

    const [showFlat, setShowFlat] = useState(false);

    const styleFilterDiv = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const styleFilterBtn = {
        width: '100%',
    }

    if (imageURL.length == 0) {
        return (
            <div>
                LOADING ....
            </div>
        );
    } else {

        debugger

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
                        <FlatsList
                            flats={flats}
                            imageURL={imageURL}/>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default FlatsRentPage;