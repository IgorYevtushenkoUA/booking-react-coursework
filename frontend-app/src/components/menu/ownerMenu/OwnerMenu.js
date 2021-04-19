import React, {useState} from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";
import * as PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

// всі квартири
// Додати квартиру
// Сторінка Власника


const OwnerMenu = () => {

    const [mes, setMessage] = useState('режим');
    const {t} = useTranslation();
// todo, коли ми обрали режим а потім змінили  мову, то режим(мова) не змінюється
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                {mes}
            </Dropdown.Toggle>

            <Dropdown.Menu>

                <Dropdown.Item onClick={() => {
                    setMessage(`${t("menu.owner.create")}`)
                }} href="#/action-1">{t("menu.owner.create")}</Dropdown.Item>

                <Dropdown.Item href="/create"
                               onClick={() => {
                                   setMessage(`${t("menu.owner.flats")}`)
                               }}>{t("menu.owner.flats")}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default OwnerMenu;