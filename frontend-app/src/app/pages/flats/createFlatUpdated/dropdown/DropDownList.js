import React, {useState} from 'react';
import {Card, Dropdown, Form, FormControl} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownToggle from "react-bootstrap/DropdownToggle";

const DropDownList = (props) => {
    let elem = props.data;
    const [menuName, setMenuName] = useState(`${props.title}`);

    const setData = (id, name) => {
        props.setData(id, props.type);
        setMenuName(name);
        console.log("setData click")
        debugger
    }

    return (
        <Card style={{marginTop: '20px'}}>
            <Dropdown>
                <DropdownToggle as={CustomToggle}>{menuName}</DropdownToggle>
                <DropdownMenu as={CustomMenu} style={{maxHeight: '250px', overflowY: 'scroll'}}>
                    {elem.map(item => (
                        <DropdownItem
                            key={item.id}
                            label={item.name}
                            onClick={(e) => {
                                setData(item.id, item.name)
                            }}
                        >
                            {item.name}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </Card>
    );
};

export default DropDownList;

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <a
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));

const CustomMenu = React.forwardRef(
    ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
        const [value, setValue] = useState('');

        return (
            <Card
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => {
                        setValue(e.target.value)
                        console.log("change CustomMenu")
                    }}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </Card>
        );
    },
);

