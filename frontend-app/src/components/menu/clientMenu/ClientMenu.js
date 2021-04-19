import React, {useState} from 'react';
import {Container, Dropdown, Nav} from "react-bootstrap";
import {useTranslation} from "react-i18next";

// quick love
// favourite flats
// personal page


const ClientMenu = () => {
    const [mes, setMessage] = useState('режим');
    const {t} = useTranslation();
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                {mes}
            </Dropdown.Toggle>

            <Dropdown.Menu>

                <Dropdown.Item onClick={() => {
                    setMessage(`${t("menu.client.quick_love")}`)
                }} href="#/action-1">{t("menu.client.quick_love")}</Dropdown.Item>

                <Dropdown.Item href="/create"
                               onClick={() => {
                                   setMessage(`${t("menu.client.liked")}`)
                               }}>{t("menu.client.liked")}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ClientMenu;