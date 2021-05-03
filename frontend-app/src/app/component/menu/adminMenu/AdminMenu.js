import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {Dropdown} from "react-bootstrap";

const AdminMenu = () => {

    const [mes, setMessage] = useState('режим');
    const {t} = useTranslation();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                {mes}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => {
                    setMessage(`${t("menu.admin.admin")}`)
                }} href="#/action-1">{t("menu.admin.admin")}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default AdminMenu;