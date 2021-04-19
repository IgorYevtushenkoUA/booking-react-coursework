import React from 'react';
import {Container} from "react-bootstrap";
import VariantBlock from "./variantBlock/VariantBlock";
import {RENT_FLATS_ROUTE, SELL_FLATS_ROUTE} from "../../utils/consts";
import {useTranslation} from "react-i18next";
import "./Main.css"

const Main = (props) => {
    const {t} = useTranslation();
    return (
        <div className="main-page">
            <div className="rent">
                <VariantBlock title={t("main.rent")} border="orange"  block="block1" link={RENT_FLATS_ROUTE}/>
            </div>
            <div className="sell">
                <VariantBlock title={t("main.sell")} border="yellow" block="block2" link={SELL_FLATS_ROUTE}/>
            </div>
        </div>
    );
};

export default Main;