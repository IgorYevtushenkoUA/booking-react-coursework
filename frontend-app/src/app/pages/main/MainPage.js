import React from 'react';
import {useTranslation} from "react-i18next";
import VariantBlock from "./variantBlock/VariantBlock";
import {RENT_FLATS_ROUTE, SELL_FLATS_ROUTE} from "../../utils/consts";
import "../../style.css"


const MainPage = () => {
    const {t} = useTranslation();
    return (
        <div className="main-page">
            <div className="rent block">
                <VariantBlock title={t("main.rent")} border="btn_rent"  block="block1" link={RENT_FLATS_ROUTE}/>
            </div>
            <div className="sell block">
                <VariantBlock title={t("main.sell")} border="btn_sell" block="block2" link={SELL_FLATS_ROUTE}/>
            </div>
        </div>
    );
};

export default MainPage;