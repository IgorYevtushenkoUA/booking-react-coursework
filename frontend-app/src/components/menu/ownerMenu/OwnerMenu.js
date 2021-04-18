import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";
import * as PropTypes from "prop-types";

// всі квартири
// Додати квартиру
// Сторінка Власника

class MenuItem extends React.Component {
    render() {
        return null;
    }
}

MenuItem.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node
};
const OwnerMenu = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                Режим
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Всі квартири</Dropdown.Item>
                <Dropdown.Item href="/create">Додати квартиру</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Внести зміни</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default OwnerMenu;